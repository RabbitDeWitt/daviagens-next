import { usePacote } from '@/hooks'
import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = createContext()

export const AppProvider = ({ children }) => {



  const [valido, setValido] = useState(false)

  const [cliente, setCliente] = useState({ id: 0, nome: '', dataNasc: '', telefone: '', numPassaporte: '' })
  const [clientes, setClientes] = useState([])

  const [contato, setContato] = useState({ id: 0, nome: '', email: '', mensagem: '' })
  const [contatos, setContatos] = useState([])

  const [pacotes, setPacotes] = useState([])
  const [pacote, setPacote] = useState({ id: 0, nome: '', valor: 0 })

  const [destinos, setDestinos] = useState([])
  const [destino, setDestino] = useState({ id: 0, nome: '', valor: 0, descricao: '', descricaoCompleta: '', desconto: 0, img: '', tipo: '' })


  const [reservas, setReservas] = useState([])
  const [reserva, setReserva] = useState({ id: 0, cliente: { ...clientes[0] }, destino: { ...destinos[0] }, pacote: { ...pacotes[0] }, dataPartida: '', dataRetorno: '', valor: 0 })


  const [total, setTotal] = useState(destino.valor - (destino.valor * (destino.desconto / 100)) + pacote.valor)

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

  const handleReservaInputChange = e => {
    setReserva({ ...reserva, [e.target.name]: e.target.value })
  }

  const handleReservaClienteInputChange = e => {
    buscarCliente(Number.parseInt(e.target.value))
  }

  const handleReservaDestinoInputChange = e => {
    buscarDestino(Number.parseInt(e.target.value))
  }

  const handleReservaPacoteInputChange = e => {
    buscarPacote(Number.parseInt(e.target.value))
  }



  useEffect(() => {
    reserva.cliente = cliente
  }, [cliente])

  useEffect(() => {
    reserva.destino = destino.id === 0 ? { ...destinos[0] } : destino
    reserva.pacote = pacote.id === 0 ? { ...pacotes[0] } : pacote
    reserva.valor = destino.valor - (destino.valor * (destino.desconto / 100)) + pacote.valor
    setTotal(reserva.valor)
    console.log("total: " + total)
    console.log("context: " + reserva.valor)
  }, [pacote, destino])

  const buscarCliente = async (id) => {
    axios.get(`http://localhost:8080/clientes/${id}`)
      .then(res => setCliente(res.data))
      .catch(err => console.log(err))
  }

  const buscarPacote = async (id) => {
    axios.get(`http://localhost:8080/pacotes/${id}`)
      .then(res => setPacote(res.data))
      .catch(err => console.log(err))
  }

  const buscarDestino = async (id) => {
    axios.get(`http://localhost:8080/destinos/${id}`)
      .then(res => setDestino(res.data))
      .catch(err => console.log(err))
  }

  return (
    <AppContext.Provider value={{
      valido,
      setValido,
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
      buscarPacote,
      handlePacoteInputChange,
      destino,
      setDestino,
      destinos,
      setDestinos,
      handleDestinoInputChange,
      reservas,
      setReservas,
      reserva,
      setReserva,
      handleReservaInputChange,
      handleReservaClienteInputChange,
      handleReservaDestinoInputChange,
      handleReservaPacoteInputChange,
      total
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)