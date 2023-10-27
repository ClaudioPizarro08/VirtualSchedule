import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>Virtual Schedule</h1>

      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/Registrarse'>Registrarse</Link></li>
        <li><Link to='/IniciarSesión'>Iniciar Sesión</Link></li>
      </ul>
    </header>
  )
}
