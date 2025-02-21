import { tecnologiasImg, herramientasImg } from './imgTech';

export const projects = [ 
    {
        title: 'GifsApp',
        description: 'Proyecto realizado para la práctica de React, en él conectamos con la API de Giphy y podemos realizar búsquedas de gifs de todo tipo.',
        projectLink: 'https://carlosdanieltc.github.io/react-gif-expert-/',
        gitHubLink: 'https://github.com/carlosdanieltc/react-gif-expert-',
        imgProject: `${import.meta.env.BASE_URL}assets/myProjects/GifsApp.png`,
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
        imgProject: `${import.meta.env.BASE_URL}assets/myProjects/TodoApp.png`,
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
        imgProject: `${import.meta.env.BASE_URL}assets/myProjects/bbva2.png`,
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
        imgProject: `${import.meta.env.BASE_URL}assets/myProjects/TicTacToe.png`,
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
        description: 'Buscador de películas realizado con React, conectado con la API de OMDb.',
        projectLink: 'https://carlosdanieltc.github.io/react-buscador-de-peliculas/',
        gitHubLink: 'https://github.com/carlosdanieltc/react-buscador-de-peliculas',
        imgProject: `${import.meta.env.BASE_URL}assets/myProjects/Peliculas.png`,
        technologies: [
            tecnologiasImg.react, 
            tecnologiasImg.html,
            tecnologiasImg.css,
            tecnologiasImg.javaScript,
            herramientasImg.vite
        ]
    },
    {
        title: 'Shopping Cart',
        description: 'Shopping Cart realizado en curso de Midudev.',
        projectLink: 'https://carlosdanieltc.github.io/react-shopping-cart/',
        gitHubLink: 'https://github.com/carlosdanieltc/react-shopping-cart',
        imgProject: `${import.meta.env.BASE_URL}assets/myProjects/ShoppingCart.png`,
        technologies: [
            tecnologiasImg.react, 
            tecnologiasImg.html,
            tecnologiasImg.css,
            tecnologiasImg.javaScript,
            herramientasImg.vite
        ]
    },
    {
        title: 'ZARA CHALLENGE',
        description: 'Tienda online de móviles, con vistas de Lista, Detalle y Carrito con LocalStorage.',
        projectLink: 'https://carlosdanieltc.github.io/zara-challenge/',
        gitHubLink: 'https://github.com/carlosdanieltc/zara-challenge',
        imgProject: `${import.meta.env.BASE_URL}assets/myProjects/ZaraChallenge.png`,
        technologies: [
            tecnologiasImg.react, 
            tecnologiasImg.html,
            tecnologiasImg.css,
            tecnologiasImg.javaScript,
            herramientasImg.vite
        ]
    },
];