import { useState, useEffect } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

import bg1 from '../../assets/img/sliderInicio/bg1.jpg'
import bg2 from '../../assets/img/sliderInicio/bg2.jpg'
import bg3 from '../../assets/img/sliderInicio/bg3.jpg'
import bg4 from '../../assets/img/sliderInicio/bg4.jpg'

export const SliderIni = () => {
    const slides =[
        {
          img: bg1
        },
        {
          img: bg2
        },
        {
          img: bg3
        },
        {
          img: bg4
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
        <section className='max-[1700px]:hidden h-[37rem] w-auto m-auto relative group bg-gradient-to-t from-[#ef904d] to-[#8F2C02] py-5'>
          <div
            style={{ backgroundImage:`url(${slides[currentIndex].img})` }}
            className="w-full h-full bg-contain bg-no-repeat bg-center duration-500 scale-100"></div>
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