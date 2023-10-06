import './Grafico.css'
import { useEffect, useRef } from 'react'
/**
 * Ejemplo de uso:
 * function App() {
  const chartData = [5, 10, 15, 7, 20, 12] // Ejemplo de datos para el gráfico
  return (
    <div className={`app`}>
      Hola
      <Grafico data={chartData} />
    </div>
  )
}
 */
/**
 * Componente de Gráfico
 *
 * Propiedades:
 * @param {number[]} data - Un arreglo de valores que determinan la altura de las barras en el gráfico.
 */
const Grafico = ({ data }) => {
  // Referencia al elemento canvas
  const canvasRef = useRef(null)

  useEffect(() => {
    // Obtener el contexto 2D del canvas
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Configuración de estilos
    ctx.fillStyle = '#3498db' // Color de las barras
    ctx.font = '12px Arial' // Fuente para los números dentro de las barras

    // Espacio entre las barras
    const barSpacing = 10

    // Ancho de cada barra
    const barWidth = (canvas.width - barSpacing * (data.length - 1)) / data.length

    // Animación de crecimiento de las barras
    const animateBars = () => {
      let frame = 0

      const drawFrame = () => {
        // Limpiar el canvas en cada cuadro de animación
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Dibujar las barras con alturas animadas
        data.forEach((value, index) => {
          const barHeight = frame * 2 < value * 10 ? frame * 2 : value * 10
          const x = index * (barWidth + barSpacing)
          const y = canvas.height - barHeight

          ctx.fillRect(x, y, barWidth, barHeight)

          // Mostrar el número dentro de la barra
          ctx.fillStyle = '#fff'
          ctx.fillText(value + ' %', x + barWidth / 2 - 10, y + barHeight - 5)
          ctx.fillStyle = '#3498db'
        })

        frame += 1

        // Detener la animación después de alcanzar la altura máxima de las barras
        if (frame * 2 < Math.max(...data) * 10) {
          requestAnimationFrame(drawFrame)
        }
      }

      // Iniciar la animación
      drawFrame()
    }

    animateBars()
  }, [data])

  return (
    <div className='divGrafico'>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

export default Grafico
