import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from 'axios'
//import { listaDestinos } from "@/constants/data"

const useDestinos = () => {
  const URL = 'http://localhost:8080/destinos'
  const router = useRouter()
  const [destinos, setDestinos] = useState([])


  const listarDestinos = async () => {
    axios.get(URL)
      .then(res => setDestinos(res.data.sort((a, b) => a.nome < b.nome ? -1 : 1)))
      .catch(err => console.log(err))
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
    destinos,
    listarDestinos,
    filtrarNacionais,
    filtrarInternacionais,
    mostrarTodos
  }
}

export default useDestinos