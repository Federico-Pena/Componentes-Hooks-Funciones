import { Luna } from '../Icons/Luna'
import { Sol } from '../Icons/Sol'

const ColorSchemeToggle = ({ isDarkMode, toggleColorScheme }) => {
  return (
    <div className='btnColorTema'>
      <button type='button' title='Cambiar tema' onClick={toggleColorScheme}>
        {isDarkMode ? <Sol /> : <Luna />}
      </button>
    </div>
  )
}
export default ColorSchemeToggle
