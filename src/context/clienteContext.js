import React, { createContext, useContext, useState } from 'react'

const ClienteContext = createContext()

export const ClienteProvider = ({ children }) => {
  const [cliente, setCliente] = useState({ id: 0, nome: '', dataNasc: '', telefone: '', numPassaporte: '' })
  const [clientes, setClientes] = useState([])

  const handleInputChange = e => {
    setCliente({ ...cliente, [e.target.name]: e.target.value })
  }

  return (
    <ClienteContext.Provider value={{ cliente, setCliente, clientes, setClientes, handleInputChange }}>
      {children}
    </ClienteContext.Provider>
  )
}

export const useClienteContext = () => useContext(ClienteContext)