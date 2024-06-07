export const ProjectCard = ({ title, description, projectLink, gitHubLink, imgProject, technologies }) => {
    return (
        <>
            <div className="w-1/3 h-full rounded-xl border-2 border-black shadow-gray-400 shadow-lg flex flex-col min-w-[32%]">
                <a href={gitHubLink} target="_blank"><img
                    src={imgProject} className="rounded-t-xl" alt="GiffApp" /></a>
                <div className="bg-primaryDark text-white p-3 flex-grow">
                    <h3 className="md:text-2xl text-xl">{title}</h3>
                    <p className="text-sm">{description}<a
                        href={projectLink} target="_blank"
                        className="text-blue-400 font-medium"> Probar ahora</a></p>
                </div>
                <div className="flex h-7 dark:bg-zinc-900 dark:rounded-b-xl bg-white rounded-b-xl p-1">
                    {technologies.map((tech, index) => (
                        <img key={index} src={tech.img} alt={tech.title} className="technologies-default" />
                    ))}
                </div>
            </div>
        </>
    )
}