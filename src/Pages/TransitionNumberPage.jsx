import { useEffect, useState } from 'react'
import { TransitionNumber } from '../Components/TransitionNumber/TransitionNumber'

export const TransitionNumberPage = () => {
  const [hacia, setHacia] = useState(0)
  useEffect(() => {
    setHacia(100)
  }, [])
  return (
    <div>
      <h1>Página TransitionNumber</h1>
      <TransitionNumber to={hacia} from={0} duration={1500} />
    </div>
  )
}
