import { useAppContext } from '@/context/appContext'
import axios from 'axios'

const usePacote = () => {
  const URL = 'http://localhost:8080/pacotes'

  const { pacote, setPacotes, setValido } = useAppContext()

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

  const atualizarPacote = async (id) => {
    axios.put(`${URL}/${id}`, pacote)
      .then(() => console.log("Cadastro atualizado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarPacote())
  }

  const deletarPacote = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => console.log('Exclusão feita com sucesso!!!'))
      .catch(() => alert('Não pode deletar esse pacote: Existe uma reserva com esse pacote cadastro'))
      .finally(() => listarPacote())
  }

  return {
    criarPacote,
    listarPacote,
    atualizarPacote,
    deletarPacote,
    validarPacote
  }
}

export default usePacote