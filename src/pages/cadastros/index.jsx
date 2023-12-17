import { listas } from '@/constants/data'
import React, { useState } from 'react'
import Clientes from './clientes'
import Destinos from './destinos'
import Reservas from './reservas'
import Contatos from './contatos'
import Pacotes from './pacotes'

const index = () => {

  const [page, setPage] = useState(listas[0].name)

  return (
    <main className='container'>
      <select
        className='text-capitalize my-3 '
        onChange={e => setPage(e.target.value)}>
        {listas.map(({ name }, i) => (
          <option
            key={i}
            value={name}
            className='text-capitalize '>{name}</option>
        ))}
      </select>
      <div className='py-4'>
        {page === 'clientes' && <Clientes />}
        {page === 'destinos' && <Destinos />}
        {page === 'pacotes' && <Pacotes />}
        {page === 'contatos' && <Contatos />}
        {page === 'reservas' && <Reservas />}

      </div>

    </main>
  )
}

export default index