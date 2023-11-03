import React, { useState } from 'react';
import axios from 'axios';
import { ListaProductos } from '../../components/mostrarProductos';

export const Dashboard = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: 1,
    stock: 1
  });

  const [image, setImage] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Primero subir la imagen
      const formData = new FormData();
      formData.append('file', image);
      const imageResponse = await axios.post('http://localhost:3000/api/files/product', formData);
      
      // Luego subir el producto sin la imagen
      const productResponse = await axios.post('http://localhost:3000/api/products', form);

      // Finalmente, actualizar y agregar la imagen del producto
     const url = `http://localhost:3000/api/products/${productResponse.data.id}?images`;
     const data = {
      images: [imageResponse.data.secureUrl],
     };
     console.log(imageResponse.data.secureUrl);
     const response = await axios.put(url, data);
     console.log(response.data);

     alert('El producto fue creado correctamente');
     console.log(productResponse.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='bg-slate-300 w-[30%] pt-3 pb-7 px-3 mt-20 rounded-lg m-auto'>
        <h1 className='font-serif text-center text-7xl'> Crear Producto</h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            encType="multipart/form-data"
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Título"
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descripción"
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Precio"
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="block w-full p-2 border border-gray-300 rounded-md"
          />
          <button type="submit" className="block w-full py-2 text-center bg-blue-500 text-white rounded-md">
            Enviar
          </button>
        </form>
      </div>
      <ListaProductos />
    </>
  );
};
