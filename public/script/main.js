"use strict"
import { verificData, deleteForm } from "./action-client.js";

document.getElementById('login').addEventListener('click', () => {
    let isLog = JSON.parse(localStorage.getItem('logeado'))
    console.log(isLog)
    if (isLog) {
        localStorage.setItem('logeado', false)
        document.getElementById('login').textContent = "Login"
    } else {
        document.getElementById('login').textContent = "Login";
        crearModal();
    }
})

const imagenes = document.querySelectorAll('.card');
imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        const id = imagen.getAttribute('id');
        console.log(id)
        document.cookie = `postre=${id}`;
    });
});

export let modalObject = {
    modal: null
}

function submitInfo() {
    const username = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    let userAccepted = verificData(username, password)
    // Borar inputs
    const inputs = document.querySelectorAll(".inp-form")
    inputs.forEach((elm) => {
        if (elm.id != "accept") elm.value = '';
    })

    // Si el usuario se ha creado con exito.
    if (userAccepted) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('logeado', true);
        document.getElementById("login").textContent = "Logout"
        deleteForm();
    }
}

function crearModal() {
    if (modalObject.modal === null) {
        const formBackground = document.createElement("div");
        const nuevoDiv = document.createElement("div");
        const contentDiv = document.createElement("div");
        const delButton = document.createElement("button");
        const submit = document.createElement("button");
        const inputEmail = document.createElement("input");
        const inputPassword = document.createElement("input");
        const title = document.createElement("h1");
        const res = document.createElement("p");

        nuevoDiv.className = "form";
        contentDiv.className = "form-content";
        delButton.className = "del-form";
        submit.className = "submit-form";
        inputEmail.className = "inp-form";
        inputPassword.className = "inp-form";
        res.className = "p-res";
        formBackground.className = "form-background "

        submit.textContent = "Enviar";
        title.textContent = "Inicia sesion en RoboTec"

        inputEmail.type = "email"
        inputPassword.type = "password"
        submit.type = "submit";

        inputEmail.placeholder = "Correo electónico";
        inputPassword.placeholder = "Contraseña";

        document.body.appendChild(formBackground);
        formBackground.appendChild(nuevoDiv)
        contentDiv.appendChild(delButton);
        nuevoDiv.appendChild(contentDiv);
        nuevoDiv.appendChild(submit);
        nuevoDiv.appendChild(title);
        nuevoDiv.appendChild(inputEmail);
        nuevoDiv.appendChild(inputPassword);
        nuevoDiv.appendChild(res);

        modalObject.modal = nuevoDiv;
        delButton.addEventListener("click", deleteForm);

        submit.addEventListener("click", submitInfo);
        document.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                submitInfo();
            }
        });
    }
}

