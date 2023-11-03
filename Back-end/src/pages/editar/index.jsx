import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditarProducto = () => {
  const [productos, setProductos] = useState([]);
  const [editFormData, setEditFormData] = useState({
    id: '',
    title: '',
    description: '',
    price: 1,
    stock: 1,
  });

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

  const handleEditFormChange = (event) => {
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { id, ...data } = editFormData;

      await axios.put(`http://localhost:3000/api/products/${id}`, data);
      fetchProductos();
      setEditFormData({
        id: '',
        title: '',
        description: '',
        price: 1,
        stock:1,
      });
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleEditClick = (producto) => {
    setEditFormData({
      id: producto.id,
      title: producto.title,
      description: producto.description,
      price: producto.price,
      stock: producto.stock,
    });
  };

  return (
    <div>
      <h1 className='text-center font-bold text-5xl mb-16'>Dashboard</h1>
      <table className="ml-[12%] border-4 w-[80%] text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.title}</td>
              <td>{producto.description}</td>
              <td>{producto.price}</td>
              <td>{producto.stock}</td>
              <td>
                <button onClick={() => handleEditClick(producto)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Editar Producto</h2>
      <form onSubmit={handleEditFormSubmit} className='ml-[12%] w-[80%] mb-16'>
        <input
          type="hidden"
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        />
        <label>
          Nombre:
          <input
            type="text"
            name="title" // Changed the name to match the state property
            value={editFormData.title}
            onChange={handleEditFormChange}
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="description"
            value={editFormData.description}
            onChange={handleEditFormChange}
          ></textarea>
        </label>
        <label>
          Precio:
          <input
            type="number"
            name="price"
            value={editFormData.price}
            onChange={handleEditFormChange}
          />
        </label>
        <label>
          En existencia:
          <input
            type="number"
            name="stock"
            value={editFormData.stock}
            onChange={handleEditFormChange}
          />
        </label>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarProducto;
