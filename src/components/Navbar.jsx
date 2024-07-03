// Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../logic/useDarkMode';
import { useState } from 'react';
import Modal from './Modal';

export const Navbar = ({ visible }) => {
    const [dark, toggleDarkMode] = useDarkMode();
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <ul id="menu-list" className={`transition duration-300 dark:bg-zinc-800 dark:md:bg-transparent dark:shadow-md dark:shadow-white dark:md:shadow-none md:flex md:h-full md:items-center md:place-content-around tracking-wider ${visible ? "showNavMobile" : "hidden"}`}>
                <li className="nav-item"><a href="#home">Inicio</a></li>
                <li className="nav-item"><a href="#skills">Habilidades</a></li>
                <li className="nav-item"><a href="#projects">Proyectos</a></li>
                <li className="nav-item"><a href="#contact">Contacto</a></li>
                <li className="ml-3">
                    <button id="dark-mode-button" className='w-4 md:text-xl' onClick={toggleDarkMode}>
                        {dark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                    </button>
                </li>
                <li className="ml-3 md:ml-6">
                    <button onClick={openModal} className='w-4 md:text-xl'>
                        <FontAwesomeIcon icon={faEarthAmerica} />
                    </button>
                </li>
            </ul>
            <Modal isOpen={modalOpen} closeModal={closeModal}/>
        </>
    );
};