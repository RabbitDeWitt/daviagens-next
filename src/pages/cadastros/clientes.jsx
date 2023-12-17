import React, { useEffect } from 'react'
import { FormCliente } from '@/components'
import { useAppContext } from '@/context/appContext'
import { useCliente } from '@/hooks'
import moment from 'moment'

const Clientes = () => {
  const { listarCliente, deletarCliente } = useCliente()
  const { clientes, setCliente } = useAppContext()

  useEffect(() => {
    listarCliente()
  }, [])

  return (
    <>
      <h1>Lista de Clientes</h1>
      <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#clienteModal" onClick={() => setCliente({ id: 0, nome: '', dataNasc: '', telefone: '', numPassaporte: '' })}>Cadastrar cliente</button>

      <FormCliente />

      <div className="table-responsive mt-3 ">
        <table className='table table-hover table-primary table-striped '>
          <thead className='table-dark '>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Telefone</th>
              <th scope="col">Data de Nascimento</th>
              <th scope="col">Nº do passaporte</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente, i) => (
              <tr key={i}>
                <th>{cliente.id}</th>
                <td>{cliente.nome}</td>
                <td>{cliente.telefone}</td>
                <td>{moment(cliente.dataNasc).format('DD/MM/yyyy')}</td>
                <td>{cliente.numPassaporte}</td>
                <td>
                  <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#clienteModal" onClick={() => setCliente(cliente)}>Editar</button>
                  <button className="btn btn-danger" onClick={() => deletarCliente(cliente.id)}>Excluir</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>


    </>
  )
}

export default Clientes