import bgRecetas from '../../assets/img/recetas/bg2.png';
import brownie from '../../assets/img/recetas/brownies.jpg';
import galletasM from '../../assets/img/recetas/galletasM.jpg';
import ganache from '../../assets/img/recetas/ganache.jpg';
import mixEasy from '../../assets/img/recetas/mixEasy.jpg';
import redVelvet from '../../assets/img/recetas/redVelvet.jpg';
import tegralSatin from '../../assets/img/recetas/tegralSatin.jpg';
import betun from '../../assets/img/recetas/betun.jpg';
import cremaPastelera from '../../assets/img/recetas/cremaPastelera.jpg';
import cupcake from '../../assets/img/recetas/cupcake.jpg';

import Brownie from './Brownie'; 

const Recipes = () => {
    return(
        <div>
            <div className='mb-24 flex justify-center items-center max-md:pt-20'>
                <div className='absolute flex flex-col justify-center items-center gap-5 w-full h-4/6 text-white px-10 lg:px-0'>
                    <h1 className='text-5xl max-md:text-[#8F2C02]'>Recetas</h1>
                    <p className='text-lg text-center max-md:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia impedit, <br />
                    in et quaerat saepe nulla, doloribus adipisci fugiat aperiam tenetur atque! Minima, minus animi in nihil sit accusantium praesentium.</p>
                </div>
                <img className='w-full max-md:hidden' src={bgRecetas} alt="" />
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={brownie} alt="" />
                    <div className="border w-4/5 border-[#EA8239] border-opacity-40 "></div>
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Brownies</h3>
                    <p className='text-center mx-16'>
                        Suspendisse potenti. Praesent tempus ipsum in orci venenatis, quis gravida erat mattis. 
                        Duis euismod lacus id laoreet luctus. Vivamus sed lorem sagittis, ultricies dui eget, pharetra purus. 
                        Fusce ac orci sed arcu posuere commodo.
                    </p>
                    <a href='/Brownie'><button className='border-2 border-[black] border-opacity-50 px-14 py-3 font-bold hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Ver mas</button></a>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={galletasM} alt="" />
                    <div className="border w-4/5 border-[#EA8239] border-opacity-40 "></div>
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Galletas de Mantequilla</h3>
                    <p className='text-center mx-16'>
                        Suspendisse potenti. Praesent tempus ipsum in orci venenatis, quis gravida erat mattis. 
                        Duis euismod lacus id laoreet luctus. Vivamus sed lorem sagittis, ultricies dui eget, pharetra purus. 
                        Fusce ac orci sed arcu posuere commodo.
                    </p>
                    <a href="/Galletas"><button className='border-2 border-[black] border-opacity-50 px-14 py-3 font-bold hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Ver mas</button></a>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={ganache} alt="" />
                    <div className="border w-4/5 border-[#EA8239] border-opacity-40 "></div>
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Ganache Clasico de Chocolate</h3>
                    <p className='text-center mx-16'>
                        Suspendisse potenti. Praesent tempus ipsum in orci venenatis, quis gravida erat mattis. 
                        Duis euismod lacus id laoreet luctus. Vivamus sed lorem sagittis, ultricies dui eget, pharetra purus. 
                        Fusce ac orci sed arcu posuere commodo.
                    </p>
                    <a href="/Ganache"><button className='border-2 border-[black] border-opacity-50 px-14 py-3 font-bold hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Ver mas</button></a>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={mixEasy} alt="" />
                    <div className="border w-4/5 border-[#EA8239] border-opacity-40 "></div>
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Mix Easy Sponge Cake</h3>
                    <p className='text-center mx-16'>
                        Suspendisse potenti. Praesent tempus ipsum in orci venenatis, quis gravida erat mattis. 
                        Duis euismod lacus id laoreet luctus. Vivamus sed lorem sagittis, ultricies dui eget, pharetra purus. 
                        Fusce ac orci sed arcu posuere commodo.
                    </p>
                    <button className='border-2 border-[black] border-opacity-50 px-14 py-3 font-bold hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={redVelvet} alt="" />
                    <div className="border w-4/5 border-[#EA8239] border-opacity-40 "></div>
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Mix Harina Red Velvet</h3>
                    <p className='text-center mx-16'>
                        Suspendisse potenti. Praesent tempus ipsum in orci venenatis, quis gravida erat mattis. 
                        Duis euismod lacus id laoreet luctus. Vivamus sed lorem sagittis, ultricies dui eget, pharetra purus. 
                        Fusce ac orci sed arcu posuere commodo.
                    </p>
                    <button className='border-2 border-[black] border-opacity-50 px-14 py-3 font-bold hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={tegralSatin} alt="" />
                    <div className="border w-4/5 border-[#EA8239] border-opacity-40 "></div>
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Tegral Satin Creme Cake</h3>
                    <p className='text-center mx-16'>
                        Suspendisse potenti. Praesent tempus ipsum in orci venenatis, quis gravida erat mattis. 
                        Duis euismod lacus id laoreet luctus. Vivamus sed lorem sagittis, ultricies dui eget, pharetra purus. 
                        Fusce ac orci sed arcu posuere commodo.
                    </p>
                    <button className='border-2 border-[black] border-opacity-50 px-14 py-3 font-bold hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={betun} alt="" />
                    <div className="border w-4/5 border-[#EA8239] border-opacity-40 "></div>
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Betun de Mantequilla</h3>
                    <p className='text-center mx-16'>
                        Suspendisse potenti. Praesent tempus ipsum in orci venenatis, quis gravida erat mattis. 
                        Duis euismod lacus id laoreet luctus. Vivamus sed lorem sagittis, ultricies dui eget, pharetra purus. 
                        Fusce ac orci sed arcu posuere commodo.
                    </p>
                    <button className='border-2 border-[black] border-opacity-50 px-14 py-3 font-bold hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={cremaPastelera} alt="" />
                    <div className="border w-4/5 border-[#EA8239] border-opacity-40 "></div>
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Crema Patelera Clasica</h3>
                    <p className='text-center mx-16'>
                        Suspendisse potenti. Praesent tempus ipsum in orci venenatis, quis gravida erat mattis. 
                        Duis euismod lacus id laoreet luctus. Vivamus sed lorem sagittis, ultricies dui eget, pharetra purus. 
                        Fusce ac orci sed arcu posuere commodo.
                    </p>
                    <a href="#"><button className='border-2 border-[black] border-opacity-50 px-14 py-3 font-bold hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Ver mas</button></a>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={cupcake} alt="" />
                    <div className="border w-4/5 border-[#EA8239] border-opacity-40 "></div>
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Cupcake de Mantequilla</h3>
                    <p className='text-center mx-16'>
                        Suspendisse potenti. Praesent tempus ipsum in orci venenatis, quis gravida erat mattis. 
                        Duis euismod lacus id laoreet luctus. Vivamus sed lorem sagittis, ultricies dui eget, pharetra purus. 
                        Fusce ac orci sed arcu posuere commodo.
                    </p>
                    <button className='border-2 border-[black] border-opacity-50 px-14 py-3 font-bold hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>Ver mas</button>
                </div>
            </div>
        </div>
    )
}

export default Recipes;