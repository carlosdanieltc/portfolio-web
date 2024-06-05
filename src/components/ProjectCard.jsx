export const ProjectCard = ({ title, description, projectLink, gitHubLink, imgProject, technologies }) => {
    return (
        <>
            <div className="h-104 w-[25rem] mt-8 md:mt-0 rounded-xl p-0.5 bg-black shadow-gray-400 shadow-lg">
                <div className="w-96 h-96 bg-primaryDark rounded-t-xl text-white">
                    <a href={gitHubLink} target="_blank"><img
                        src={imgProject} className="w-full h-48 rounded-t-xl" alt="GiffApp" /></a>
                    <h3 className="mx-6 mt-4 md:text-2xl text-xl">{title}</h3>
                    <p className="mx-6 mt-4">{description}<a
                        href={projectLink} target="_blank"
                        className="text-blue-400 font-medium"> Probar ahora</a></p>
                </div>
                <div className="w-full h-7 pl-2 pt-1 flex dark:bg-zinc-900 dark:rounded-b-xl bg-white rounded-b-xl">
                     {technologies.map((tech, index) => (
                        <img key={index} src={tech.img} alt={tech.title} className="technologies-default"/>                      
                    ))}
                </div>
            </div>
        </>
    )
}