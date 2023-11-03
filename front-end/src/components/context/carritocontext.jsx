import { createContext, useState } from 'react';

// Crea el contexto del carrito
const CarritoContext = createContext();

// Crea el proveedor del contexto del carrito
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agrega un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  // Elimina un producto del carrito
  const eliminarDelCarrito = (productoId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== productoId));
  };

  // Puedes agregar otras funciones relacionadas con el carrito aquí, como vaciar el carrito, actualizar cantidades, etc.

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;
