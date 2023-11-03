import { useEffect, useState } from 'react';
import Example from '../detallesproductos'
import axios from 'axios';

export const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProductos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  const cerrarDetalle = () => {
    setSelectedProduct(null);
  };

  // const handleClickAgregarAlCarrito = (producto) => {
  //   agregarAlCarrito(producto);
  // };


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productos.map((producto) => (
            <a key={producto.idProducto} href={producto.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={producto.images}
                  alt={producto.imageAlt} onClick={() => handleClick(producto)}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{producto.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{producto.price}</p>
              <button className='w-full object-cover object-center group-hover:opacity-75 bg-gray-700' >añadir</button>
            </a>
          ))}
        </div>
        {selectedProduct && (
          <Example product={selectedProduct} onClose={cerrarDetalle} />
          )}
      </div>
    </div> 
  );
};
