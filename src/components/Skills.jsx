import { tecnologiasImg } from './imgTech'
import { herramientasImg } from './imgTech'

export const Skills = () => {
    console.log(Object.keys(tecnologiasImg))
    return (
        <div id="skills" className="bg-gray-100 md:pt-28 pb-12 pt-16 dark:text-white transition duration-300">
            <h1 className="md:text-4xl text-3xl font-medium w-4/5 text-center border-b-2 mx-auto py-2 md:pb-6">Habilidades</h1>
            <div className="p-1 flex h-5/6 md:px-16 flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col justify-start pt-6 md:pt-10">
                    <h3 className="text-center md:text-3xl text-2xl font-medium py-2 mb-5">Tecnologías</h3>
                    <ul className="flex flex-wrap justify-center items-center md:mr-6">
                        {Object.keys(tecnologiasImg).map((tech, index) => (
                            <li key={index} className='skill-option'>
                                <img className='w-1/2 mb-2' src={tecnologiasImg[tech].img} alt={tecnologiasImg[tech].title} />
                                <h4>{tecnologiasImg[tech].title}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/2 flex flex-col justify-start pt-6 md:pt-10">
                    <h3 className="text-center md:text-3xl text-2xl font-medium py-2 mb-5">Herramientas</h3>
                    <ul className="flex flex-wrap justify-center items-center md:mr-6">
                        {Object.keys(herramientasImg).map((tech, index) => (
                            <li key={index} className='skill-option'>
                                <img className='w-1/2 mb-2' src={herramientasImg[tech].img} alt={herramientasImg[tech].title} />
                                <h4>{herramientasImg[tech].title}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}