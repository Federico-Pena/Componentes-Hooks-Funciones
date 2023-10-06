import { useState } from 'react'
import Dropdown from '../Components/Dropdown/Dropdown'

export const DropdownPage = () => {
  // Ejemplo de opciones para la lista desplegable
  const fruitOptions = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango']
  // Estado para almacenar la opción seleccionada
  const [selectedFruit, setSelectedFruit] = useState('')
  // Función de devolución de llamada para manejar la selección de la fruta
  const handleFruitSelect = (fruit) => {
    setSelectedFruit(fruit)
    // Aquí podrías realizar acciones adicionales al seleccionar una fruta si es necesario
  }
  return (
    <Dropdown options={fruitOptions} selectedOption={selectedFruit} onSelect={handleFruitSelect} />
  )
}
