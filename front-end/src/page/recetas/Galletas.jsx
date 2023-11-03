import galletasM from '../../assets/img/recetas/galletasM.jpg';

const Galletas = () => {
  return (
    <div className='flex flex-col text-center items-center gap-16'>
        <h1 className='text-5xl font-medium text-[#8F2C02] uppercase pt-20'>R e c e t a : galletas  de  mantequilla</h1> 
        <img src={galletasM} alt=""/>
        <div className='w-[75%]'>
            <div>
                <h3 className='text-4xl font-medium text-[#8F2C02] uppercase p-20'>Ingredientes</h3>
                <ul className="list-disc list-outside my-5 text-2xl ml-12 flex flex-col items-start gap-8 font-medium">
                    <li>180g mantequilla</li>
                    <li>340g de harina cernida</li>
                    <li>2 yemas</li>
                    <li>125g de azúcar glass cernida</li>
                </ul>
            </div>
            <div className='pb-20'>
                <h3 className='text-4xl font-medium text-[#8F2C02] uppercase p-20'>Preparacion:</h3>
                <ul className="list-decimal list-inside flex flex-col items-start text-2xl text-left font-medium gap-5">
                    <li>Acremar la mantequilla, agregar el azúcar y la harina previamente cernido.</li>
                    <li>Seguir batiendo y cuando esté bien integrado agregar las yemas de huevo.</li>
                    <li>Refrigerar por 30 minutos antes de darle forma a las galletas.</li>
                    <li>Hornear a 180ºC por 10 o 15 min. Hasta que las orillas estén ligeramente doradas.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Galletas