import './Loader.css'
export const Loader = ({ className }) => {
  return <span className={`Loader ${className ? className : ''}`}></span>
}
