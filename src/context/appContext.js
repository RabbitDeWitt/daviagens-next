import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [cliente, setCliente] = useState({ id: 0, nome: '', dataNasc: '', telefone: '', numPassaporte: '' })
  const [clientes, setClientes] = useState([])

  const [contato, setContato] = useState({ id: 0, nome: '', email: '', mensagem: '' })
  const [contatos, setContatos] = useState([])

  const [pacotes, setPacotes] = useState([])
  const [pacote, setPacote] = useState({ id: 0, nome: '', valor: 0 })

  const [destinos, setDestinos] = useState([])
  const [destino, setDestino] = useState({ id: 0, nome: '', valor: 0, descricao: '', descricaoCompleta: '', desconto: 0, img: '', tipo: '' })

  const handleClienteInputChange = e => {
    setCliente({ ...cliente, [e.target.name]: e.target.value })
  }

  const handleContatoInputChange = e => {
    setContato({ ...contato, [e.target.name]: e.target.value })
  }

  const handlePacoteInputChange = e => {
    setPacote({ ...pacote, [e.target.name]: e.target.value })
  }

  const handleDestinoInputChange = e => {
    setDestino({ ...destino, [e.target.name]: e.target.value })
  }

  return (
    <AppContext.Provider value={{
      cliente,
      setCliente,
      clientes,
      setClientes,
      handleClienteInputChange,
      contato,
      setContato,
      contatos,
      setContatos,
      handleContatoInputChange,
      pacote,
      setPacote,
      pacotes,
      setPacotes,
      handlePacoteInputChange,
      destino,
      setDestino,
      destinos,
      setDestinos,
      handleDestinoInputChange
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)