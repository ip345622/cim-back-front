import fondo from '../../assets/img/nosotros/fond.png'
import mision from '../../assets/img/nosotros/mision.png'
import vision from '../../assets/img/nosotros/vision.png'

const Us = () => {
    return(
        <section>
            {/* portada */}
            <div className='flex max-md:py-20 text-center justify-center items-center' >
                <img src={fondo} alt="" className="bg-fixed w-full lg:h-[40vh] bg-center bg-cover relative bg-clip-border bg-no-repeat max-md:hidden" />
                <h2 className="text-white text-5xl lg:text-7xl rounded-lg pl-8 pr-8 absolute text-center max-md:text-[#8F2C02]">Nosotros</h2>
            </div>
            {/* cuerpo */}
            <section className=''>
                <p className="lg:text-justify text-center m-3 text-lg text-[#51615b]">La historia de CIM comienza así... En 1989 la Sra Rosa Lilia, tuvo la oportunidad de apoyar a un reconocido Chef de Cancún ayudándole a conseguir una marqueta de chocolate semiamargo Turin, desde ese entonces, iniciaron un vínculo comercial en el cual ella suministraba todo los insumos necesarios para la creación de sus postres. A partir de ese momento se fundó CIM, dedicándose a cubrir toda la demanda de los chefs pasteleros de la zona hotelera de Cancún.
                    Con el paso de los años hemos crecido con la ciudad y el estado, haciendo alianzas con clientes desde Tulum pasando por Playa del Carmen, Cozumel e Isla mujeres. Nos llena de alegría y orgullo ser parte del motor que mueve a grandes hoteles, restaurants, cafeterías y panaderías, así como de amas de casa o padres de familia que emprenden un nuevo negocio, donde nuestros insumos y utensilios llenan de sabor y de vida los platillos de su creación.
                    Ser parte del desarrollo de negocios nos animó a abrir nuestro primer centro de capacitación ubicado en nuestra sucursal de Plaza Nichupte en Cancún, donde puedes aprender y especializarte ya sea en repostería o panadería.
                    Te esperamos en cualquiera de nuestras sucursales para que vivas con nosotros este gran amor por la repostería y la panadería, será un placer atenderte.</p>
            </section>
            {/* galeria */}
            <section className=''>
                    <h2 className="text-center text-4xl text-[#8F2C02] font-bold m-10">BIENVENIDOS A LA FAMILIA CIM</h2>
                {/* mision */}
                <div className="md:flex mt-10 ml-10 mr-10">
                    <img src={mision} alt=""  className="w-[50%] max-md:hidden"/>
                    <div className="bg-[#DC8749] w-[50%] text-center text-[#fff] max-md:w-full max-md:py-5">
                        <h2 className="mt-10 lg:mt-28 text-6xl">MISIÓN</h2>
                        <p className="text-justify m-10 lg:text-xl">Suministramos de manera eficiente y conveniente una amplia variedad de productos para repostería, panadería y food service con excelente servicio. Ofrecemos cursos y demostraciones para compartir ideas innovadoras y novedades, manteniendo una interacción y asesoría continua con los clientes.</p>
                    </div>
                </div>
                {/* vision */}
                <div className="flex ml-10 mr-10">
                    <div className="bg-[#fff] w-[50%] text-center mt-10 lg:mt-28 max-md:w-full">
                        <h2 className="text-6xl text-[#BDA16A]" id="mision">VISIÓN</h2>
                        <p className="text-justify m-10 lg:text-xl">Suministramos de manera eficiente y conveniente una amplia variedad de productos para repostería, panadería y food service con excelente servicio. Ofrecemos cursos y demostraciones para compartir ideas innovadoras y novedades, manteniendo una interacción y asesoría continua con los clientes.</p>
                    </div>
                    <img src={vision} alt=""  className="w-[50%] max-md:hidden"/>
                </div>
            </section>
            {/* valores */}
            <section className="mb-10">
                <h2 className="text-center text-4xl text-[#8F2C02] font-bold m-10">NUESTROS VALORES</h2>
                {/* flex valores */}
                <div className="grid lg:grid-cols-3 text-center items-center gap-10 px-10">
                    
                    <div className="">
                        <h3 className="text-3xl text-[#8F2C02]">PERSISTENCIA</h3>
                        <p>Soy constante, me mantengo firme para conseguir mis metas y alcanzar el éxito.</p>
                    </div>
                    <div>
                        <div className="">
                            <h3 className="text-3xl text-[#8F2C02]">AMABILIDAD</h3>
                            <p>Soy cortés y agradable con mis compañeros, clientes y proveedores. Está virtud me facilita las relaciones con las personas que me rodean.</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h3 className="text-3xl text-[#8F2C02]">SERVICIO</h3>
                            <p>Soy servicial y colaborativo con mis clientes y compañeros</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h3 className="text-3xl text-[#8F2C02]">INNOVACIÓN</h3>
                            <p>Busco constantemente mejores maneras de hacer las cosas para crear valor y beneficios.</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h3 className="text-3xl text-[#8F2C02]">ALEGRÍA</h3>
                            <p>Vivo mi vida alegremente, todo es mejor con una sonrisa.</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h3 className="text-3xl text-[#8F2C02]">GRATITUD</h3>
                            <p>Siempre soy agradecido con las personas que me ayudan.</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h3 className="text-3xl text-[#8F2C02]">RESPONSABILIDAD</h3>
                            <p>Soy capaz de desempeñar las tareas con dedicación, cumpliendo con los plazos y alcanzando el mejor resultado posible.</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h3 className="text-3xl text-[#8F2C02]">HONESTIDAD</h3>
                            <p>Soy sincero, razonable y justo con todas las personas que me rodean.</p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <h3 className="text-3xl text-[#8F2C02]">RESPETO</h3>
                            <p>Reconozco que las personas son valiosas al igual que yo, lo demuestro tratando a todos por igual con amabilidad, simpatía y generosidad.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Us;