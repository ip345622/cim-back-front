import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProductoDetalle = ({ product, onClose }) => {
  const [productos, setProductos] = useState([]);

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

  return (
    <Transition.Root show={!!product} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto" onClose={onClose}>
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="relative">
                <button
                  type="button"
                  className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
                  onClick={onClose}
                >
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </button>

                <div className="flex justify-center">
                  <img src={product.images} alt={product.title} className="w-1/2" />
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-lg text-gray-700">{product.description}</p>
                  <p className="text-lg text-gray-700">Existencia: {product.stock}</p>
                  <p className="text-lg text-gray-700">Precio: {product.price}</p>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProductoDetalle;
