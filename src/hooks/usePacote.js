import { useRouter } from "next/router"
import { useState } from "react"
import axios from 'axios'

const usePacote = () => {
  const URL = 'http://localhost:8080/pacotes'
  const router = useRouter()
  const [pacotes, setPacotes] = useState([])
  const [novoPacote, setNovoPacote] = useState({ id: 0, nome: '', valor: 0 })

  const handleInputChange = e => {
    setNovoPacote({ ...novoPacote, [e.target.name]: e.target.value })
  }

  const criarPacote = async () => {
    axios.post(URL, novoPacote)
      .then(() => router.push('/pacotes'))
      .catch(err => console.log(err))
  }

  const listarPacote = async () => {
    axios.get(URL)
      .then(res => setPacotes(res.data))
      .catch(err => console.log(err))
  }

  const buscarPacote = async (id) => {
    axios.get(`${URL}/${id}`)
      .then(res => setNovoPacote(res.data))
      .catch(err => console.log(err))
  }

  const atualizarPacote = async (id) => {
    axios.put(`${URL}/${id}`, novoPacote)
      .then(() => router.push('/pacotes'))
      .catch(err => console.log(err))
  }

  const deletarPacote = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => console.log('Exclusão feita com sucesso!!!'))
      .finally(() => listarPacote())
  }

  return {
    pacotes,
    novoPacote,
    handleInputChange,
    criarPacote,
    buscarPacote,
    listarPacote,
    atualizarPacote,
    deletarPacote
  }
}

export default usePacote