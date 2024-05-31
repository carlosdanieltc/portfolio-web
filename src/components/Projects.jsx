import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
    return (
        <div id="projects" className="bg-gray-100 flex flex-col md:py-28">
            <h1 className="md:text-4xl text-3xl font-medium w-4/5 text-center border-b-2 mx-auto py-2 md:pb-6">Mis proyectos realizados</h1>
            <div className="w-full flex flex-col md:flex-row justify-center bg-blue-200">

                <button className="bg-gray-600">Izquierda</button>

                <div className="flex flex-col md:flex-row">
                    <ProjectCard></ProjectCard>
                </div>

                <button className="bg-gray-600">Derecha</button>

            </div>
            <p className="text-center mx-4">Puedes ver todos mis proyectos en mi perfil de <a href="https://github.com/carlosdanieltc"
                target="_blank" className="text-blue-600 font-medium">GitHub</a>.</p>
        </div>
    )
}