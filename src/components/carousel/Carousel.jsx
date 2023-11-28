import React from 'react'

const Carousel = ({ destinos }) => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 0"></button>
      </div>
      <div className="carousel-inner">


        <div className="bloco">
          <h1 style={{ color: 'white' }}>Daviagens</h1>
          <p style={{ color: 'white' }}>
            Descubra o Mundo: <br /> Sua <span>Jornada</span>, Nossa <span>Experiência</span>!
          </p>
        </div>

        <div className="carousel-item active" data-bs-interval="5000">
          <img src="/imgs/urca.jpg" className="d-block w-100" alt="Imagem de ${nome}" />
          <div className="carousel-caption px-2 d-none d-md-block">
            <h4>Rio de Janeiro</h4>
            <p>"Rio de Janeiro, beleza que inspira."</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Carousel