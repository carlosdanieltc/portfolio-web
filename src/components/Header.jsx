import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Navbar } from './Navbar'

export const Header = () => {

    const [visible, setVisible] = useState(false);

    const showMenu = () => {
        setVisible(!visible)
    }

    return (
        <header className="md:px-16 md:bg-gray-100 text-md 2xl:text-lg 2xl:h-16 h-16 bg-zinc-800 flex items-center justify-between px-8 fixed w-full tracking-wider dark:bg-zinc-800 dark:text-white">
            <a href="#home" className='text-4xl text-white md:text-black dark:text-white transition duration-300'>CT</a>
            <button className={`md:hidden text-4xl z-30 dark:text-white ${visible ? "text-black" : "text-white"}`}>
                <i className="bi bi-list" onClick={showMenu}><FontAwesomeIcon icon={faBars}/></i>
            </button>
            <Navbar visible={visible}/>
        </header>
    )
}