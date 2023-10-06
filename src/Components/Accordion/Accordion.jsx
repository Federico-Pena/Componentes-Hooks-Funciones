import { useState } from 'react'
import './Accordion.css'
/**
 * Ejemplo de uso:
 * const App = () => {
  return (
    <div>
      <h1>Componente de Ejemplo con Acordeones</h1>
      
      <Accordion title="Sección 1">
        <p>Contenido de la sección 1. Puedes poner cualquier cosa aquí.</p>
      </Accordion>
      
      <Accordion title="Sección 2">
        <ul>
          <li>Elemento 1</li>
          <li>Elemento 2</li>
          <li>Elemento 3</li>
        </ul>
      </Accordion>
      
      <Accordion title="Sección 3">
        <div>
          <p>Más contenido aquí...</p>
          <button>Un botón dentro del acordeón</button>
        </div>
      </Accordion>
    </div>
  );
};
 */
/**
 * Componente de Accordion
 *
 * Propiedades:
 * @param {string} title - Título del panel de acordeón.
 * @param {React.ReactNode} children - Contenido del panel de acordeón.
 */
const Accordion = ({ title, children }) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false)
  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen)
  }
  return (
    <div className={`accordion ${isAccordionOpen ? '' : 'closed'}`}>
      <div className={`accordion-header`} onClick={toggleAccordion}>
        <span>{title}</span>
        {isAccordionOpen ? '-' : '+'}
      </div>
      {isAccordionOpen && <div className='accordion-content'>{children}</div>}
    </div>
  )
}

export default Accordion
