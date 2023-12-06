import React from 'react'
import Image from 'next/image'

const DestinationCard = ({ destino }) => {
  const { img, nome, descricaoCompleta } = destino
  return (
    <div className="card" style={{ width: 286 }}>
      <Image
        src={img}
        width={286}
        height={161}
        className="card-img-top"
        alt={`Imagem de ${nome}`}
      />
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text">{descricaoCompleta}</p>
      </div>
    </div>
  )
}

export default DestinationCard