import brownie from '../../assets/img/recetas/brownies.jpg';

const Brownie = () => {
  return (
    <div className='flex flex-col text-center items-center gap-16'>
        <h1 className='text-5xl font-medium text-[#8F2C02] uppercase pt-20'>R e c e t a : B r o w n i e s</h1> 
        <img src={brownie} alt="" />
        <div className='w-[75%]'>
            <div>
                <h3 className='text-4xl font-medium text-[#8F2C02] uppercase p-20'>Ingredientes</h3>
                <ul className="list-disc list-outside my-5 text-2xl ml-12 flex flex-col items-start gap-2">
                    <li className="p-2">1/2 taza harina para hornear</li>
                    <li className="p-2">1/8 cucharadita de sal</li>
                    <li className="p-2">170gr chocolate semiamargo confitier Turin</li>
                    <li className="p-2">170gr de mantequilla sin sal a temperatura ambiente</li>
                    <li className="p-2">3 huevos a temperatura ambiente</li>
                    <li className="p-2">1 taza de azúcar</li>
                    <li className="p-2">100gr nuez en trozos</li>
                </ul>
            </div>
            <div className='pb-20'>
                <h3 className='text-4xl font-medium text-[#8F2C02] uppercase p-20'>Preparacion:</h3>
                <ul className="list-decimal list-inside flex flex-col items-start text-2xl text-left font-medium gap-5">
                    <li>Precalentar el horno a 150° C  y prepara tu molde para hornear de 20 x 20 cm aproximadamente, engrasar y enharinar.</li>
                    <li>Mezcla la harina y la sal en un recipiente.</li>
                    <li>Derretir el chocolate en el microondas, en lapsos de 15 seg hasta que quede líquido, incorpora la mantequilla con una espátula hasta que se derrita.</li>
                    <li>En otro recipiente batimos los huevos y el azúcar hasta que espese.</li>
                    <li>Añadimos los ingredientes secos y batimos a velocidad baja por 30 segundos, no quedaran los ingredientes completamente incorporados por lo que terminamos de incorporarlos con una espátula.</li>
                    <li>Hornear por 50 a 60 min, hasta que la cubierta se vea crujiente y al insertar un chuchillo salga limpio.</li>
                    <li>Deja enfriar y disfruta.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Brownie