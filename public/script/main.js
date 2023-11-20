"use strict"
import { login } from './login.js'

login();

const imagenes = document.querySelectorAll('.card');
imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        const id = imagen.getAttribute('id');
        console.log(id)
        document.cookie = `robot=${id}`;
    });
});
