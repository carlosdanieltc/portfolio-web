import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Contact = () => {
    return (
        <div id="contact" className="bg-zinc-800 dark:bg-zinc-900 text-white flex flex-col justify-center items-center pt-28 pb-20">
            <h1 className="text-4xl font-medium mb-8">Contacto</h1>
            <p className="text-center mx-4 mb-4 md:mb-0">Puedes contactarme enviándome un email a <a href="mailto:carlosdanieltc@gmail.com"><b className="text-blue-500">carlosdanieltc@gmail.com</b></a> o a través de mis redes sociales.</p>
            <p>Espero tu mensaje !</p>
            <div className="my-6 text-4xl w-20 flex justify-between">
                <a href="https://www.linkedin.com/in/tabaresin"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="https://github.com/carlosdanieltc"><FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </div>
    )
}