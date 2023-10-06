/*
  Custom Hook: useFetchData

  Este hook encapsula la lógica para realizar peticiones HTTP mediante la función `fetch`.
  Devuelve un objeto con dos propiedades, `data` y `error`, que contienen los resultados
  de la llamada a la API.

  Parámetros:
    - url: La URL de la API a la que se realizará la solicitud.
    - options: Opciones de configuración para la solicitud fetch, como método, cabeceras, etc.

  Uso en Componentes:
    const { data, error } = useFetchData(url, options);

  Resultados:
    - `data`: Los datos devueltos por la API si la solicitud fue exitosa.
    - `error`: Un objeto que contiene la información del error si la solicitud falló.
    
  Ejemplo de uso en un componente:
    const MiComponente = () => {
      const url = 'https://api.ejemplo.com/data';
      const options = {};  // Puedes personalizar las opciones según tus necesidades
      const { data, error } = useFetchData(url, options);

      if (error) {
        return <div>Error: {error.error.message}</div>;
      }

      if (!data) {
        return <div>Cargando...</div>;
      }

      // Renderiza tu componente con los datos obtenidos
      return (
        <div>
           Utiliza los datos según tus necesidades 
          <p>{data.nombre}</p>
          <p>{data.descripcion}</p>
        </div>
      );
    };
*/
import { useState, useEffect } from 'react'

const useFetchData = (url, options) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!url) {
          throw new Error('URL no definida')
        }

        const response = await fetch(url, options)
        const result = await response.json()

        if (response.ok) {
          setData(result)
        } else {
          setError(result)
        }
      } catch (error) {
        setError({ error })
      }
    }

    fetchData()
  }, [url, options])

  return { data, error }
}

export default useFetchData
