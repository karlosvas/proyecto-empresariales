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