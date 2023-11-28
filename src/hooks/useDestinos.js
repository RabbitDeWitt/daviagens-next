import { listaDestinos } from "@/constants/data"
import { useState } from "react"

const useDestinos = () => {
  const destinosOrdenados = listaDestinos.sort((a, b) => a.nome < b.nome ? -1 : 1)

  const [destinos, setDestinos] = useState(destinosOrdenados)

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
    filtrarNacionais,
    filtrarInternacionais,
    mostrarTodos
  }
}

export default useDestinos