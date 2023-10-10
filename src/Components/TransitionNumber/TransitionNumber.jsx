import { useEffect, useState, useRef } from 'react'
/*
  El componente TransitionNumber realiza una transición suave de un número inicial a un número final
  a lo largo de un período de tiempo especificado. Utiliza React y sus hooks, como useEffect y useState,
  para gestionar la lógica de la animación.
  Props:
  - from: Número inicial de la transición (por defecto, 0).
  - to: Número final al que se transicionará.
  - duration: Duración de la transición en milisegundos (por defecto, 1000 ms).
  Funcionamiento:
  - Utiliza el hook useState para gestionar el valor actual durante la transición.
  - Utiliza el hook useRef para almacenar la referencia al valor "to" previo, asegurándose de
    detectar cambios en la prop "to" incluso si el componente se vuelve a renderizar.
  - Emplea el hook useEffect para iniciar la animación cuando la prop "to" cambia.
  - Durante la animación, actualiza gradualmente el valor actual en función del progreso
    de la transición utilizando requestAnimationFrame.
  - Cancela la animación cuando se alcanza el final o cuando la prop "to" cambia nuevamente.
  Notas:
  - La transición utiliza un enfoque de interpolación lineal simple para calcular los valores
    intermedios entre el número inicial y final.
  - El componente renderiza un elemento <span> que muestra el valor actual durante la transición.
*/

export const TransitionNumber = ({ from = 0, to, duration = 1000 }) => {
  const [currentValue, setCurrentValue] = useState(from)
  const previousToRef = useRef(to)

  useEffect(() => {
    let inicio
    let ultimoFrame
    const previousTo = previousToRef.current

    const animate = (timestamp) => {
      if (!inicio) inicio = timestamp
      const progreso = timestamp - inicio
      const porcentaje = duration > 0 ? Math.min(1, progreso / duration) : 1
      const nuevoValor = Math.floor(previousTo + (to - previousTo) * porcentaje)
      setCurrentValue(isNaN(nuevoValor) ? 0 : nuevoValor)
      if (porcentaje < 1) {
        ultimoFrame = requestAnimationFrame(animate)
      }
    }

    if (to !== previousTo || from !== currentValue) {
      previousToRef.current = to
      inicio = null
      ultimoFrame = requestAnimationFrame(animate)
    }

    return () => cancelAnimationFrame(ultimoFrame)
  }, [from, to, duration, currentValue])

  return <span>{currentValue}</span>
}
