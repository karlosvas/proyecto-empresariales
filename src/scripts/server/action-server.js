'use strict'

export function textRecipe(product) {
    let newData = "";
    for (let word of product) {
        if (word == ".") {
            newData += "<br>"
            continue
        }
        newData += word
    }
    return newData
}

export function enviarFormulario() {
    const formulario = document.getElementById("miFormulario");
    const formData = new FormData(formulario);

    fetch('/post/users', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error al enviar formulario:', error);
        });
}
