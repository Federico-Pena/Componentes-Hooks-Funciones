import { useRef } from 'react'
import Modal from '../Components/Modal/Modal'
import useModal from '../Hooks/Modal/useModal'

export const ModalPage = () => {
  const { isOpen, closeModal, openModal } = useModal()
  const h1Ref = useRef()
  return (
    <div>
      <h1 ref={h1Ref}>Página de Modal</h1>
      {!isOpen && (
        <button onClick={openModal} title='Abrir modal' type='Button'>
          Abrir
        </button>
      )}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        onCancel={() => (h1Ref.current.textContent = 'Cancelado')}
        onAccept={() => (h1Ref.current.textContent = 'Confirmado')}>
        <h2>Contenido del modal</h2>
      </Modal>
    </div>
  )
}
