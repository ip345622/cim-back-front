import ganache from '../../assets/img/recetas/ganache.jpg';

const Ganache = () => {
  return (
    <div className='flex flex-col text-center items-center gap-16'>
        <h1 className='text-5xl font-medium text-[#8F2C02] uppercase pt-20'>R e c e t a : Ganache clasico de chocolate</h1> 
        <img src={ganache} alt="" />
        <div className='w-[75%]'>
            <div>
                <h3 className='text-4xl font-medium text-[#8F2C02] uppercase p-20'>Ingredientes</h3>
                <ul className="list-disc list-outside my-5 text-2xl ml-12 flex flex-col items-start gap-8 font-medium">
                    <li>300g Chocolate semiamargo o amargo Turin</li>
                    <li>300ml Crema para batir lyncott</li>
                    <li>Si gustas puedes agregar una cucharada de ron, brandy o cualquier otro licor de tu agrado.</li>
                </ul>
            </div>
            <div className='pb-20'>
                <h3 className='text-4xl font-medium text-[#8F2C02] uppercase p-20'>Preparacion:</h3>
                <ul className="list-decimal list-inside flex flex-col items-start text-2xl text-left font-medium gap-8">
                    <li>Picar el chocolate hasta conseguir trozos pequeños.</li>
                    <li>Calentar la crema para batir en una olla hasta que llegue a ebullición y retirar del fuego.</li>
                    <li>Fuera del fuego añadimos el chocolate picado. Mezclar hasta obtener una crema suave. Añadir la cuchara de licor opcional.</li>
                    <li>Dejar que el ganache se vaya enfriando antes de usarlo. Si vas a cubrir un pastel comienza por el centro y trabajar hacia el exterior.</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Ganache