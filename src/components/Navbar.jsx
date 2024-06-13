import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { useDarkMode } from '../logic/useDarkMode'

export const Navbar = ( {visible} ) => {

    const [dark, toggleDarkMode] = useDarkMode();

    return (
        <ul id="menu-list" className={`md:flex md:h-full md:items-center md:place-content-around tracking-wider ${visible ? "showNavMobile" : "hidden"}`}>
                <li className="nav-item"><a href="#home">Inicio</a></li>
                <li className="nav-item"><a href="#skills">Habilidades</a></li>
                <li className="nav-item"><a href="#projects">Proyectos</a></li>
                <li className="nav-item"><a href="#contact">Contacto</a></li>
                <li className="ml-3">
                    <button id="dark-mode-button" onClick={toggleDarkMode}>
                        <FontAwesomeIcon icon={faSun}/>
                    </button>
                </li>
            </ul>
    )
}