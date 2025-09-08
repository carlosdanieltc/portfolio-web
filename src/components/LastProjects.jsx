export const LastProjects = ( { img, title, gitHubLink }) => {
    return (
        <div className="mx-1 md:ml-0 hover:shadow-xl dark:shadow-md dark:hover:shadow-white rounded-xl">
            <a href={gitHubLink} target="_blank"><img
                src={img} className="rounded-xl" alt={title} /></a>
        </div>
    )
}