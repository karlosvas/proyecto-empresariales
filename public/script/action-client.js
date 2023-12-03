'use strict'
import { modalObject } from './login.js'

export function verificData(username, password) {
    const res = document.getElementById("res")
    const resTrue = document.getElementById("res-true")

    if (username == '' && password == '') return;
    const divEmail = document.querySelector('input[type="email"]')
    const divPassword = document.querySelector('input[type="password"]')

    if (username == '') {
        res.textContent = "El usuario es obligatorio"
        return;
    }

    if (divEmail.id != "accept") {
        let mayus = 0, symb = 0, dominio = 0, space = 0;
        for (let word of username) {
            if (word == word.toUpperCase() && /^[^0-9@.,?]+$/.test(word)) mayus++;
            if (word == '@') symb++;
            if (word == '.') dominio++;
            if (word == ' ') space++;
        }

        if (mayus > 0) {
            res.textContent = "Las mayusculas no son validas"
            return;
        } else if (symb == 0 || symb > 1) {
            res.textContent = "Deve introducir @ en el correo"
            return;
        } else if (dominio == 0 || dominio > 1) {
            res.textContent = "Deve introducir dominio"
            return;
        } else if (space > 0) {
            res.textContent = "No se pueden introduir espacios en blanco"
            return
        } else {
            resTrue.textContent += "Email valido ✅"
            divEmail.id = "accept"
        }
    }

    // Contraseñas
    if (divPassword != "accept") {
        if (password == '') {
            res.textContent = "La contraseña es obligatoria"
            return;
        }

        let mayusPass = 0, numPass = 0, spacePass = 0;
        for (let word of password) {
            if (word == word.toUpperCase()) mayusPass++;
            if (!isNaN(word)) numPass++;
        }

        if (password.length < 8) {
            res.textContent = "La contraseña deve de ser mas larga"
            return;
        } else if (mayusPass < 0) {
            res.textContent = "Deve introducir mayusculas"
        } else if (numPass < 2) {
            res.textContent = "Deve introducir al menos dos numeros"
        } else if (spacePass > 0) {
            res.textContent = "No se pueden introduir espacios en blanco"
            return;
        } else {

            if (divEmail.id == "accept") {

                // if (!redOneUser(username)) {
                //     createUser(username, password);
                //     console.log(`Usuario ${username} creado correcttamente ✅`)
                // }

                resTrue.textContent = `Acceso al usuario ${username} con éxito✅`
                return true;
            }

            res.textContent = "Contraseña valida ✅"
            divPassword.id = "accept"
        }
    }
}

export function deleteForm() {
    let father = document.querySelector('.form-background')
    if (father) {
        father.remove();
        modalObject.modal = null;
    }
}