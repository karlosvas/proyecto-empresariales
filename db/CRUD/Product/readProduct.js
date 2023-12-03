'use strict'
import { modelProduct } from '../../models/Product.js'

export async function allProducts() {
    const products = await modelProduct.find()
    return products;
}

export async function readProduct(product) {
    // Decvuelbe el usuario con el nombre especificado.
    try {
        const result = await modelProduct.findOne({ name: product })
        if (result) return result;
        else return false;
    } catch (error) {
        console.error(error);
        throw new Error("Error al busacr usuario");
    }
}