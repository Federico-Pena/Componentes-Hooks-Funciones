/*
  Componente: Toast

  Este componente muestra un mensaje de notificación tipo "toast" que desaparece automáticamente
  después de un tiempo. Utiliza dos efectos para controlar la visibilidad del toast y el tiempo
  transcurrido desde su aparición. También proporciona una barra de progreso que indica el tiempo
  restante antes de que el toast desaparezca por completo.

  Props:
    - mensaje: El mensaje que se mostrará en el toast.
    - setMensaje: Una función para limpiar el mensaje y ocultar el toast.

  Uso en Componentes:
    <Toast mensaje="¡Hola, mundo!" setMensaje={() => limpiarMensaje()} />

  Ejemplo de uso en un componente padre:
    const MiComponentePadre = () => {
      const [mensaje, setMensaje] = useState('');

      const mostrarMensaje = () => {
        setMensaje('¡Hola, mundo!');
      };

      const limpiarMensaje = () => {
        setMensaje('');
      };

      return (
        <div>
          <button onClick={mostrarMensaje}>Mostrar Mensaje</button>
          <Toast mensaje={mensaje} setMensaje={limpiarMensaje} />
        </div>
      );
    };

  Nota: Asegúrate de manejar correctamente las funciones `setMensaje` y de gestionar
  el estado del mensaje en el componente padre.
*/
import { useEffect, useState } from 'react'
import './Toast.css' // Asegúrate de importar el archivo de estilos correspondiente

export const Toast = ({ mensaje, setMensaje }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [secondsVisible, setSecondsVisible] = useState(0)

  useEffect(() => {
    if (mensaje) {
      setIsVisible(true)
      setSecondsVisible(0)
    }
  }, [mensaje])

  useEffect(() => {
    const intervalId =
      (isVisible || secondsVisible) &&
      setInterval(() => {
        setSecondsVisible((prevSeconds) => prevSeconds + 0.05)
      }, 50)

    if (secondsVisible >= 3) {
      setIsVisible(false)
    }
    if (secondsVisible > 3.5) {
      setSecondsVisible(0)
      clearInterval(intervalId)
      setMensaje()
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [secondsVisible, isVisible, setMensaje])

  const progressWidth = 100 - (secondsVisible / 2.7) * 100

  return (
    <div className={`${isVisible ? 'toast-show' : 'toast-hide'}`}>
      <div className={`my-toast `}>
        <div className='toastContent'>
          {mensaje && (
            <>
              <p className='toastText'>{mensaje}</p>
              <div className='progress-bar' style={{ width: `${progressWidth}%` }}></div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
