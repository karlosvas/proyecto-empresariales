'use strict'
import { allProducts } from '../../db/CRUD/Product/readProduct.js';

const controller = {}
const Product = allProducts()

controller.index = async (req, res) => {
    try {
        const products = await Product;
        res.render("index", { products });
    } catch (error) {
        console.error(error)
    }
}

controller.contacto = (req, res) => {
    res.render("contacto");
}

controller.robot = async (req, res) => {
    try {
        const data = await Product;
        const cookie = req.cookies.robot;
        const robot = data.find((element) => element.name === cookie);
        res.render("robot", { robot });
    } catch (error) {
        console.error(error)
    }
}

export default controller;