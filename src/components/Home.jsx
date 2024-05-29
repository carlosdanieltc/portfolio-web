import CarlosAvatar from '../assets/CarlosAvatar.jpg';
import imgPruebaProject from '../assets/myProjects/Bbva.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Home = () => {
    return (
        <div className="md:bg-gray-100 md:h-screen md:pr-8 flex">
            <div className="md:w-1/2 md:rounded-borderCustom md:z-50 md:pr-12 bg-zinc-800 flex items-center">
                <p className="md:ml-12 md:block mt-4 text-4xl text-white absolute top-0 left-0 hidden">CT</p>
                <img src={CarlosAvatar} className="md:rounded-full md:w-80 md:h-80 w-64 h-64 md:ml-auto" />
                <div className="md:absolute text-5xl mb-3 w-24 bottom-2 lg:left-12 md:left-6 flex justify-between text-white">
                    <a href="https://www.linkedin.com/in/tabaresin"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/carlosdanieltc"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
            <div className="md:w-7/12 flex flex-col pl-16 justify-center">
                <h1 className='md:text-5xl font-medium'>Carlos Tabares</h1>
                <h2 className="text-2xl md:text-3xl ml-1 font-medium">Frontend Developer</h2>
                <p className="py-4 leading-7 md:w-2/3 text-center md:text-start">¡Hola! Soy Carlos, vivo en Vigo, España y soy desarrollador de
                    software.
                    En 2022 terminé mi Ciclo Superior de DAM y ahora me enfoco en aprender y mejorar mis habilidades como
                    FrontEnd-Developer, ya que es lo que más me apasiona.
                </p>
                <a href="#contact"
                    className="rounded-full bg-zinc-800 dark:bg-white dark:text-black text-white py-3 w-32 text-center hover:shadow-lg dark:shadow-sm dark:hover:shadow-white">Contáctame</a>
                <h4 className="my-4 font-medium text-2xl">Últimos proyectos:</h4>

                <div className="md:w-4/5 w-full flex px-1 md:px-0 justify-center">
                    <div className="mx-1 md:ml-0 hover:shadow-xl dark:shadow-md dark:hover:shadow-white rounded-xl">
                        <a href="https://github.com/carlosdanieltc/react-gif-expert-" target="_blank"><img
                            src={imgPruebaProject} className="w-full md:h-48 h-32 rounded-xl" alt="GiffApp" /></a>
                    </div>
                    <div className="mx-1 md:ml-1 hover:shadow-xl dark:shadow-md dark:hover:shadow-white rounded-xl">
                        <a href="https://github.com/carlosdanieltc/todoList" target="_blank"><img
                            src={imgPruebaProject} className="w-full md:h-48 h-32 rounded-xl" alt="TodoList" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}