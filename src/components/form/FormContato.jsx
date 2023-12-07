import React, { useEffect } from 'react'
import { useAppContext } from '@/context/appContext'
import { useContato } from '@/hooks'

const FormContato = () => {
  const { atualizarContato, criarContato, validarContato } = useContato()

  const { contato, handleContatoInputChange, valido } = useAppContext()

  const { id, nome, email, mensagem } = contato

  useEffect(() => {
    validarContato()
  }, [contato])
  return (
    <div className="modal fade dark" id="contatoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {id == 0 ? 'Cadastrar' : 'Atualizar'} contato</h1>
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
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input type="text" id="nome" name="nome" className="form-control" onChange={handleContatoInputChange} value={nome} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" className="form-control" onChange={handleContatoInputChange} value={email} required />
              </div>
              <div className="mb-3">
                <label htmlFor="mensagem" className="form-label">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" className="form-control" onChange={handleContatoInputChange} value={mensagem} required />
              </div>
              <div className="d-flex gap-2 justify-content-end mb-3">
                <a type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</a>
                <a
                  className={`btn btn-primary ${valido == false ? 'disabled' : ''}`}
                  data-bs-dismiss="modal"
                  onClick={() => id == 0 ? criarContato() : atualizarContato(id)}>
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

export default FormContato