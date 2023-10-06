import { useRef } from 'react'
import { Imprimir } from '../Components/Imprimir/Imprimir'

export const ImprimirPage = () => {
  const miRef = useRef()

  return (
    <div>
      <h1>Página Imprimir</h1>
      <div ref={miRef}>
        <h2>Titulo</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate tenetur iure,
          molestiae cupiditate quas quam eaque enim, accusantium magnam pariatur distinctio a dolore
          nam atque cumque deleniti possimus commodi adipisci.
        </p>
      </div>
      <Imprimir referencia={miRef} />
    </div>
  )
}
