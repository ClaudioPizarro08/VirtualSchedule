import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../pages/Home.jsx'
import { Registrarse } from '../pages/Registrarse.jsx'
import { IniciarSesión } from '../pages/IniciarSesión.jsx'
import { Layout } from '../components/Layout/Layout.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: 'Registrarse',
        Component: Registrarse
      },
      {
        path: 'IniciarSesión',
        Component: IniciarSesión
      }
    ]
  }

])
