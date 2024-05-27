export const Skills = () => {
    return (
        <div id="skills" className="bg-gray-100 dark:text-white">
            <h1 className="md:text-4xl text-3xl font-medium text-center border-b-2 md:pb-6">Habilidades</h1>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col justify-start pt-6 md:pt-10">
                    <h3 className="text-center md:text-3xl text-2xl font-medium py-2 mb-5">Tecnologías</h3>
                    
                </div>
                <div className="md:w-1/2 flex flex-col justify-start pt-6 md:pt-10">
                    <h3 className="text-center md:text-3xl text-2xl font-medium py-2 mb-5">Herramientas</h3>
                    
                </div>
            </div>
        </div>
    )
}