import { tecnologiasImg } from './imgTech'
import { herramientasImg } from './imgTech'

export const Skills = () => {

    return (
        <div id="skills" className="bg-gray-100 2xl:pt-28 pb-12 pt-12 dark:text-white dark:bg-zinc-800">
            <h1 className="2xl:text-4xl text-3xl font-medium w-4/5 text-center border-b-2 mx-auto py-3 2xl:pb-6">Habilidades</h1>
            <div className="flex h-5/6 md:px-16 flex-col md:flex-row gap-4">
                <div className="md:w-1/2 flex flex-col justify-start pt-6 2xl:pt-10">
                    <h3 className="text-center 2xl:text-3xl text-2xl font-medium 2xl:py-2 mb-5">Tecnologías</h3>
                    <ul className="flex flex-wrap justify-center items-center 2xl:mr-6">
                        {Object.keys(tecnologiasImg).map((tech, index) => (
                            <li key={index} className='skill-option'>
                                <img className='w-1/3 2xl:w-1/2 mb-2' src={tecnologiasImg[tech].img} alt={tecnologiasImg[tech].title} />
                                <h4>{tecnologiasImg[tech].title}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/2 flex flex-col justify-start pt-6 2xl:pt-10">
                    <h3 className="text-center 2xl:text-3xl text-2xl font-medium 2xl:py-2 mb-5">Herramientas</h3>
                    <ul className="flex flex-wrap justify-center items-center 2xl:mr-6">
                        {Object.keys(herramientasImg).map((tech, index) => (
                            <li key={index} className='skill-option'>
                                <img className='w-1/3 2xl:w-1/2 mb-2' src={herramientasImg[tech].img} alt={herramientasImg[tech].title} />
                                <h4>{herramientasImg[tech].title}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}