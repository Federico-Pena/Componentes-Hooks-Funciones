import Accordion from '../Components/Accordion/Accordion'

export const AccordionPage = () => {
  return (
    <div>
      <div>
        <h1>Componente de Ejemplo con Acordeones</h1>

        <Accordion title='Sección 1'>
          <p>Contenido de la sección 1. Puedes poner cualquier cosa aquí.</p>
        </Accordion>

        <Accordion title='Sección 2'>
          <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
          </ul>
        </Accordion>

        <Accordion title='Sección 3'>
          <div>
            <p>Más contenido aquí...</p>
            <button>Un botón dentro del acordeón</button>
          </div>
        </Accordion>
      </div>
    </div>
  )
}
