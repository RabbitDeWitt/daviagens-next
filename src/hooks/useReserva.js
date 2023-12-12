import { useState } from "react"
import axios from 'axios'
import { useAppContext } from "@/context/appContext"

const useReserva = () => {
  const URL = 'http://localhost:8080/reservas'

  const { reserva, setReservas, setValido } = useAppContext()

  const validarReserva = () => {
    const { dataPartida, dataRetorno } = reserva
    if (dataPartida != '' && dataRetorno != '') {
      setValido(true)
    } else {
      setValido(false)
    }
  }

  const listarReserva = async () => {
    axios.get(URL)
      .then(res => setReservas(res.data))
      .catch(err => console.log(err))
  }

  const criarReserva = async () => {
    axios.post(URL, reserva)
      .then(() => console.log("Cadastro realizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarReserva())
  }

  const atualizarReserva = async (id) => {
    axios.put(`${URL}/${id}`, reserva)
      .then(() => console.log("Cadastro atualizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarReserva())
  }

  const deletarReserva = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => console.log('Exclusão feita com sucesso!!!'))
      .finally(() => listarReserva())
  }

  return {
    criarReserva,
    listarReserva,
    atualizarReserva,
    deletarReserva,
    validarReserva
  }
}

export default useReserva