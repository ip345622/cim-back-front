// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Eliminar = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (productoId) => {
    try {
      if (!productoId) {
        console.log('ID del producto no válido');
        console.log(productoId)
        return;
      }
      await axios.delete(`http://localhost:3000/api/products/${productoId}`);
      fetchProductos();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <h1 className='text-center font-bold text-5xl mb-16'>Dashboard</h1>
      <div className='ml-[12%]'>
      <h2 className=' text-3xl font-semibold mb-6'>Eliminar producto</h2>
      <table className="w-[90%] text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Nombre imagen</th>
            <th>En existencia</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.title}</td>
              <td>{producto.description}</td>
              <td><img src={producto.images}  className='w-[90px] h-[90px]'/></td>
              <td>{producto.stock}</td>
              <td>{producto.price}</td>
              
              <td>
                <button onClick={() => handleDelete(producto.id )} className='bg-orange-500 rounded-xl pl-3 pr-3'>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Eliminar;
