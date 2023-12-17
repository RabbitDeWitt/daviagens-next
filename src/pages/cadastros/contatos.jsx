import React, { useEffect } from 'react'
import { useContato } from '@/hooks'
import { useAppContext } from '@/context/appContext'
import { FormContato } from '@/components'

const Contatos = () => {
  const { listarContato, deletarContato } = useContato()
  const { contatos, setContato } = useAppContext()

  useEffect(() => {
    listarContato()
  }, [])

  return (
    <>
      <h1>Lista de Contatos</h1>
      <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#contatoModal" onClick={() => setContato({ id: 0, nome: '', email: '', mensagem: '' })}>Cadastrar contato</button>

      <FormContato />

      <div className="table-responsive mt-3 ">
        <table className='table table-hover table-primary table-striped '>
          <thead className='table-dark '>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Mensagem</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {contatos.map((contato, i) => (
              <tr key={i}>
                <th>{contato.id}</th>
                <td>{contato.nome}</td>
                <td>{contato.email}</td>
                <td>{contato.mensagem}</td>
                <td>
                  <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#contatoModal" onClick={() => setContato(contato)}>Editar</button>
                  <button className="btn btn-danger" onClick={() => deletarContato(contato.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Contatos