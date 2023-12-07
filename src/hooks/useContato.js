// import { useRouter } from "next/router"
// import { useState } from "react"
import { useAppContext } from '@/context/appContext'
import axios from 'axios'

const useContato = () => {
  const URL = 'http://localhost:8080/contatos'
  /* const router = useRouter()
  const [contatos, setContatos] = useState([])
  const [contato, setContato] = useState({ id: 0, nome: '', email: '', mensagem: '' }) */

  const { contato, setContatos } = useAppContext()

  /*  const handleInputChange = e => {
     setContato({ ...contato, [e.target.name]: e.target.value })
   } */

  const criarContato = async () => {
    axios.post(URL, contato)
      .then(() => console.log("Cadastro realizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarContato())
  }

  const listarContato = async () => {
    axios.get(URL)
      .then(res => setContatos(res.data))
      .catch(err => console.log(err))
  }

  /*  const buscarContato = async (id) => {
     axios.get(`${URL}/${id}`)
       .then(res => setContato(res.data))
       .catch(err => console.log(err))
   } */

  const atualizarContato = async (id) => {
    axios.put(`${URL}/${id}`, contato)
      .then(() => console.log("Cadastro atualizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarContato())
  }

  const deletarContato = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => console.log('Exclusão feita com sucesso!!!'))
      .finally(() => listarContato())
  }

  return {
    // contatos,
    // contato,
    // handleInputChange,
    criarContato,
    // buscarContato,
    listarContato,
    atualizarContato,
    deletarContato
  }
}

export default useContato