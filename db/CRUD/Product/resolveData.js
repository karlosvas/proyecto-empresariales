'use strict'
import { createProduct } from "./createProduct.js";
import { connectDB } from '../../mongodb.js'
connectDB();

export function resolveData(data) {
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

// const data1 = "**Robot Articulado** - Descripcion: Los robots articulados son los más utilizados en la industria en la actualidad. Tienen un diseño similar al brazo humano, compuesto por ejes que se pliegan en diversas direcciones, lo que aumenta su alcance y las posibilidades de aplicación. Existen robots articulados con 2 a 10 ejes, variando el número de puntos de conexión y flexión según la necesidad o el tamaño de la máquina. Los más comunes son los robots de 6 ejes, incluidos los robots colaborativos, que veremos al final. - Precio: $3100 -URL de la imagen: <https://a.storyblok.com/f/136567/1200x1200/2f67ed2901/produkte-knickarmroboter-teile-bearbeitung.jpg/m/x450>"

// const data2 = "** Robot lineal** - Descripcion: ENGEL lleva construyendo robots lineales de alto rendimiento desde 1980. Nuestros robots industriales son el complemento perfecto para su máquina de moldeo por inyección.Su diseño innovador y robusto ofrece una mayor capacidad de carga útil con un bajo peso muerto.Las soluciones digitales de nuestro programa inject 4.0 garantizan que todos los movimientos se acoplen perfectamente. - PRecio: $2300 - URL de la imagen: <https://a.storyblok.com/f/136567/700x350/135844d7f7/produkte-spritzguss-automation-roboter.jpg/m/700x350>"

// resolveData(data1);
// resolveData(data2);