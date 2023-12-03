'use strict'
import { modelProduct } from '../../models/Product.js';

export async function createProduct(data) {
    const product = new modelProduct({
        name: data.name,
        description: data.description,
        price: data.price,
        imgUrl: data.imgUrl,
        spec: data.spec
    })

    try {
        // Guardar el producto en la DB.
        const result = await product.save()
        console.log("Gurdado exitosamente: ", result)
        return result
    } catch (error) {
        console.error(error)
    }
}