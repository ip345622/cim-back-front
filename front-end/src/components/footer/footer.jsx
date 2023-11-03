import React from "react";
import facebook from '../../assets/icon/facebook.svg'
import instalgram from '../../assets/icon/instalgram.svg'
import pinteres from '../../assets/icon/pinteres.svg'

const Footer = () => {
    return(
        <section className="border-t border-[#E98139] text-lg">
            <div className="flex justify-evenly">
                <div className="mt-5 max-md:hidden">
                    <p>MENU RAPIDO</p>
                    <div className="text-[#E98139]">
                        <a href="#" target="_BLANK" className="block">Inicio</a>
                        <a href="#" target="_BLANK" className="block">Nosotros</a>
                        <a href="#" target="_BLANK" className="block">Productos</a>
                        <a href="#" target="_BLANK" className="block">Recetas</a>
                        <a href="#" target="_BLANK" className="block">Ubicaciones</a>
                    </div>
                </div>
                {/* conocenos */}
                <div className="mt-5">
                    <p className="text-lg">Politicas</p>
                    <div className="text-[#E98139]">
                    <a href= "/" className="block">Aviso de privacidad</a>
                    <a href= "nosotros" className="block">Terminos y condiciones</a>
                    <a href= "productos" className="block">Politicas de reembolso</a>
                    <a href= "Cursos" className="block">Forma de pago</a>
                    </div>
                </div>
                {/* siguenos en */}
                <div className="mt-10">
                    <p>SIGUENOS EN</p>
                    <div className="flex gap-5">
                        <a href="https://www.facebook.com/cim.cancun" target="_blank"><img src={facebook} alt="facebook"/></a>
                        <a href="https://www.instagram.com/cim_todoparareposteria/" target="_blank"><img src={instalgram} alt="Instagram" /></a>                    
                    </div>                   
                </div>                
            </div>
            {/* derechos reservados */}
            <div className="bg-[#000] text-[#fff] text-center">
                <p>COPYRIGHT &copy; 2023 CIM</p>
                <span>AGENCIA DE ISIKAWA</span>
            </div>
        </section>
    )
}

export default Footer