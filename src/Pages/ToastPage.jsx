import { useState } from 'react'
import { Toast } from '../Components/Toast/Toast'

export const ToastPage = () => {
  const [mensaje, setMensaje] = useState('')

  const mostrarMensaje = () => {
    setMensaje('¡Hola, mundo!')
  }

  const limpiarMensaje = () => {
    setMensaje('')
  }

  return (
    <div>
      <h1>Página Toast</h1>
      <button onClick={mostrarMensaje}>Mostrar Mensaje</button>
      <Toast mensaje={mensaje} setMensaje={limpiarMensaje} />
    </div>
  )
}
