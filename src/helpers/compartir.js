/*
  Función: compartir

  Esta función utiliza la API Web Share para permitir a los usuarios compartir contenido.
  Comprueba si la API está disponible en el navegador antes de intentar realizar la acción
  de compartir.

  Parámetros:
    - title: Título o mensaje que se compartirá.

  Uso:
    compartir('¡Echa un vistazo a este enlace!');

  Nota: La API Web Share solo está disponible en navegadores modernos y en entornos seguros
  (HTTPS). Asegúrate de manejar posibles errores y de utilizar esta función en un entorno seguro.

*/
export const compartir = async (title) => {
  try {
    if ('share' in navigator) {
      await navigator.share({
        title,
        url: window.location.href
      })
    } else {
      console.error('La API Web Share no está disponible en este navegador.')
    }
  } catch (error) {
    console.error('Error al intentar compartir: ', error)
  }
}
