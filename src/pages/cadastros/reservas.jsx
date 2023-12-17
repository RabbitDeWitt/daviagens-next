import React, { useEffect } from 'react'
import { FormReserva } from '@/components'
import { useAppContext } from '@/context/appContext'
import { useCliente, useDestinos, usePacote, useReserva } from '@/hooks'
import moment from 'moment'

const Reservas = () => {

  const { listarReserva, deletarReserva } = useReserva()
  const { listarDestinos } = useDestinos()
  const { listarPacote } = usePacote()
  const { listarCliente } = useCliente()
  const { reservas, setReserva, clientes, destinos, pacotes, setDestino, setPacote } = useAppContext()



  useEffect(() => {
    listarReserva()
    listarCliente()
    listarDestinos()
    listarPacote()
  }, [])

  return (
    <>
      <h1>Lista de Reservas</h1>
      <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#reservaModal"
        onClick={() => {
          setReserva({
            id: 0,
            cliente: { ...clientes[0] },
            destino: { ...destinos[0] },
            pacote: { ...pacotes[0] },
            dataPartida: '',
            dataRetorno: '',
            valor: { ...destinos[0] }.valor - ({ ...destinos[0] }.valor * ({ ...destinos[0] }.desconto / 100)) + { ...pacotes[0] }.valor
          })
          setDestino({ ...destinos[0] })
          setPacote({ ...pacotes[0] })
        }}>Cadastrar reserva</button>

      <FormReserva />

      <div className="table-responsive mt-3 ">
        <table className='table table-hover table-primary table-striped '>
          <thead className='table-dark '>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Cliente</th>
              <th scope="col">Destino</th>
              <th scope="col">Pacote</th>
              <th scope="col">Data de partida</th>
              <th scope="col">Data de retorno</th>
              <th scope="col">Total</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva, i) => (
              <tr key={i}>
                <th>{reserva.id}</th>
                <td>{reserva.cliente.nome}</td>
                <td>{reserva.destino.nome}</td>
                <td>{reserva.pacote.nome}</td>
                <td>{moment(reserva.dataPartida).format('DD/MM/yyyy')}</td>
                <td>{moment(reserva.dataRetorno).format('DD/MM/yyyy')}</td>
                <td>R$ {(reserva.valor).toFixed(2)}</td>
                <td>
                  <button className="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#reservaModal"
                    onClick={() => {
                      setReserva({ ...reserva })
                      setDestino(reserva.destino)
                      setPacote(reserva.pacote)
                    }}>Editar</button>
                  <button className="btn btn-danger" onClick={() => deletarReserva(reserva.id)}>Excluir</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </>
  )
}

export default Reservas