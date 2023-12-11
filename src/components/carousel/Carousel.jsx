import React from 'react'

const Carousel = ({ carouselDestinos }) => {

  let destinos = [...carouselDestinos]

  console.log(destinos)

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {destinos.map((_, i) => (
          <button key={i} type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to={i} className={`${i === 0 ? 'active' : ''}`}
            aria-current="true" aria-label="Slide 0"></button>
        ))}
      </div>


      <div className="carousel-inner">
        <div className="bloco">
          <h1 style={{ color: 'white' }}>Daviagens</h1>
          <p style={{ color: 'white' }}>
            Descubra o Mundo: <br /> Sua <span>Jornada</span>, Nossa <span>Experiência</span>!
          </p>
        </div>

        {destinos.map(({ img, nome, descricao }, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval="5000">
            <img src={img} className="d-block w-100" alt={`Imagem de ${nome}`} />
            <div className="carousel-caption px-2 d-none d-md-block">
              <h4>{nome}</h4>
              <p>{descricao}</p>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Carousel