/*
  Este objeto contiene constantes relacionadas con la gestión de días y horas.

  Propiedades:
    - DIAS_DE_LA_SEMANA: Número de días en una semana.
    - HORA_DE_COMIENZO: Hora de inicio del día.
    - HORA_DE_FIN_ENTRE_SEMANA: Hora de fin del día durante los días de la semana.
    - HORA_DE_FIN_SÁBADOS: Hora de fin del día los sábados.
    - INTERVALO_MINUTOS: Intervalo en minutos entre cada hora.
    - MINUTOS_EN_UNA_HORA: Número de minutos en una hora.
*/
export const constantes = {
  DIAS_DE_LA_SEMANA: 7,
  HORA_DE_COMIENZO: 8,
  HORA_DE_FIN_ENTRE_SEMANA: 20,
  HORA_DE_FIN_SÁBADOS: 12,
  INTERVALO_MINUTOS: 30,
  MINUTOS_EN_UNA_HORA: 60
}

/*
  Esta función genera una lista de días de la semana con sus respectivas horas válidas.

  Parámetros:
    - currentDate: Fecha de referencia para calcular los días.

  Retorna:
    Una lista de objetos con la fecha del día y una lista de horas válidas para ese día.
*/
export const díasSemanaConHoras = (currentDate) => {
  const diaActual = new Date(currentDate)

  // Comprueba si la fecha es válida
  if (Number.isNaN(diaActual.getTime())) {
    return []
  }

  diaActual.setDate(diaActual.getDate() - diaActual.getDay())

  const días = [...Array(constantes.DIAS_DE_LA_SEMANA)].map((_, index) => {
    const diaHoraMal = new Date(diaActual)
    const timeZoneOffset = diaHoraMal.getTimezoneOffset() * 60000
    const dia = new Date(Math.round((diaHoraMal.getTime() + timeZoneOffset) / 1000) * 1000)
    dia.setDate(diaActual.getDate() + index + 1)

    const esSábado = 6

    const horaFinalDelDia =
      dia.getDay() === esSábado
        ? constantes.HORA_DE_FIN_SÁBADOS
        : constantes.HORA_DE_FIN_ENTRE_SEMANA

    // Genera una lista de horas válidas para el día actual
    const hours = Array.from(
      { length: horaFinalDelDia - constantes.HORA_DE_COMIENZO + 1 },
      (_, hour) => hour + constantes.HORA_DE_COMIENZO
    )

    const minutes = Array.from(
      { length: constantes.MINUTOS_EN_UNA_HORA / constantes.INTERVALO_MINUTOS },
      (_, index) => index * constantes.INTERVALO_MINUTOS
    )

    const horas = hours
      .flatMap((hour) =>
        minutes.map((minute) => {
          if (horasValidas(hour, minute, dia)) {
            const time = new Date(dia)
            time.setHours(hour, minute, 0)
            return time
          }
          return null
        })
      )
      .filter(Boolean)

    return { dia, horas }
  })

  return días
}

/*
  Función: horasValidas

  Esta función comprueba si una hora específica en un día específico es válida según ciertas condiciones.

  Parámetros:
    - hour: Hora a validar.
    - minute: Minuto a validar.
    - day: Fecha del día a validar.

  Retorna:
    Un valor booleano que indica si la hora es válida o no.
*/
const horasValidas = (hour, minute, day) => {
  // Comprueba condiciones específicas para validar la hora
  const horaValida =
    !(hour === 20 && minute === 30) &&
    !(day.getDay() === 6 && hour === 12 && minute === 30) &&
    !(day.getDay() === 0)

  return horaValida
}
