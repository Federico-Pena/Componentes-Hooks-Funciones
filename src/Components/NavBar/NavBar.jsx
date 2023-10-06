import { useState } from 'react'
import './Navbar.css'
import { MenuOpen } from '../Icons/MenuOpen'
import { MenuClosed } from '../Icons/MenuClosed'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <header className='headerNav'>
      <Link to={'/'}>
        <img
          className='logoNav'
          src='https://res.cloudinary.com/fotoscloudinary/image/upload/v1691044852/Portfolio/bxltegplk3acofviztgg.webp'
          alt='Imagen pantalla con código de programación'
        />
      </Link>
      <nav className={`nav ${navbarOpen ? 'nav_open' : ''}`}>
        <ul className='ulNav'>
          <li className='ulLi'>
            <Link
              className='liA'
              preventScrollReset={true}
              to='/Accordion'
              onClick={() => setNavbarOpen(false)}>
              Accordion
            </Link>
          </li>
          <li className='ulLi'>
            <Link
              className='liA'
              preventScrollReset={true}
              to='/Calendario'
              onClick={() => setNavbarOpen(false)}>
              Calendario
            </Link>
          </li>
          <li className='ulLi'>
            <Link
              className='liA'
              preventScrollReset={true}
              to='/Dropdown'
              onClick={() => setNavbarOpen(false)}>
              Dropdown
            </Link>
          </li>
          <li className='ulLi'>
            <Link
              className='liA'
              preventScrollReset={true}
              to='/Gráfico'
              onClick={() => setNavbarOpen(false)}>
              Gráfico
            </Link>
          </li>
          <li className='ulLi'>
            <Link
              className='liA'
              preventScrollReset={true}
              to='/Imprimir'
              onClick={() => setNavbarOpen(false)}>
              Imprimir
            </Link>
          </li>
          <li className='ulLi'>
            <Link
              className='liA'
              preventScrollReset={true}
              to='/Loader'
              onClick={() => setNavbarOpen(false)}>
              Loader
            </Link>
          </li>
          <li className='ulLi'>
            <Link
              className='liA'
              preventScrollReset={true}
              to='/Modal'
              onClick={() => setNavbarOpen(false)}>
              Modal
            </Link>
          </li>
          <li className='ulLi'>
            <Link
              className='liA'
              preventScrollReset={true}
              to='/Paginacion'
              onClick={() => setNavbarOpen(false)}>
              Paginacion
            </Link>
          </li>
          <li className='ulLi'>
            <Link
              className='liA'
              preventScrollReset={true}
              to='/Toast'
              onClick={() => setNavbarOpen(false)}>
              Toast
            </Link>
          </li>
          <li className='ulLi'>
            <Link
              className='liA'
              preventScrollReset={true}
              to='/TransitionNumber'
              onClick={() => setNavbarOpen(false)}>
              TransitionNumber
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`divMenu ${navbarOpen ? 'open' : 'closed'}`}
        onClick={() => setNavbarOpen(!navbarOpen)}>
        <span className='burger'> {navbarOpen ? <MenuOpen /> : <MenuClosed />}</span>
      </div>
    </header>
  )
}
