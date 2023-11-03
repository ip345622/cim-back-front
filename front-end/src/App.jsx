import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'

// paginas
import Inicio from './page/inicio'
import Productos from './page/productos'
import Nosotros from './page/nosotros'
import Recetas from './page/recetas'
import Ubicaciones from './page/ubicaciones'
import Login from './page/inicioSesion'
import Brownie from './page/recetas/Brownie'
import Galletas from './page/recetas/Galletas'
import Ganache from './page/recetas/Ganache'


import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import Carrito from './components/carrito'
import './App.css'
// import { Login } from './components/login'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Inicio /> },
    { path: '/productos', element: <Productos /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/recetas', element: <Recetas /> },
    { path: '/ubicaciones', element: <Ubicaciones /> },
    { path: '/inicioSesion', element: <Login /> },
    { path: '/Brownie', element: <Brownie /> },
    { path: '/Galletas', element: <Galletas /> },
    { path: '/Ganache', element: <Ganache /> }


  ])

  return routes
}

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };
  return (
    <BrowserRouter>
      <Navbar toggleCarrito={toggleCarrito} />
      {mostrarCarrito && <Carrito />}
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
