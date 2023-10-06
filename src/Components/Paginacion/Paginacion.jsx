import { useState, useEffect } from 'react'
import './Paginacion.css'
/**
 * Ejemplo de uso:
 * 
 * function App() {
  const [totalPages, setTotalPages] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  // Función para manejar el cambio de página
  const handlePageChange = (page) => {
    // Lógica adicional, como cargar datos de la página seleccionada desde la API
    console.log(`Cambiando a la página ${page}`)
    setCurrentPage(page)
  }
  return (
    <div className={`app dark`}>
      Hola
      <div>
        <h1>Contenido de la página {currentPage}</h1>
      </div>
      <Paginacion
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
 */

/**
 * Componente de Paginación
 *
 * Propiedades:
 * @param {number} totalPages - El número total de páginas.
 * @param {number} currentPage - La página actual.
 * @param {function} onPageChange - Función llamada cuando se cambia de página.
 */
const Paginacion = ({ totalPages, currentPage, onPageChange }) => {
  // Estado local para el número de página actual
  const [internalCurrentPage, setInternalCurrentPage] = useState(currentPage)

  // Efecto para actualizar la página interna cuando cambia la página externa
  useEffect(() => {
    setInternalCurrentPage(currentPage)
  }, [currentPage])

  // Manejar el cambio de página
  const handlePageChange = (page) => {
    // Actualizar el estado interno
    setInternalCurrentPage(page)
    // Llamar a la función proporcionada por el usuario para informar del cambio de página
    onPageChange(page)
  }

  // Generar números de página
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={i === internalCurrentPage ? 'active' : ''}>
        {i}
      </button>
    )
  }

  return <div className='pagination'>{pages}</div>
}

export default Paginacion
