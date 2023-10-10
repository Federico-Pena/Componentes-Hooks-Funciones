import './Calendario.css'
import { constantes, díasSemanaConHoras } from './díasSemanaConHoras'
import { useState } from 'react'

const formatFechaParaUser = (fecha) => {
  const fechaReserva = new Date(fecha)
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short'
  }
  const fechaFormateada = fechaReserva.toLocaleDateString('es-UY', options)
  if (fechaReserva instanceof Date && fechaFormateada !== 'Invalid Date') {
    return fechaFormateada
  } else {
    return ''
  }
}
const formatFechaIso = (fecha) => {
  const timeZoneOffset = fecha.getTimezoneOffset() * 60000
  const roundedDate = new Date(Math.round((Date.now() - timeZoneOffset) / 1000) * 1000)
  const localISOTime = roundedDate.toISOString()
  return localISOTime
}
const formatHoraUser = (hora) => {
  const options = {
    hour12: false,
    timeZone: 'America/Montevideo'
  }
  return hora.toLocaleTimeString('es-UY', options).split(':', 2).join(':')
}

function Calendario() {
  const [currentDate, setCurrentDate] = useState(formatFechaIso(new Date()))
  const díasSemana = díasSemanaConHoras(currentDate)

  const semanaAnterior = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - constantes.DIAS_DE_LA_SEMANA)
    setCurrentDate(newDate)
  }
  const semanaSiguiente = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + constantes.DIAS_DE_LA_SEMANA)
    setCurrentDate(newDate)
  }
  return (
    <article className='containerCalendario'>
      <h1 className='tituloHoy'>Hoy {formatFechaParaUser(new Date())}</h1>
      <div className='containerBotones'>
        <button className='btnCalendario' onClick={semanaAnterior} type='button'>
          Anterior
        </button>
        <button className='btnCalendario' onClick={semanaSiguiente} type='button'>
          Siguiente
        </button>
      </div>
      <div className='containerFechas'>
        {díasSemana.map((dia) => {
          return (
            !(dia.dia.getDay() === 0) && (
              <div key={dia.dia} className={`dias`} data-fecha={dia.dia}>
                <h3
                  className={`dia ${
                    dia.dia.getDate() === new Date().getDate() &&
                    dia.dia.getDay() === new Date().getDay()
                      ? 'esHoy'
                      : ''
                  }`}>
                  {formatFechaParaUser(dia.dia)}
                </h3>
                <ul className='ContainerHorasCalendario'>
                  {dia.horas.map((hora) => {
                    return (
                      <li className='horas' key={hora.toISOString()} data-fecha={hora}>
                        {formatHoraUser(hora)}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          )
        })}
      </div>
      <div className='containerBotones'>
        <button className='btnCalendario' onClick={semanaAnterior} type='button'>
          Anterior
        </button>
        <button className='btnCalendario' onClick={semanaSiguiente} type='button'>
          Siguiente
        </button>
      </div>
    </article>
  )
}

export default Calendario
