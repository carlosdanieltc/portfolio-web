import { useTranslation } from 'react-i18next';

export const ProjectCard = ({ title, description, projectLink, gitHubLink, imgProject, technologies }) => {
    
    const { t } = useTranslation();
   
    return (
        <>
            <div className="rounded-xl border-2 border-black shadow-gray-400 shadow-lg flex flex-col md:h-96 2xl:h-[30rem] md:max-w-[32%]">
                <a href={gitHubLink} target="_blank"><img
                    src={imgProject} className="rounded-t-xl" alt={title} /></a>
                <div className="bg-primaryDark text-white p-3 pb-6 flex-grow">
                    <h3 className="text-2xl 2xl:text-3xl text-xl">{title}</h3>
                    <p className="text-sm 2xl:text-base mt-2 2xl:mt-4 px-1">{description}<a
                        href={projectLink} target="_blank"
                        className="text-blue-400 font-medium">{t('myProjects.tryNow')}</a></p>
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