import Grafico from '../Components/Grafico/Grafico'

export const GráficoPage = () => {
  const chartData = [5, 10, 15, 7, 20, 12] // Ejemplo de datos para el gráfico
  return (
    <div className={`app`}>
      <h1>Página gráfico</h1>
      <Grafico data={chartData} />
    </div>
  )
}
