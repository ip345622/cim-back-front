// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="h-28 w-screen bg-orange-600 navbar navbar-expand-lg navbar-dark bg-dark ">
      <nav className='w-screen h-full flex justify-evenly text-2xl items-center font-semibold'>
        <NavLink to={'/'}>Crear</NavLink>
        <NavLink to={'/eliminar'}>Eliminar</NavLink>
        <NavLink to={'/editar'}>Editar</NavLink>
        
      </nav>
    </div>
  );
};

export default Navbar;
