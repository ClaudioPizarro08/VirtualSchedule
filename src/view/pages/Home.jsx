import { Container } from '../components/Container/Container'

export const Home = ({ user, setUser }) => {
  <Container />

  const handleLogout = () => {
    setUser([])
  }
  return (
    <div>
      <h1>Bienvenido</h1>
      <h2>{user} </h2>
      <button onClick={handleLogout}>Cerrar seisón</button>
    </div>
  )
}
