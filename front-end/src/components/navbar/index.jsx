import { NavLink } from 'react-router-dom'
import logo from '../../assets/icon/logo-cim.png'
  const Navbar = ({ toggleCarrito }) => {
    const activeStyle = 'underline underline-offset-4'
    return (
      <div className='w-full'>
        <nav className='md:grid lg:flex justify-center items-center z-10 text-xl border-b-4 font-light max-h-auto text-center gap-y-5'>
          <ul className='grid grid-cols-2 gap-y-8 md:gap-x-8 lg:grid lg:grid-cols-1 grid-col items-center justify-center lg:gap-x-44 lg:gap-y-6 font-medium lg:ml-72'>
            <li className='lg:col-span-5 flex justify-center md:col-span-2 px-48'>
              <div className=''>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  <img src={logo} alt="" />
                </NavLink>
              </div>
            </li>
            <li className='col-span-2 lg:col-auto'>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#8F2C02]'>
              <NavLink to='/'>
                Inicio
              </NavLink>
              </div>
            </li>
            <li className=''>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#8F2C02]'>
              <NavLink
                to='/nosotros'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Nosotros
              </NavLink>
              </div>
            </li>
            <li>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#8F2C02]'>
              <NavLink
                to='/productos'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Productos
              </NavLink>
              </div>
            </li>
           
            <li>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#8F2C02]'>
              <NavLink
                to='/recetas'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                  Recetas
              </NavLink>
              </div>
            </li>
            <li>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#8F2C02]'>
              <NavLink
                to='/ubicaciones'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                  Ubicaciones
              </NavLink>
              </div>
            </li>

            <li>
              
            </li>
          </ul>
          <div className='flex justify-center lg:ml-36 gap-20 md:pb-5'>
            <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              <NavLink
                  to = '/inicioSesion'
                  className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
              <a href="#" className=''><box-icon name='user' size='lg'></box-icon></a>
              </NavLink>
            </div>
            <div onClick={toggleCarrito} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
              {/* Icono de carrito */}
              <a href="#"><box-icon name='cart' size='lg'></box-icon></a>
              {/* <img src={shoppingCart} alt="" className='cursor-pointer'/> */}
            </div>
          </div>
        </nav>
      </div>
    )
  }

export default Navbar