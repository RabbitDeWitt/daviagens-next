//import { useRouter } from "next/router"
import { useState } from "react"
import axios from 'axios'
import { useAppContext } from "@/context/appContext"

const useCliente = () => {
  const URL = 'http://localhost:8080/clientes'
  //const router = useRouter()
  //const [clientes, setClientes] = useState([])
  const { cliente, setClientes, setValido } = useAppContext()

  /*  const [cliente, setCliente] = useState({ id: 0, nome: '', dataNasc: '', telefone: '', numPassaporte: '' })
 
   const handleInputChange = e => {
     setCliente({ ...cliente, [e.target.name]: e.target.value })
   } */

  const validarCliente = () => {
    const { nome, telefone, dataNasc, numPassaporte } = cliente
    if (nome != '' && telefone != '' && dataNasc != '' && numPassaporte != '') {
      setValido(true)
    } else {
      setValido(false)
    }
  }


  const listarCliente = async () => {
    axios.get(URL)
      .then(res => setClientes(res.data))
      .catch(err => console.log(err))
  }

  const criarCliente = async () => {
    axios.post(URL, cliente)
      .then(() => console.log("Cadastro realizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarCliente())
  }

  /* const buscarCliente = async (id) => {
    axios.get(`${URL}/${id}`)
      .then(res => setCliente(res.data))
      .catch(err => console.log(err))
  } */

  const atualizarCliente = async (id) => {
    axios.put(`${URL}/${id}`, cliente)
      .then(() => console.log("Cadastro atualizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarCliente())
  }

  const deletarCliente = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => console.log('Exclusão feita com sucesso!!!'))
      .finally(() => listarCliente())
  }

  return {
    // cliente,
    // clientes,
    // handleInputChange,
    // setCliente,
    criarCliente,
    // buscarCliente,
    listarCliente,
    atualizarCliente,
    deletarCliente,
    validarCliente
  }
}

export default useCliente