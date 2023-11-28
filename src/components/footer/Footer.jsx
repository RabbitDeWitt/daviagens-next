import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="container d-flex align-items-center justify-content-center h-100 text-center ">
        <p>&copy; 2023 - Criado por <br />
          <Link className="link-footer" href="https://github.com/RabbitDeWitt" target="_blank">David Coelho</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer