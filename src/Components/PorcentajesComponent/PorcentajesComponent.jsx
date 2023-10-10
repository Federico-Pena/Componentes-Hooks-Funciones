import { useEffect, useState } from 'react'
import './PorcentajesComponent.css'
function calcularPorcentajes(datos) {
  const total = datos.reduce((acc, cantidad) => acc + cantidad, 0)
  const porcentajes = datos.map((cantidad) => {
    const porcent = ((cantidad / total) * 100).toFixed(1)
    return porcent
  })
  porcentajes.sort((a, b) => b - a)
  return porcentajes
}

export function PorcentajesComponent({ datos }) {
  const porcentajes = calcularPorcentajes(datos)
  const [animationStarted, setAnimationStarted] = useState(false)
  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true)
    }, 300)
    return () => clearTimeout(animationTimer)
  }, [])

  return (
    <article className='porcentajes'>
      <h3 className='tituloPorcentajes'>Título</h3>
      <ul className={`bar-chart ${animationStarted ? 'animate' : ''}`}>
        {porcentajes.map((porcentaje) => (
          <li className='li-bar-chart' key={porcentaje}>
            {porcentaje} %
            <div className='bar'>
              <div
                className='fill'
                style={{
                  width: `${animationStarted ? porcentaje : 0}%`
                }}></div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
