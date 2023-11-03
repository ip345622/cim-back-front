
import { useRoutes } from 'react-router-dom'
import {  BrowserRouter } from 'react-router-dom'
import './App.css'
import { Dashboard} from './pages/dashboart'
import Navbar from './components/navbar'
import Eliminar from './pages/eliminar'
import Editar from './pages/editar'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Dashboard />},
    {path:'/eliminar', element: <Eliminar />},
    {path: '/editar', element: <Editar />}
  ])
  return routes;
}

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <AppRoutes />
    </BrowserRouter>
  )
}

export default App
