// Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../logic/useDarkMode';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export const Navbar = ({ visible }) => {
    const [dark, toggleDarkMode] = useDarkMode();
    const [openLanguages, setOpenLanguages] = useState(false);

    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const changeLanguage = (e) => {
        i18n.changeLanguage(e);
    };

    return (
        <>
            <ul id="menu-list" className={`transition duration-300 dark:bg-zinc-800 dark:md:bg-transparent dark:shadow-md dark:shadow-white dark:md:shadow-none md:flex md:h-full md:items-center md:place-content-around tracking-wider ${visible ? "showNavMobile" : "hidden"}`}>
                <li className="nav-item"><a href="#home">{t('navbar.home')}</a></li>
                <li className="nav-item"><a href="#skills">{t('navbar.skills')}</a></li>
                <li className="nav-item"><a href="#projects">{t('navbar.projects')}</a></li>
                <li className="nav-item"><a href="#contact">{t('navbar.contact')}</a></li>
                <li className="ml-3">
                    <button id="dark-mode-button" className='w-4 md:text-xl' onClick={toggleDarkMode}>
                        {dark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                    </button>
                </li>
                <li className="ml-3 md:ml-6 relative">
                    <button className='w-4 md:text-xl' onClick={() => setOpenLanguages(!openLanguages)}>
                        <FontAwesomeIcon icon={faEarthAmerica} />
                    </button>
                    {openLanguages && (
                        <div className="absolute md:-right-2 mt-4 w-32 bg-white border rounded shadow-lg z-10 text-sm text-gray-800">
                            <button onClick={() => {changeLanguage('es'); setOpenLanguages(!openLanguages)}} className="hover:bg-gray-100 w-full text-left px-4 py-3 my-2 cursor-pointer flex gap-2"><img className='w-5' src={`${import.meta.env.BASE_URL}assets/languages/esFlag.png`}></img>{t('navbar.languages.spanish')}</button>
                            <button onClick={() => {changeLanguage('en'); setOpenLanguages(!openLanguages)}} className="hover:bg-gray-100 w-full text-left px-4 py-3 my-2 cursor-pointer flex gap-2"><img className='w-5' src={`${import.meta.env.BASE_URL}assets/languages/enFlag.png`}></img>{t('navbar.languages.english')}</button>
                        </div>
                    )}
                </li>
            </ul>
        </>
    );
};