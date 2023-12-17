import React, { useEffect } from 'react'
import { FormDestino } from '@/components'
import { useAppContext } from '@/context/appContext'
import { useDestinos } from '@/hooks'

const Destinos = () => {
  const { listarDestinos, deletarDestino } = useDestinos()
  const { destinos, setDestino } = useAppContext()

  useEffect(() => {
    listarDestinos()
  }, [])
  return (
    <>
      <h1>Lista de Destinos</h1>
      <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#destinoModal" onClick={() => setDestino({ id: 0, nome: '', valor: 0, descricao: '', descricaoCompleta: '', desconto: 0, img: '', tipo: 'NACIONAL' })}>Cadastrar destino</button>

      <FormDestino />

      <div className="table-responsive mt-3 ">
        <table className='table table-hover table-primary table-striped '>
          <thead className='table-dark '>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Valor</th>
              <th scope="col">Desconto</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {destinos.map((destino, i) => (
              <tr key={i}>
                <th>{destino.id}</th>
                <td>{destino.nome}</td>
                <td>R$ {(destino.valor).toFixed(2)}</td>
                <td>{destino.desconto}%</td>
                <td>
                  <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#destinoModal" onClick={() => setDestino(destino)}>Editar</button>
                  <button className="btn btn-danger" onClick={() => deletarDestino(destino.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Destinos