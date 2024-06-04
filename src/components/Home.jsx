import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { LastProjects } from './LastProjects';
import { projects } from './projectsList';

export const Home = () => {
    const lastTwoProjects = projects.slice(0, 2);

    return (
        <div id="home" className="md:bg-gray-100 md:h-screen md:pr-8 md:flex-row flex flex-col">
            <div className="md:w-1/2 md:rounded-borderCustom md:z-50 md:pr-12 bg-zinc-800 flex flex-col items-center justify-center pt-16 md:pt-0">
                <p className="md:ml-12 md:block mt-4 text-4xl text-white absolute top-0 left-0 hidden">CT</p>
                <img src="../../public/assets/CarlosAvatar.jpg" className="md:rounded-full md:w-80 md:h-80 w-64 h-64 md:ml-auto" />
                <div className="md:absolute text-4xl md:text-5xl my-3 w-20 px-1 md:px-0 md:w-24 bottom-2 lg:left-12 md:left-6 flex justify-between text-white">
                    <a href="https://www.linkedin.com/in/tabaresin"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/carlosdanieltc"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
            <div className="md:w-7/12 flex flex-col pl-16 justify-center bg-gray-100">
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
                    {lastTwoProjects.map((project, index) => (
                        <LastProjects
                            key = { index }
                            img = { project.imgProject }
                            title = { project.title }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}