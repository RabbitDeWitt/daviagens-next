import React, { useEffect } from 'react'
import Head from 'next/head'
import { FormCliente } from '@/components'
import { useAppContext } from '@/context/appContext'
import { useReserva } from '@/hooks'

const reservas = () => {
  return (
    <>
      <Head>
        <title>Daviagens</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="py-4">
          <h1>Lista de Reservas</h1>
          <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#clienteModal" onClick={() => setCliente({ id: 0, cliente: { id: 1 }, destino: { id: 1 }, pacote: { id: 1 }, valor: 0 })}>Cadastrar contato</button>
        </div>
      </main>
    </>
  )
}

export default reservas