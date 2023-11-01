'use strict'
import { modelProduct } from '../../models/Product.js'

export async function findProduct() {
    const products = await modelProduct.find()
    return products;
}

// findProduct();