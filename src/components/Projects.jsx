import { ProjectCard } from "./ProjectCard"
import { projects } from './projectsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react"

export const Projects = () => {

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -430, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 430, behavior: 'smooth' });
        }
    };

    return (
        <div id="projects" className="bg-gray-100 flex flex-col md:py-28 w-full items-center">
            <h1 className="md:text-4xl text-3xl font-medium w-4/5 text-center border-b-2 mx-auto py-2 md:pb-6">Mis proyectos realizados</h1>
            <div className="py-12 px-16 flex flex-col md:flex-row justify-center items-center">

                <button onClick={scrollLeft} className="text-5xl"><FontAwesomeIcon icon={faCircleChevronLeft}/></button>

                <div ref={scrollContainerRef} className="flex w-[80rem] flex-col md:flex-row overflow-hidden">
                    {projects.map((project, index) => (
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

                <button onClick={scrollRight} className="text-5xl"><FontAwesomeIcon icon={faCircleChevronRight}/></button>

            </div>
            <p className="text-center mx-4 my-4">Puedes ver todos mis proyectos en mi perfil de <a href="https://github.com/carlosdanieltc"
                target="_blank" className="text-blue-600 font-medium">GitHub</a>.</p>
        </div>
    )
}