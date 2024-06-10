import { ProjectCard } from "./ProjectCard"
import { projects } from './projectsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from "react"

export const Projects = () => {

    const [currentCard, setCurrentCard] = useState(0)
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -428, behavior: 'smooth' });
        }
        setCurrentCard(currentCard - 1)
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 428, behavior: 'smooth' });
        }
        
        if(currentCard != projects.length -3){
            setCurrentCard(currentCard + 1)
        }
    };

    return (
        <div id="projects" className="bg-gray-100 flex flex-col py-10 2xl:py-28 w-full items-center">
            <h1 className="2xl:text-4xl text-3xl font-medium w-4/5 text-center border-b-2 mx-auto py-3 2xl:pb-6">Mis proyectos realizados</h1>
            <div className="w-full pt-6 2xl:pt-12 2xl:pb-6 px-16 flex flex-col md:flex-row justify-center items-center">

                {currentCard == 0 ? (
                    <button className="text-5xl">
                        <FontAwesomeIcon className="text-gray-300 cursor-default" icon={faCircleChevronLeft} />
                    </button>

                ) : (
                    <button onClick={scrollLeft} className="text-5xl">
                        <FontAwesomeIcon className="text-black cursor-pointer" icon={faCircleChevronLeft} />
                    </button>
                )}

                <div ref={scrollContainerRef} className="flex 2xl:w-[80rem] mx-5 h-96 2xl:h-[28rem] flex-col md:flex-row overflow-hidden gap-x-5 2xl:gap-x-10">
                    {projects.slice().reverse().map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            projectLink={project.projectLink}
                            gitHubLink={project.gitHubLink}
                            imgProject={project.imgProject}
                            technologies={project.technologies}
                        />
                    ))}
                </div>

                {currentCard == (projects.length) - 3 ? (
                    <button  className="text-5xl">
                        <FontAwesomeIcon className="text-gray-300 cursor-default" icon={faCircleChevronRight} />
                    </button>
                ) : (
                    <button onClick={scrollRight} className="text-5xl">
                        <FontAwesomeIcon className="text-black cursor-pointer" icon={faCircleChevronRight} />
                    </button>
                )}

            </div>
            <p className="text-center mx-4 mt-6 2xl:mt-0">Puedes ver todos mis proyectos en mi perfil de <a href="https://github.com/carlosdanieltc"
                target="_blank" className="text-blue-600 font-medium">GitHub</a>.</p>
        </div>
    )
}