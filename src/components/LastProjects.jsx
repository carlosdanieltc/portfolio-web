export const LastProjects = ( { img, title }) => {
    return (
        <div className="mx-1 md:ml-0 hover:shadow-xl dark:shadow-md dark:hover:shadow-white rounded-xl">
            <a href="https://github.com/carlosdanieltc/react-gif-expert-" target="_blank"><img
                src={img} className="w-full md:h-48 h-32 rounded-xl" alt={title} /></a>
        </div>
    )
}