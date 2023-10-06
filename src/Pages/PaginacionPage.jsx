import { useState } from 'react'
import Paginacion from '../Components/Paginacion/Paginacion'

export const PaginacionPage = () => {
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
      <h1>Página Paginacion</h1>

      <h2>Contenido de la página {currentPage}</h2>
      <Paginacion
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
