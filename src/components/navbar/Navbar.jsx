import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/constants/data';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()

  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 0 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className='fixed-top'>
      <nav className={`navbar navbar-dark navbar-expand-lg ${!top ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <Link className="navbar-brand" id="logo-mobile" href="/">
            <Image src="/plane.png" alt="Daviagens logo" width={30} height={30} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div className="container">
              <div className="offcanvas-header">
                <Link className="navbar-brand" id="logo-mobile" href="/">
                  <Image src="/plane.png" alt="Daviagens logo" width={30} height={30} />
                </Link>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <ul className="navbar-nav text-uppercase mx-auto mb-2 mb-lg-0">
                {navLinks.map(({ label, link }, i) => (
                  <Link
                    key={i}
                    href={link}
                    className={`nav-link ${link === router.pathname ? 'active' : ''}`}
                  >
                    {label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar