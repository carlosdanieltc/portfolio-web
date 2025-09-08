import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

export const Contact = () => {

    const { t } = useTranslation();

    return (
        <div id="contact" className="2xl:text-md bg-zinc-800 dark:bg-zinc-900 text-white flex flex-col justify-center items-center pt-20 pb-10 2xl:pt-28 2xl:pb-20">
            <h1 className="text-4xl 2xl:text-5xl font-medium mb-8">{t('navbar.contact')}</h1>
            <p className='text-center mx-4 mb-4 md:mb-0'>
                <Trans i18nKey="contact.description">
                    Puedes contactarme enviándome un email a <a href="mailto:carlosdanieltc@gmail.com"><b className="text-blue-500">carlosdanieltc@gmail.com</b></a> o a través de mis redes sociales.
                </Trans>
            </p>
            <p>{t('contact.lastMessage')}</p>
            <div className="my-6 text-5xl w-[6.5rem] flex justify-between">
                <a href="https://www.linkedin.com/in/tabaresin" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/carlosdanieltc" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    )
}