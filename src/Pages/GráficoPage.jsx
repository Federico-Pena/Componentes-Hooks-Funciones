import Grafico from '../Components/Grafico/Grafico'
import { PorcentajesComponent } from '../Components/PorcentajesComponent/PorcentajesComponent'

export const GráficoPage = () => {
  const chartData = [5, 10, 15, 7, 20, 12] // Ejemplo de datos para el gráfico
  return (
    <div className={`app`}>
      <h1>Página gráfico</h1>
      <PorcentajesComponent datos={chartData} />
      <Grafico data={chartData} />
    </div>
  )
}
