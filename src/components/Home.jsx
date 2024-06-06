import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { LastProjects } from './LastProjects';
import { projects } from './projectsList';

export const Home = () => {
    const lastTwoProjects = projects.slice(0, 2);

    return (
        <div id="home" className="md:bg-gray-100 md:h-screen md:pr-8 md:flex-row flex flex-col">
            <div className="md:w-1/2 md:rounded-borderCustom md:z-50 md:pr-12 bg-zinc-800 flex flex-col items-center justify-center pt-16 md:pt-0">
                <p className="md:ml-12 md:block mt-4 text-3xl 2xl:text-4xl text-white absolute top-0 left-0 hidden">CT</p>
                <img src="../../public/assets/CarlosAvatar.jpg" className="md:rounded-full 2xl:w-80 2xl:h-80 w-64 h-64 md:ml-auto" />
                <div className="md:absolute text-3xl 2xl:text-5xl my-3 w-16 2xl:w-20 px-1 md:px-0 2xl:w-24 bottom-2 md:left-12 flex justify-between text-white">
                    <a href="https://www.linkedin.com/in/tabaresin"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/carlosdanieltc"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
            <div className="md:w-7/12 flex flex-col pl-16 justify-center bg-gray-100 2xl:pt-0 pt-14">
                <h1 className='text-4xl 2xl:text-5xl font-medium'>Carlos Tabares</h1>
                <h2 className="text-xl 2xl:text-3xl ml-1 font-medium">Frontend Developer</h2>
                <p className="py-4 text-sm 2xl:text-md w-11/12 leading-6 2xl:leading-7 2xl:w-2/3 text-center md:text-start">¡Hola! Soy Carlos, vivo en Vigo, España y soy desarrollador de
                    software.
                    En 2022 terminé mi Ciclo Superior de DAM y ahora me enfoco en aprender y mejorar mis habilidades como
                    FrontEnd-Developer, ya que es lo que más me apasiona.
                </p>
                <a href="#contact"
                    className="rounded-full bg-zinc-800 dark:bg-white dark:text-black text-white py-3 text-xs 2xl:text-md w-24 2xl:w-32 text-center hover:shadow-lg dark:shadow-sm dark:hover:shadow-white">Contáctame</a>
                <h4 className="my-4 font-medium 2xl:text-2xl">Últimos proyectos:</h4>

                <div className="xl:w-4/5 w-full flex px-1 xl:px-0 2xl:justify-center">
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