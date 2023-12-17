import React, { useEffect } from 'react'
import { FormPacote } from '@/components'
import { useAppContext } from '@/context/appContext'
import { usePacote } from '@/hooks'

const Pacotes = () => {
  const { listarPacote, deletarPacote } = usePacote()
  const { pacotes, setPacote } = useAppContext()

  useEffect(() => {
    listarPacote()
  }, [])

  return (
    <>
      <h1>Lista de Pacotes</h1>
      <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#pacoteModal" onClick={() => setPacote({ id: 0, nome: '', valor: 0 })}>Cadastrar pacote</button>

      <FormPacote />

      <div className="table-responsive mt-3 ">
        <table className='table table-hover table-primary table-striped '>
          <thead className='table-dark '>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Valor</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacotes.map((pacote, i) => (
              <tr key={i}>
                <th>{pacote.id}</th>
                <td>{pacote.nome}</td>
                <td>R$ {(pacote.valor).toFixed(2)}</td>
                <td>
                  <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#pacoteModal" onClick={() => setPacote(pacote)}>Editar</button>
                  <button className="btn btn-danger" onClick={() => deletarPacote(pacote.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Pacotes