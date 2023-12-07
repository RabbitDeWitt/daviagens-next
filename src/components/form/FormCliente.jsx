import { useAppContext } from '@/context/appContext'
import { useCliente } from '@/hooks'
import React, { useEffect, useState } from 'react'

const FormCliente = () => {
  const { atualizarCliente, criarCliente, validarCliente } = useCliente()

  const { cliente, handleClienteInputChange, valido } = useAppContext()

  const { id, nome, telefone, dataNasc, numPassaporte } = cliente

  useEffect(() => {
    validarCliente()
  }, [cliente])

  return (
    <div className="modal fade dark" id="clienteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {id == 0 ? 'Cadastrar' : 'Atualizar'} cliente</h1>
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
                <input type="text" id="nome" name="nome" className="form-control" onChange={handleClienteInputChange} value={nome} required />
              </div>
              <div className="mb-3">
                <label htmlFor="data" className="form-label">Data de nascimento:</label>
                <input type="date" id="data" name="dataNasc" className="form-control" onChange={handleClienteInputChange} value={dataNasc} required />
              </div>
              <div className="mb-3">
                <label htmlFor="telefone" className="form-label">Telefone:</label>
                <input type="text" id="telefone" name="telefone" className="form-control" onChange={handleClienteInputChange} value={telefone} required />
              </div>
              <div className="mb-3">
                <label htmlFor="numPassaporte" className="form-label">Número do passaporte:</label>
                <input type="text" id="numPassaporte" name="numPassaporte" className="form-control" onChange={handleClienteInputChange} value={numPassaporte} required />
              </div>
              <div className="d-flex gap-2 justify-content-end mb-3">
                <a type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</a>
                <a
                  className={`btn btn-primary ${valido == false ? 'disabled' : ''}`}
                  data-bs-dismiss="modal"
                  onClick={() => id == 0 ? criarCliente() : atualizarCliente(id)}
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

export default FormCliente