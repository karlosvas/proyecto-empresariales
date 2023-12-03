'use sctrict'
import { verificData, deleteForm } from "./action-client.js";

export function login() {
    document.getElementById('login').addEventListener('click', () => isloged("login"));
    document.getElementById('register').addEventListener('click', () => isloged("register"));
}

export function isloged(status) {
    let isLog = JSON.parse(localStorage.getItem('logeado')) || false;
    if (isLog) {
        localStorage.removeItem('password');
        localStorage.removeItem('username');
        localStorage.setItem('logeado', false);
        document.getElementById('login').textContent = "Login"
        return true;
    } else {
        document.getElementById('login').textContent = "Login";
        crearModal(status);
        return false;
    }
}

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

function crearModal(status) {
    if (modalObject.modal === null) {
        const formBackground = document.createElement("div");
        const form = document.createElement("div");
        const formBar = document.createElement("div");
        const delButton = document.createElement("button");
        const submit = document.createElement("button");
        const inputEmail = document.createElement("input");
        const inputPassword = document.createElement("input");
        const title = document.createElement("h1");
        const res = document.createElement("p");
        const resTrue = document.createElement("p");

        form.className = "form";
        formBar.className = "form-bar";
        delButton.className = "del-form";
        submit.className = "submit-form";
        inputEmail.className = "inp-form";
        inputPassword.className = "inp-form";
        res.id = "res";
        resTrue.id = "res-true";
        formBackground.className = "form-background "

        submit.textContent = "Enviar";
        if (status == "login") {
            title.textContent = "Logeate en RoboTec"
        } else if (status == "register") {
            title.textContent = "Registrate en RoboTec"
        }

        inputEmail.type = "email"
        inputPassword.type = "password"
        submit.type = "submit";

        inputEmail.placeholder = "Correo electónico";
        inputPassword.placeholder = "Contraseña";

        document.body.appendChild(formBackground);
        formBackground.appendChild(form)
        formBar.appendChild(delButton);
        form.appendChild(formBar);
        form.appendChild(title);
        form.appendChild(inputEmail);
        form.appendChild(inputPassword);
        form.appendChild(res);
        form.appendChild(resTrue);
        form.appendChild(submit);

        modalObject.modal = form;
        delButton.addEventListener("click", deleteForm);

        submit.addEventListener("click", submitInfo);
        document.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                submitInfo();
            }
        });
    }
}