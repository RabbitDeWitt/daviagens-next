import axios from 'axios'
import { useAppContext } from "@/context/appContext"

const useDestinos = () => {
  const URL = 'http://localhost:8080/destinos'

  const { destino, setDestinos, setValido } = useAppContext()

  const validarDestino = () => {
    const { nome, valor, descricao, descricaoCompleta, img, desconto } = destino
    if (nome != '' && valor > 0 && descricao != '' && descricaoCompleta != '' && img != '' && desconto >= 0) {
      setValido(true)
    } else {
      setValido(false)
    }
  }

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
      .catch(() => alert('Não pode deletar esse destino: Existe uma reserva com esse destino cadastro'))
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
    listarDestinos,
    criarDestino,
    atualizarDestino,
    deletarDestino,
    filtrarNacionais,
    filtrarInternacionais,
    mostrarTodos,
    validarDestino
  }
}

export default useDestinos