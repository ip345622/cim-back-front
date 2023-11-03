
import fondo from '../../assets/img/products/bgPro.png'
import { ListaProductos } from '../../components/listaProductos';
import { Slider } from '../../components/sliderProveedores'
// import {InicioSesion} from '../../components/inicioSesion/index.jsx'


export default function Products() {
// const [carrito, setCarrito] = useState([]);
// const agregarAlCarrito = (producto) => {
//     setCarrito([...carrito, producto]);
//   };


  return (
    <section>
      {/* Imagen fondo */}
      <div className='flex justify-center text-center items-center max-md:py-20'>
        <img src={fondo} alt="" className='w-full relative max-md:hidden'/>
        <h2 className="decoration-black text-7xl absolute font-semibold text-[#8F2C02] md:text-white rounded-lg">Productos</h2>
      </div>
      <section >
                <p className="text-center m-3 text-lg text-[#51615b]">Todo lo que necesitas para crear deliciosos platillos y postres. Desde harina, chocolates, rellenos, confitería, colorantes, saborizantes y mucho mas que te ayudará a llenar tu cocina de sabor.
                </p>
      </section>
      {/* proveedores */}
      <Slider />
      {/* Productos */}
      <ListaProductos />
    </section>
  );
}
