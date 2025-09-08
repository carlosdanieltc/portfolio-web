import { ProjectCard } from "./ProjectCard"
import { projects } from './projectsList'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

export const Projects2Design = () => {

    const { t } = useTranslation();

    return (
        <div id="projects" className="bg-gray-100 flex flex-col py-10 2xl:py-28 w-full items-center dark:text-white dark:bg-zinc-800">
            <h1 className="2xl:text-4xl text-3xl font-medium w-4/5 text-center border-b-2 mx-auto pb-3 md:pt-4 2xl:pt-0 2xl:pb-6 pt-14">{t('myProjects.myProjects')}</h1>
            <div className="w-full pt-6 2xl:pt-12 2xl:pb-6 px-6 md:px-16 flex md:flex-row justify-center items-center">

                <div className="2xl:w-[83rem] gap-x-5 gap-y-10 h-auto flex flex-col md:flex-row flex-wrap justify-center">
                    {projects.slice().reverse().map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={t(project.title)}
                            description={t(project.description)}
                            projectLink={project.projectLink}
                            gitHubLink={project.gitHubLink}
                            imgProject={project.imgProject}
                            technologies={project.technologies}
                        />
                    ))}
                </div>

            </div>
            <p className="text-center mx-4 mt-3 2xl:mt-0">
                <Trans i18nKey="myProjects.lastDescription">
                    <a href="https://github.com/carlosdanieltc" target="_blank" className="text-blue-600 font-medium">GitHub</a>.
                </Trans>
            </p>
        </div>
    )
}