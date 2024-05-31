import { ProjectCard } from "./ProjectCard"
import { projects } from './projectsList'

export const Projects = () => {
    return (
        <div id="projects" className="bg-gray-100 flex flex-col md:py-28">
            <h1 className="md:text-4xl text-3xl font-medium w-4/5 text-center border-b-2 mx-auto py-2 md:pb-6">Mis proyectos realizados</h1>
            <div className="py-12 w-full flex flex-col md:flex-row justify-center items-center">

                <button className="bg-gray-600">Izquierda</button>

                <div className="flex flex-col md:flex-row mx-4">
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

                <button className="bg-gray-600">Derecha</button>

            </div>
            <p className="text-center mx-4 my-4">Puedes ver todos mis proyectos en mi perfil de <a href="https://github.com/carlosdanieltc"
                target="_blank" className="text-blue-600 font-medium">GitHub</a>.</p>
        </div>
    )
}