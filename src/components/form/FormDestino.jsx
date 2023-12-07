import { useAppContext } from '@/context/appContext'
import { useDestinos } from '@/hooks'
import React, { useEffect } from 'react'

const FormDestino = () => {
  const { atualizarDestino, criarDestino, validarDestino } = useDestinos()

  const { destino, handleDestinoInputChange, valido } = useAppContext()

  const { id, nome, valor, descricao, descricaoCompleta, img, desconto, tipo } = destino

  useEffect(() => {
    validarDestino()
  }, [destino])

  return (
    <div className="modal fade dark" id="destinoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {id == 0 ? 'Cadastrar' : 'Atualizar'} destino</h1>
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
              <select name="tipo" id="tipo" value={tipo} onChange={handleDestinoInputChange}>
                <option value="NACIONAL">Nacional</option>
                <option value="INTERNACIONAL">Internacional</option>
              </select>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input type="text" id="nome" name="nome" className="form-control" onChange={handleDestinoInputChange} value={nome} required />
              </div>
              <div className="mb-3">
                <label htmlFor="valor" className="form-label">Valor:</label>
                <input type="number" id="valor" name="valor" className="form-control" onChange={handleDestinoInputChange} value={valor} required />
              </div>
              <div className="mb-3">
                <label htmlFor="desconto" className="form-label">Desconto:</label>
                <input type="number" id="desconto" name="desconto" className="form-control" onChange={handleDestinoInputChange} value={desconto} required />
              </div>
              <div className="mb-3">
                <label htmlFor="descricao" className="form-label">Descrição:</label>
                <textarea type="text" id="descricao" name="descricao" className="form-control" onChange={handleDestinoInputChange} value={descricao} required />
              </div>
              <div className="mb-3">
                <label htmlFor="descricaoCompleta" className="form-label">Descrição completa:</label>
                <textarea type="text" id="descricaoCompleta" name="descricaoCompleta" className="form-control" onChange={handleDestinoInputChange} value={descricaoCompleta} required />
              </div>
              <div className="mb-3">
                <label htmlFor="img" className="form-label">URL da imagem:</label>
                <input type="text" id="img" name="img" className="form-control" onChange={handleDestinoInputChange} value={img} required />
              </div>
              <div className="d-flex gap-2 justify-content-end mb-3">
                <a type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</a>
                <a
                  className={`btn btn-primary ${valido == false ? 'disabled' : ''}`}
                  data-bs-dismiss="modal"
                  onClick={() => id == 0 ? criarDestino() : atualizarDestino(id)}>
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

export default FormDestino