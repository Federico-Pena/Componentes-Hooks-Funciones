import { compartir } from '../../helpers/compartir'
import { CompartirIcono } from '../Icons/CompartirIcono'
export const Compartir = () => {
  return (
    <button onClick={() => compartir('Hecha un vistazo a esto')} type='button' title='Compartir'>
      <CompartirIcono />
      Compartir
    </button>
  )
}
