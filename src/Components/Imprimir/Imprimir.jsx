/*
  Componente: Imprimir

  Este componente utiliza la biblioteca ReactToPrint para facilitar la funcionalidad de impresión
  de un elemento de referencia proporcionado. Se renderiza como un botón que, al hacer clic, activa
  el diálogo de impresión del navegador para imprimir el contenido del elemento de referencia.

  Props:
    - referencia: React ref del elemento que se imprimirá al hacer clic en el botón.

  Uso en Componentes:
    <Imprimir referencia={miRef} />

  Ejemplo de uso en un componente padre:
    const MiComponentePadre = () => {
      const miRef = useRef();

      return (
        <div>
          <MiContenidoParaImprimir ref={miRef} />
          <Imprimir referencia={miRef} />
        </div>
      );
    };

  Nota: Asegúrate de gestionar adecuadamente la referencia y el contenido que deseas imprimir.
*/
import ReactToPrint from 'react-to-print'
export const Imprimir = ({ referencia }) => {
  return (
    <ReactToPrint
      bodyClass='imprimirPaciente'
      trigger={() => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-printer'
          viewBox='0 0 16 16'>
          <path d='M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z' />
          <path d='M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z' />
        </svg>
      )}
      content={() => referencia.current}
    />
  )
}
