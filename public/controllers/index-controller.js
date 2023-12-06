'use strict'
import { allProducts, catProducts } from '../../db/CRUD/Product/readProduct.js';

export const controller = {}
let selectCategory = false;
let category = {};

// Se cargan todos los productos y las categorías.
catProducts().then((data) => {
    category = data;
});

controller.index = async (req, res) => {
    try {
        let products;
        if (!selectCategory) {
            products = await allProducts();
        } else {
            products = selectCategory
            selectCategory = false;
        }
        // Si el usuario seleccionó una categoría, se filtran los productos, y se renderiza la response.
        res.render("index", { products });
    } catch (error) {
        console.error(error)
    }
}

controller.postData = async (req, res) => {
    let userInput = req.body.searchInp;
    userInput = userInput.toLowerCase().trim();

    if (category[userInput] !== undefined) {
        selectCategory = category[userInput]
        console.log(`Categoria ${userInput} selecionada`)
        res.status(200).send('ok');
    } else console.log('No existe la categoría');
}

controller.contacto = (req, res) => {
    res.render("contacto");
}

controller.robot = async (req, res) => {
    try {
        const data = await allProducts();
        const cookie = req.cookies.robot;
        const robot = data.find((element) => element.name === cookie);
        if (robot === undefined) res.redirect("/");
        else res.render("robot", { robot, category });
    } catch (error) {
        console.error(error)
    }
}