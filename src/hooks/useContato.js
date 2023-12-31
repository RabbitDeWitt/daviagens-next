import { useAppContext } from '@/context/appContext'
import axios from 'axios'

const useContato = () => {
  const URL = 'http://localhost:8080/contatos'

  const { contato, setContatos, setValido } = useAppContext()

  const validarContato = () => {
    const { nome, email, mensagem } = contato
    if (nome != '' && email != '' && mensagem != '') {
      setValido(true)
    } else {
      setValido(false)
    }
  }

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
    criarContato,
    listarContato,
    atualizarContato,
    deletarContato,
    validarContato
  }
}

export default useContato