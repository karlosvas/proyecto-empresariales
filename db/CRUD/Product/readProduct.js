'use strict'
import { modelProduct } from '../../models/Product.js'

export async function allProducts() {
    const products = await modelProduct.find()
    return products;
}
