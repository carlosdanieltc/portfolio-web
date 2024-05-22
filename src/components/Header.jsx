export const Header = () => {
    return (
        <header className="h-16 bg-zinc-800 md:bg-gray-100 flex items-center md:justify-end px-16 text-lg">
            <ul id="menu-list" className="md:flex md:h-full md:flex md:items-center md:place-content-around tracking-wider">
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