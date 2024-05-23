export const Header = () => {
    return (
        <header className="md:justify-end md:px-16 md:bg-gray-100 md:text-lg h-16 bg-zinc-800 flex items-center justify-between px-8 fixed w-full">
            <a href="#home" className="md:hidden text-4xl text-white">CT</a>
            <button id="menu-button" className="md:hidden text-white text-4xl">
                <i className="bi bi-list">AA</i>
            </button>
            <ul id="menu-list" className="md:flex md:h-full md:flex md:items-center md:place-content-around tracking-wider hidden">
                <li className="nav-item"><a href="#home">Inicio</a></li>
                <li className="nav-item"><a href="#skills">Habilidades</a></li>
                <li className="nav-item"><a href="#projects">Proyectos</a></li>
                <li className="nav-item"><a href="#contact">Contacto</a></li>
                <li className="ml-3">
                    <button id="dark-mode-button">
                        <i className="bi bi-moon-stars-fill">N</i>
                    </button>
                </li>
            </ul>

        </header>
    )
}