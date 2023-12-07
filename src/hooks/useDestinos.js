// import { useRouter } from "next/router"
import { useState } from "react"
import axios from 'axios'
import { useAppContext } from "@/context/appContext"
//import { listaDestinos } from "@/constants/data"

const useDestinos = () => {
  const URL = 'http://localhost:8080/destinos'
  // const router = useRouter()
  // const [destinos, setDestinos] = useState([])

  const { destino, setDestinos } = useAppContext()


  const listarDestinos = async () => {
    axios.get(URL)
      .then(res => setDestinos(res.data))
      .catch(err => console.log(err))
  }

  const criarDestino = async () => {
    axios.post(URL, destino)
      .then(() => console.log("Cadastro realizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarDestinos())
  }


  const deletarDestino = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => console.log('Exclusão feita com sucesso!!!'))
      .finally(() => listarDestinos())
  }

  const atualizarDestino = async (id) => {
    axios.put(`${URL}/${id}`, destino)
      .then(() => console.log("Cadastro atualizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarDestinos())
  }


  const filtrarNacionais = () => {
    setDestinos(destinosOrdenados.filter(destino => destino.tipo === "NACIONAL"))
  }

  const filtrarInternacionais = () => {
    setDestinos(destinosOrdenados.filter(destino => destino.tipo === "INTERNACIONAL"))
  }

  const mostrarTodos = () => {
    setDestinos(destinosOrdenados)
  }

  return {
    // destinos,
    listarDestinos,
    criarDestino,
    atualizarDestino,
    deletarDestino,
    filtrarNacionais,
    filtrarInternacionais,
    mostrarTodos
  }
}

export default useDestinos