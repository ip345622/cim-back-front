import { useState, useEffect } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

import callebaut from '../../assets/img/inicio/marcas/Callebaut.png'
import glorya from '../../assets/img/inicio/marcas/glorya.png'
import chantilly from '../../assets/img/inicio/marcas/Chantilly.png'
import metaltex from '../../assets/img/inicio/marcas/Metaltex.png'
import puratos from '../../assets/img/inicio/marcas/puratos.png'
import wilton from '../../assets/img/inicio/marcas/wilton.png'

export const Slider = () => {
    const slides =[
        {
          img:metaltex
        },
        {
          img:puratos
        },
        {
          img:wilton
        },
        {
          img:chantilly
        },
        {
          img:glorya
        },
        {
          img:callebaut
        }
      ];
    
      const [currentIndex,setcCurrentIndex] = useState(0);
      useEffect(() => {
        // Función que se ejecuta cada 3 segundos para cambiar el slide
        const interval = setInterval(() => {
          setcCurrentIndex((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
    
        // Limpieza del intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
      }, []);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
        setcCurrentIndex(newIndex);
      }
    
      const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setcCurrentIndex(newIndex);
      }
      const goToSlide = (slideIndex) =>{
        setcCurrentIndex(slideIndex);
      }

      return(
        <section className='max-w-[300px] h-[300px] w-full m-auto py-16 px-4 relative group'>
      <div
  style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
  className="w-full h-full rounded-2xl bg-contain bg-no-repeat bg-center duration-500"></div>
  {/* flecha derecha */}
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={30}/>
  </div>
  {/* flecha izquierda */}
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactRight onClick={nextSlide} size={30}/>
  </div>
  <div className='flex top-4 justify-center py-2'>
    {slides.map((slide,slideIndex) => (
      <div key={slideIndex} onClick={() =>goToSlide(slideIndex)} className=' text-2xl cursor-pointer'>
        <RxDotFilled />
      </div>
    ))}
  </div>
      </section>
      )

}