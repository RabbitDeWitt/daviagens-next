import { useAppContext } from '@/context/appContext'
import { useReserva } from '@/hooks'
import React, { useEffect } from 'react'

const FormReserva = () => {
  const { atualizarReserva, criarReserva, validarReserva } = useReserva()

  const {
    reserva,
    handleReservaInputChange,
    valido,
    clientes,
    destinos,
    pacotes,
    handleReservaClienteInputChange,
    handleReservaDestinoInputChange,
    handleReservaPacoteInputChange,
    total
  } = useAppContext()

  const { id, dataPartida, dataRetorno } = reserva

  useEffect(() => {
    validarReserva()
  }, [reserva])

  console.log("form total: " + total)


  return (
    <div className="modal fade dark" id="reservaModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {id == 0 ? 'Cadastrar' : 'Atualizar'} reserva</h1>
            <div data-bs-theme="dark">
              <button type="button" className="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
          </div>
          <div className="px-5 mt-3">
            <form className="d-flex flex-column">
              <div className="mb-3">
                <input type="text" id="id" name="id" className="form-control" hidden value={id} readOnly />
              </div>


              <div className="mb-3">
                <label htmlFor="cliente" className="form-label">Cliente:</label>
                <select className='w-100 ' name="cliente" id="cliente" onChange={handleReservaClienteInputChange}>
                  {id != 0 && <option key={0} value={reserva.cliente.id} selected>{reserva.cliente.nome}</option>}
                  {clientes.map(({ id, nome }, i) => (
                    <option key={i} value={id} selected={reserva.id == 0 && id == 1 ? true : false}>{nome}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="destino" className="form-label">Destino:</label>
                <select className='w-100 ' name="destino" id="destino" onChange={handleReservaDestinoInputChange}>
                  {id != 0 && <option key={0} value={reserva.destino.id} selected>{reserva.destino.nome}</option>}
                  {destinos.map(({ id, nome }, i) => (
                    <option key={i} value={id} selected={reserva.id == 0 && id == 1 ? true : false}>{nome}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="pacote" className="form-label">Pacote:</label>
                <select className='w-100 ' name="pacote" id="pacote" onChange={handleReservaPacoteInputChange}>
                  {id != 0 && <option key={0} value={reserva.pacote.id} selected>{reserva.pacote.nome}</option>}
                  {pacotes.map(({ id, nome }, i) => (
                    <option key={i} value={id} selected={reserva.id == 0 && id == 1 ? true : false}>{nome}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="dataPartida" className="form-label">Data de partida:</label>
                <input type="date" id="dataPartida" name="dataPartida" className="form-control" onChange={handleReservaInputChange} value={dataPartida} required />
              </div>
              <div className="mb-3">
                <label htmlFor="dataRetorno" className="form-label">Data de retorno:</label>
                <input type="date" id="dataRetorno" name="dataRetorno" className="form-control" onChange={handleReservaInputChange} value={dataRetorno} required />
              </div>
              <div className="mb-3">
                <h3>Total: R$ {total.toFixed(2)}</h3>
              </div>
              <div className="d-flex gap-2 justify-content-end mb-3">
                <a type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</a>
                <a
                  className={`btn btn-primary ${valido == false ? 'disabled' : ''}`}
                  data-bs-dismiss="modal"
                  onClick={() => id == 0 ? criarReserva() : atualizarReserva(id)}
                >
                  {id == 0 ? 'Cadastrar' : 'Atualizar'}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormReserva