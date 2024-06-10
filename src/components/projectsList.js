import { tecnologiasImg, herramientasImg } from './imgTech'

export const projects = [ 
    {
        title: 'GifsApp',
        description: 'Proyecto realizado para la práctica de React, en el cuál conectamos con la API de Giphy y podemos realizar búsquedas de gifs de todo tipo.',
        projectLink: 'https://carlosdanieltc.github.io/react-gif-expert-/',
        gitHubLink: 'https://github.com/carlosdanieltc/react-gif-expert-',
        imgProject: '../../public/assets/myProjects/GifsApp.png',
        technologies: [
            tecnologiasImg.react, 
            tecnologiasImg.html,
            tecnologiasImg.css,
            tecnologiasImg.javaScript,
            herramientasImg.vite
        ]
    },
    {
        title: 'ToDoList',
        description: 'Clásica TodoList realizada con React, donde además guardaremos en el LocalStorage los datos que hayamos introducido.',
        projectLink: 'https://carlosdanieltc.github.io/todoList/',
        gitHubLink: 'https://github.com/carlosdanieltc/todoList',
        imgProject: '../../public/assets/myProjects/TodoApp.png',
        technologies: [
            tecnologiasImg.react, 
            tecnologiasImg.html,
            tecnologiasImg.css,
            tecnologiasImg.javaScript,
            herramientasImg.vite
        ]
    },
    {
        title: 'BBVA Home',
        description: 'Página web realizada para la práctica de LitElement en la que veremos un ejemplo de ventana de inicio de bbva.',
        projectLink: 'https://carlosdanieltc.github.io/bbva-home/',
        gitHubLink: 'https://github.com/carlosdanieltc/bbva-home',
        imgProject: '../../public/assets/myProjects/BBVA.png',
        technologies: [
            tecnologiasImg.liteElement,
            tecnologiasImg.html,
            tecnologiasImg.css,
            tecnologiasImg.javaScript,
        ]
    },
    {
        title: 'Tic-Tac-Toe',
        description: 'Proyecto realizado para la práctica de React del clásico juego Tic Tac Toe.',
        projectLink: 'https://carlosdanieltc.github.io/react-tic-tac-toe/',
        gitHubLink: 'https://github.com/carlosdanieltc/react-tic-tac-toe',
        imgProject: '../../public/assets/myProjects/TicTacToe.png',
        technologies: [
            tecnologiasImg.react, 
            tecnologiasImg.html,
            tecnologiasImg.css,
            tecnologiasImg.javaScript,
            herramientasImg.vite
        ]
    },
    {
        title: 'Buscador de Películas',
        description: 'Buscador de películas realizado con React, conectado con la API de OMDb',
        projectLink: 'https://carlosdanieltc.github.io/react-buscador-de-peliculas/',
        gitHubLink: 'https://github.com/carlosdanieltc/react-buscador-de-peliculas',
        imgProject: '../../public/assets/myProjects/Peliculas.png',
        technologies: [
            tecnologiasImg.react, 
            tecnologiasImg.html,
            tecnologiasImg.css,
            tecnologiasImg.javaScript,
            herramientasImg.vite
        ]
    },
]