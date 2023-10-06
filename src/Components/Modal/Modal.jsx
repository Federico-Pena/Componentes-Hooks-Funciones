/**
 * Componente Modal
 *
 * Propiedades:
 *   - isOpen: Indica si el modal está abierto o cerrado.
 *   - onClose: Función para cerrar el modal.
 *   - children: Contenido interno del modal.
 *
 * Función handleClose:
 * Esta función se encarga de cerrar el modal y aplicar animaciones de salida.
 * Se agrega una clase de animación de salida y se escucha el evento 'animationend'
 * para ejecutar la función onClose una vez que se ha completado la animación.
 */

import './Modal.css'
const Modal = ({ onAccept, onCancel, isOpen, onClose, children }) => {
  const handleClose = () => {
    // Aplicar clases de animación de salida al cerrar el modal
    const modal = document.getElementById('modal')
    const content = document.getElementById('content')

    if (modal) {
      modal.classList.add('fade-out')
      content.classList.add('slide-out')
      /**
       * animationend es un evento que se dispara cuando una animación CSS ha terminado.
       *
       * onClose: Es la función que se ejecutará cuando se dispare el evento animationend. En este caso, es la función que cierra el modal.
       *
       * { once: true }: Es un objeto de opciones para el método addEventListener. La opción once: true indica que el oyente del evento se eliminará después de que se haya ejecutado una vez. Esto significa que después de que se haya cerrado el modal, el evento animationend ya no se escuchará.
       */
      content.addEventListener('animationend', onClose, { once: true })
      modal.addEventListener('animationend', onClose, { once: true })
    }
  }

  if (!isOpen) {
    return null
  }
  const handleAccept = () => {
    if (onAccept) {
      onAccept()
    }
    handleClose()
  }

  const handleCancel = () => {
    if (onCancel) {
      onCancel()
    }
    handleClose()
  }
  return (
    <div id='modal' className='modal'>
      <div id='content' className='modal-content'>
        <span className='close-button' onClick={handleClose}>
          &times;
        </span>
        {children}
        <button onClick={handleAccept}>Aceptar</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  )
}

export default Modal
