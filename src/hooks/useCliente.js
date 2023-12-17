import axios from 'axios'
import { useAppContext } from "@/context/appContext"

const useCliente = () => {
  const URL = 'http://localhost:8080/clientes'

  const { cliente, setClientes, setValido } = useAppContext()

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

  const atualizarCliente = async (id) => {
    axios.put(`${URL}/${id}`, cliente)
      .then(() => console.log("Cadastro atualizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarCliente())
  }

  const deletarCliente = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => console.log('Exclusão feita com sucesso!!!'))
      .catch(() => alert('Não pode deletar esse cliente: Existe uma reserva com esse cliente cadastro'))
      .finally(() => listarCliente())
  }

  return {
    criarCliente,
    listarCliente,
    atualizarCliente,
    deletarCliente,
    validarCliente
  }
}

export default useCliente