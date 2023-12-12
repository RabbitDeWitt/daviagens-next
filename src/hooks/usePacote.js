//import { useRouter } from "next/router"
//import { useState } from "react"
import { useAppContext } from '@/context/appContext'
import axios from 'axios'

const usePacote = () => {
  const URL = 'http://localhost:8080/pacotes'
  //const router = useRouter()
  /* const [pacotes, setPacotes] = useState([])
  const [novoPacote, setNovoPacote] = useState({ id: 0, nome: '', valor: 0 })

  const handleInputChange = e => {
    setNovoPacote({ ...novoPacote, [e.target.name]: e.target.value })
  } */

  const { pacote, setPacote, setPacotes, setValido } = useAppContext()

  const validarPacote = () => {
    const { nome, valor } = pacote
    if (nome != '' && valor >= 0) {
      setValido(true)
    } else {
      setValido(false)
    }
  }

  const criarPacote = async () => {
    axios.post(URL, pacote)
      .then(() => console.log("Cadastro realizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarPacote())
  }

  const listarPacote = async () => {
    axios.get(URL)
      .then(res => setPacotes(res.data))
      .catch(err => console.log(err))
  }

  /* const buscarPacote = async (id) => {
    axios.get(`${URL}/${id}`)
      .then(res => setPacote(res.data))
      .catch(err => console.log(err))
  } */

  const atualizarPacote = async (id) => {
    axios.put(`${URL}/${id}`, pacote)
      .then(() => console.log("Cadastro atualizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarPacote())
  }

  const deletarPacote = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => console.log('Exclusão feita com sucesso!!!'))
      .finally(() => listarPacote())
  }

  return {
    //pacotes,
    //pacote,
    //handleInputChange,
    criarPacote,
    //buscarPacote,
    listarPacote,
    atualizarPacote,
    deletarPacote,
    validarPacote
  }
}

export default usePacote