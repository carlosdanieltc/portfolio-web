import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { DarkMode } from '../logic/darkMode'
import { useState } from 'react'

export const Header = () => {

    const [visible, setVisible] = useState(false);

    const showMenu = () => {
        setVisible(!visible)
    }

    return (
        <header className="md:px-16 md:bg-gray-100 text-md 2xl:text-lg 2xl:h-16 h-14 bg-zinc-800 flex items-center justify-between px-8 fixed w-full tracking-wider">
            <a href="#home" className='text-4xl text-white md:text-black'>CT</a>
            <button className={`md:hidden text-4xl z-50 ${visible ? "text-black" : "text-white"}`}>
                <i className="bi bi-list" onClick={showMenu}><FontAwesomeIcon icon={faBars}/></i>
            </button>
            <ul id="menu-list" className={`md:flex md:h-full md:items-center md:place-content-around tracking-wider ${visible ? "showNavMobile" : "hidden"}`}>
                <li className="nav-item"><a href="#home">Inicio</a></li>
                <li className="nav-item"><a href="#skills">Habilidades</a></li>
                <li className="nav-item"><a href="#projects">Proyectos</a></li>
                <li className="nav-item"><a href="#contact">Contacto</a></li>
                <li className="ml-3">
                    <button id="dark-mode-button" onClick={DarkMode}>
                        <FontAwesomeIcon icon={faSun}/>
                    </button>
                </li>
            </ul>

        </header>
    )
}