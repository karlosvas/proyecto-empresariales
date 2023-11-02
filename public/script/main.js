"use strict"

const imagenes = document.querySelectorAll('.main-img');

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        const id = imagen.getAttribute('id');
        console.log(id)
        document.cookie = `postre=${id}`;
    });
});
