import { Loader } from '../Components/Loader/Loader'
import '../App.css'
import Spinner from '../Components/Spinner/Spinner'
export const LoaderPage = () => {
  return (
    <div className='app'>
      <h1>Pagina Loaders</h1>
      <Spinner />
      <Loader />
    </div>
  )
}
