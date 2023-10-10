import { useState } from 'react'
import './Dropdown.css'
/**
 * 
 *  Ejemplo de uso :
 * function App() {
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
  <div className={`app`}>
    Hola
    <Dropdown
      options={fruitOptions}
      selectedOption={selectedFruit}
      onSelect={handleFruitSelect}
    />
  </div>
)
}} 
 */
/**
 * Dropdown Component
 * @param {Array} options - Opciones para mostrar en la lista desplegable.
 * @param {string} selectedOption - Opción seleccionada actualmente.
 * @param {function} onSelect - Función llamada cuando se selecciona una opción.
 */

const Dropdown = ({ options, selectedOption, onSelect }) => {
  // Estado para gestionar si la lista desplegable está abierta o cerrada
  const [isOpen, setIsOpen] = useState(false)
  const [isSelected, setIsSelected] = useState('')

  /**
   * Manejar la selección de una opción.
   * @param {string} option - Opción seleccionada.
   */
  const handleSelect = (option) => {
    onSelect(option)
    setIsSelected(option)
    setIsOpen(false) // Cerrar la lista desplegable después de seleccionar una opción
  }

  return (
    <div className='dropdown'>
      <div className='dropdown-toggle' onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : 'Desplegar'}
      </div>
      {isOpen && (
        <ul className='dropdown-options'>
          {selectedOption && (
            <li className='dropdown-options-li' onClick={() => handleSelect('')}>
              Borrar
            </li>
          )}
          {options.map((option) => (
            <li className='dropdown-options-li' key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      {isSelected && <p>Fruta: {isSelected}</p>}
    </div>
  )
}

export default Dropdown
