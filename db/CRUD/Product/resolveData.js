'use strict'
import { createProduct } from "./createProduct.js";

// Modifica el texto de bing para añadirlo a la base de datos.
export function resolveDataBing(data) {
    let res = {
        name: "",
        description: "",
        price: 0,
        imgUrl: ""
    }

    let nameBool = false, descBool = false, priceBool = false, ignore = false, imgBool = false
    let priceAcumulator = "", nameStart = 0;

    for (let word of data) {
        if (word == '[') {
            ignore = true
            continue
        } else if (ignore) {
            if (word == "]") ignore = false
            continue
        }

        //Obtener name
        if (word == '*' && res.name == "") nameStart++;
        if (nameStart == 2) {
            nameBool = true
            nameStart++;
        } else if (nameBool) {
            if (word == '*') {
                nameBool = false
                res.name = res.name.trim()
                continue
            }
            res.name += word
        }

        // Obtener description
        if (word == ':' && res.description == "") {
            descBool = true
        } else if (descBool) {
            if (word == '-') {
                descBool = false
                res.description = res.description.trim().replace(/[¹²³⁴⁵⁶⁷⁸⁹]/g, '');
                continue
            }
            res.description += word
        }

        if (word == '$' && res.price == 0) {
            priceBool = true
        } else if (priceBool) {
            if (word == ',' || word == '.') {
                continue
            } else if (word == '-') priceBool = false
            priceAcumulator += word
        }

        if (word == "<" && res.imgUrl == "") {
            imgBool = true
        } else if (imgBool) {
            if (word == ">") {
                imgBool = false
                continue
            }
            res.imgUrl += word
        }
    }
    res.price = parseInt(priceAcumulator);
    createProduct(res)
}

// Separa texto por "." y lo cambia por saltos de línea
export function resolveData(data) {
    let newData = "";
    let text = true;
    for (let i = 0; i < data.length; i++) {
        if (!text && data[i] != ' ') text = true;

        if (data[i] == '.') {
            newData += "<br>";
            text = false;
        } else if (text) newData += data[i];
    }
    return newData;
}