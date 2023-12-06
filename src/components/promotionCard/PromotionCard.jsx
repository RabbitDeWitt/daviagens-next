import React from 'react'
import Image from 'next/image'
import { Button } from '@/components'

const PromotionCard = ({ destino }) => {
  const { img, nome, valor, desconto } = destino
  const valorComDesconto = valor - (valor * (desconto / 100))
  return (
    <div className="card" style={{ width: 286 }}>
      <Image
        src={img}
        className="card-img-top"
        alt={`"Imagem de ${nome}"`}
        width={286}
        height={161}
      />
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
      </div>
      <ul className="list-group list-group-flush position-relative bg-bg-danger  ">
        <li className="list-group-item">
          <p className="my-2 mb-1 text-secondary " style={{ fontSize: 14 }}>Preço por pessoa</p>
          <p className="mb-0 text-decoration-line-through text-secondary " style={{ fontSize: 15 }}>R$ {valor.toFixed(2)}</p>
          <p className="mb-0" style={{ fontSize: 25, color: 'black' }}>R$ {valorComDesconto.toFixed(2)}</p>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: 35, color: 'white' }}>
            {desconto}% Off </span>
          <span className="visually-hidden">unread messages</span>
        </li>
      </ul>
      <div className="card-body d-flex align-items-center justify-content-between">
        <Button>Comprar</Button>
        <Button>Saiba mais</Button>
      </div>
    </div>
  )
}

export default PromotionCard