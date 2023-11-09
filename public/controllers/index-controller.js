'use strict'
import { findProduct } from '../../db/CRUD/Product/readProduct.js';

const controller = {}

controller.index = async (req, res) => {
    try {
        const products = await findProduct();
        res.render("index", { products });
    } catch (error) {
        console.error(error)
    }
}

controller.contacto = (req, res) => {
    res.render("contacto");
}

controller.postre = async (req, res) => {
    try {
        const data = await findProduct();
        const cookie = req.cookies.postre;
        const product = data.find((element) => element.name === cookie);

        res.render("robot", { product });

    } catch (error) {
        console.error(error)
    }
}

export default controller;