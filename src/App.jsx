import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { AccordionPage } from './Pages/AccordionPage'
import { CalendarioPage } from './Pages/CalendarioPage'
import { GráficoPage } from './Pages/GráficoPage'
import { ImprimirPage } from './Pages/ImprimirPage'
import { LoaderPage } from './Pages/LoaderPage'
import { ModalPage } from './Pages/ModalPage'
import { PaginacionPage } from './Pages/PaginacionPage'
import { ToastPage } from './Pages/ToastPage'
import { TransitionNumberPage } from './Pages/TransitionNumberPage'
import { DropdownPage } from './Pages/DropdownPage'
import ColorSchemeToggle from './Components/Botones/ColorSchemeToggle'
import { useState } from 'react'
import { Compartir } from './Components/Icons/Compartir'
import { compartir } from './helpers/compartir'
import { Navbar } from './Components/Navbar/Navbar'
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleColorScheme = () => {
    setIsDarkMode(!isDarkMode)
    if (isDarkMode) {
      document.querySelector('.app').classList.add('light')
      document.querySelector('.app').classList.remove('dark')
    } else {
      document.querySelector('.app').classList.remove('light')
      document.querySelector('.app').classList.add('dark')
    }
  }
  return (
    <div className={`app dark`}>
      <BrowserRouter>
        <Navbar />
        <ColorSchemeToggle isDarkMode={isDarkMode} toggleColorScheme={toggleColorScheme} />

        <Routes>
          <Route
            path='/'
            element={
              <button
                onClick={() => compartir('Hecha un vistazo a esto')}
                type='button'
                title='Compartir'>
                <Compartir />
                Compartir
              </button>
            }
          />
          <Route path='/Accordion' element={<AccordionPage />} />
          <Route path='/Calendario' element={<CalendarioPage />} />
          <Route path='/Dropdown' element={<DropdownPage />} />
          <Route path='/Gráfico' element={<GráficoPage />} />
          <Route path='/Imprimir' element={<ImprimirPage />} />
          <Route path='/Gráfico' element={<GráficoPage />} />
          <Route path='/Loader' element={<LoaderPage />} />
          <Route path='/Modal' element={<ModalPage />} />
          <Route path='/Paginacion' element={<PaginacionPage />} />
          <Route path='/Toast' element={<ToastPage />} />
          <Route path='/TransitionNumber' element={<TransitionNumberPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
