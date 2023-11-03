import React from "react";
// import map from '../../assets/img/ubicaciones/map.jpg';
import 'boxicons';


const Ubicaciones = () => {
    return(
        <div className="flex flex-col text-center items-center bg-gray-100">
            <div className="w-full h-fit md:h-auto md:py-36 py-16 max-md:text-[#8F2C02] md:text-white md:bg-[#EA8239]">
                <h1 className="md:text-7xl text-4xl max-md:font-medium">Ubicaciones</h1>
                <p className="md:text-3xl text-2xl">Visítanos en tu sucursal más cercana</p>
            </div>
            <div>
                <div className="flex flex-col py-10 gap-10 items-center">
                    <div className="grid lg:grid-cols-3 grid-rows gap-8">
                        <h3 className="text-6xl lg:col-span-3 text-[#8F2C02] font-semibold">Cancún</h3>
                        <div className="bg-white shadow-xl p-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <ul className="flex flex-col gap-2">
                                <li className="text-5xl text-[#8F2C02]">CIM Nichupte</li>
                                <li className="text-2xl">Horarios</li>
                                <li className="text-2xl">Lunes a Viernes:</li>
                                <li className="text-2xl">9:00 am a 8:00 pm</li>
                                <li className="text-2xl">Sabados:</li>
                                <li className="text-2xl">9:00 am a 4:00 pm:</li>
                                <li><a href="https://goo.gl/maps/CgRH3RgXyPf81U6x5" target="_blank"><box-icon name='map' color='#ea8239' size='lg'></box-icon></a></li>
                                <li className="text-2xl"><a href="https://goo.gl/maps/CgRH3RgXyPf81U6x5" target="_blank">Ubicacion</a></li>
                            </ul>
                        </div>
                        <div className="bg-white shadow-xl p-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <ul className="flex flex-col gap-2">
                                <li className="text-5xl text-[#8F2C02]">CIM 135</li>
                                <li className="text-2xl">Horarios</li>
                                <li className="text-2xl">Lunes a Viernes:</li>
                                <li className="text-2xl">9:00 am a 8:00 pm</li>
                                <li className="text-2xl">Sabados:</li>
                                <li className="text-2xl">9:00 am a 4:00 pm:</li>
                                <li><a href="https://goo.gl/maps/818QbX1geT5fnGmT7" target="_blank"><box-icon name='map' color='#ea8239' size='lg'></box-icon></a></li>
                                <li className="text-2xl"><a href="https://goo.gl/maps/818QbX1geT5fnGmT7" target="_blank">Ubicacion</a></li>
                            </ul>
                        </div>
                        <div className="bg-white shadow-xl p-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <ul className="flex flex-col gap-2">
                                <li className="text-5xl text-[#8F2C02]">CIM Centro</li>
                                <li className="text-2xl">Horarios</li>
                                <li className="text-2xl">Lunes a Viernes:</li>
                                <li className="text-2xl">9:00 am a 8:00 pm</li>
                                <li className="text-2xl">Sabados:</li>
                                <li className="text-2xl">9:00 am a 4:00 pm:</li>
                                <li><a href="https://goo.gl/maps/fh3Zxd97gxw4hj1b7" target="_blank"><box-icon name='map' color='#ea8239' size='lg'></box-icon></a></li>
                                <li className="text-2xl"><a href="https://goo.gl/maps/fh3Zxd97gxw4hj1b7" target="_blank">Ubicacion</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h3 className="text-6xl col-span-3 text-[#8F2C02] font-semibold">Playa del Carmen</h3>
                        <div className="bg-white shadow-xl flex flex-col p-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <ul className="flex flex-col gap-2">
                                <li className="text-5xl text-[#8F2C02]">CIM Playa</li>
                                <li className="text-2xl">Horarios</li>
                                <li className="text-2xl">Lunes a Viernes:</li>
                                <li className="text-2xl">9:00 am a 7:00 pm</li>
                                <li className="text-2xl">Sabados:</li>
                                <li className="text-2xl">10:00 am a 2:00 pm:</li>
                                <li><a href="https://goo.gl/maps/AuMf5W8qwq8AnSkGA" target="_blank"><box-icon name='map' color='#ea8239' size='lg'></box-icon></a></li>
                                <li className="text-2xl"><a href="https://goo.gl/maps/AuMf5W8qwq8AnSkGA" target="_blank">Ubicacion</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 lg:w-2/5">
                        <h3 className="text-6xl col-span-3 text-[#8F2C02] font-semibold">Merida</h3>
                        <div className="bg-white shadow-xl flex flex-col p-10 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <ul className="flex flex-col gap-2">
                                <li className="text-5xl text-[#8F2C02]">CIM Merida</li>
                                <li className="text-2xl">Horarios</li>
                                <li className="text-2xl">Lunes a Viernes:</li>
                                <li className="text-2xl">9:00 am a 5:00 pm</li>
                                <li><a href="https://goo.gl/maps/bHbJAHwVmnjiRu1w7" target="_blank"><box-icon name='map' color='#ea8239' size='lg'></box-icon></a></li>
                                <li className="text-2xl"><a href="https://goo.gl/maps/bHbJAHwVmnjiRu1w7" target="_blank">Ubicacion</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div>
                        <h3>Tulum</h3>
                        <div>
                            <h3>CIM Tulum</h3>
                            <p>Horarios</p>
                            <p>Lunes a Viernes 9:00 am a 8:00 pm</p>
                            <box-icon name='map' color='#ea8239' ></box-icon>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Ubicaciones;