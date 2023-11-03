import { Formulario } from './components/Formulario'
import { Home } from './pages/Home'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { useState } from 'react'

function App () {
  <RouterProvider router={router} />

  const [user, setUser] = useState([])

  return (
    <div className='App'>
      {
        !user.length > 0
          ? <Formulario setUser={setUser} />
          : <Home user={user} setUser={setUser} />
      }
    </div>
  )
}
export default App
