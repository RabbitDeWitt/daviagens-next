import { useRouter } from "next/router"
import { useState } from "react"
import axios from 'axios'

const useContato = () => {
  const URL = 'http://localhost:8080/contatos'
  const router = useRouter()
  const [contatos, setContatos] = useState([])
  const [novoContato, setNovoContato] = useState({ id: 0, nome: '', email: '', mensagem: '' })

  const handleInputChange = e => {
    setNovoContato({ ...novoCliente, [e.target.name]: e.target.value })
  }

  const criarContato = async () => {
    axios.post(URL, novoContato)
      .then(() => router.push('/contatos'))
      .catch(err => console.log(err))
  }

  const listarContato = async () => {
    axios.get(URL)
      .then(res => setContatos(res.data))
      .catch(err => console.log(err))
  }

  const buscarContato = async (id) => {
    axios.get(`${URL}/${id}`)
      .then(res => setNovoContato(res.data))
      .catch(err => console.log(err))
  }

  const atualizarContato = async (id) => {
    axios.put(`${URL}/${id}`, novoContato)
      .then(() => router.push('/contatos'))
      .catch(err => console.log(err))
  }

  const deletarContato = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => console.log('Exclusão feita com sucesso!!!'))
      .finally(() => listarContato())
  }

  return {
    contatos,
    novoContato,
    handleInputChange,
    criarContato,
    buscarContato,
    listarContato,
    atualizarContato,
    deletarContato
  }
}

export default useContato