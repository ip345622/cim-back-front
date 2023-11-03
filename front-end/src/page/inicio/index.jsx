import { SliderIni } from '../../components/sliderInicio';

import chcocoCalebaut from '../../assets/img/inicio/chocolateBallebaut.png';
import logoCim from '../../assets/icon/logo-cim.png'
import cacao from '../../assets/img/inicio/cacao.png'
import cocina from '../../assets/img/inicio/cocina.png'
import decoraciones from '../../assets/img/inicio/decoraciones.png'
import brownie from '../../assets/img/inicio/browni.png'
import logoTurin from '../../assets/img/inicio/marcas/logoTurin.png'
import logoChantilly from '../../assets/img/inicio/marcas/Chantilly.png'
import logoCallebaut from '../../assets/img/inicio/marcas/Callebaut.png'
import logoWilton from '../../assets/img/inicio/marcas/wilton.png'
import logoPuratos from '../../assets/img/inicio/marcas/puratos.png'
import logoGlorya from '../../assets/img/inicio/marcas/glorya.png'
import logoMetaltex from '../../assets/img/inicio/marcas/Metaltex.png'

const Home = () => {
    return(
        <div>
            <div>

            </div>
            <div className="m-0">
                <SliderIni></SliderIni>
            </div>

            <div>
                <div className="mb-10 mt-10">
                    <div className="flex max-md:flex-col justify-center items-center">
                        <h2 className="text-5xl">Bienvenido a</h2>
                        <img src={logoCim} alt="" />
                    </div>
                    <div className="flex justify-center items-center lg:mx-30 text-center">
                        <p className="text-lg w-[70%]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                            Cupiditate repudiandae voluptates possimus vero culpa quod libero corrupti rerum! Voluptas nisi, 
                            sequi eaque ipsam aliquam suscipit. <br />
                            Minima sapiente aspernatur quisquam excepturi?
                        </p>
                    </div>
                </div>
                <div className="border border-solid border-[#EA8239] mx-96 my-20"></div>
                <div>
                    <h3 className="text-[#EA8239] text-center mb-10 text-3xl font-semibold">Lo que necesitas para tus platillos</h3>
                    <div className="grid lg:grid-flow-col items-center justify-evenly gap-y-5">

                        <div className="flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <p className="absolute text-white text-4xl">Chocolates</p>
                            <img className="w-auto" src={cacao} alt="imagenCacao" />
                        </div>
                        <div className="flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <p className="absolute text-white text-4xl">Cocina</p>
                            <img src={cocina} alt="imagenCacao" />
                        </div>
                        <div className="flex items-center justify-center md:col-span-3 lg:col-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <p className="absolute text-white text-4xl">Decoraciones</p>
                            <img  src={decoraciones} alt="imagenCacao" />
                        </div>
                    </div>
                    <div className="flex justify-center my-10">
                        <a href="/productos"><button className="bg-[#EA8239] p-3 px-24 rounded-md text-white font-medium text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Mas Productos</button></a>
                    </div>

                    <div className="border border-solid border-[#EA8239] mx-96 my-20"></div>

                    <div className="">
                        <div className="flex-col flex justify-center items-center lg:gap-16 lg:my-20">
                            <div>
                                <h3 className="text-[#EA8239] text-center mb- text-[2.5rem] font-semibold">¿Buscas recetas? Te dejamos una</h3>
                            </div>
                            <h3 className="text-center text-4xl py- font-semibold">Receta de Brownie</h3>
                            <div className='lg:flex items-center'>
                                <img className="md:ml-16 lg:ml-0 scale-75 lg:scale-100" src={brownie} alt="" />
                                <div className="">
                                    <p className="lg:text-center ml-12 lg:m-0 my-5 text-3xl w-[85%]">Deja a todos encantados con estos deliciosos Brownies  y solo necesitas:</p>
                                    <ul className="list-disc list-outside my-5 text-2xl ml-12">
                                        <li className="p-2">1/2 taza harina para hornear</li>
                                        <li className="p-2">1/8 cucharadita de sal</li>
                                        <li className="p-2">170gr chocolate semiamargo confitier Turin</li>
                                        <li className="p-2">170gr de mantequilla sin sal a temperatura ambiente</li>
                                        <li className="p-2">3 huevos a temperatura ambiente</li>
                                    </ul>
                                    <div className="flex justify-center my-10">
                                        <a href="/recetas"><button className="bg-[#EA8239] p-3 px-24 rounded-md text-white font-medium text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Saber más</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-16 justify-center items-center mb-16">
                        <div className="border border-solid border-[#EA8239] mx-96 mb-20"></div>
                        {/* Marcas */}
                            <h3 className="text-5xl font-semibold text-[#8F2C02] text-center w-[75%] lg:w-auto">Trabajamos con las mejores marcas</h3>
                            <div className="grid grid-cols-3 lg:grid-cols-7 gap-9 items-center justify-center mx-10 my-10">
                                <div>
                                    <img className="" src={logoTurin} alt="" />
                                </div>
                                <div>
                                    <img src={logoChantilly} alt="" />
                                </div>
                                <div>
                                    <img src={logoCallebaut} alt="" />
                                </div>
                                <div>
                                    <img src={logoWilton} alt="" />
                                </div>
                                <div>   
                                    <img src={logoPuratos} alt="" />
                                </div>
                                <div>
                                    <img src={logoGlorya} alt="" />
                                </div>
                                <div>
                                    <img src={logoMetaltex} alt="" />
                                </div>
                            </div>
                        {/* Fin Marcas */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home