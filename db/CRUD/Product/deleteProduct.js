'use strict'
import { modelProduct } from '../../models/Product.js'
import { connectDB } from '../../mongodb.js'
connectDB()

export async function deleteProduct(name) {
    const result = await modelProduct.findOneAndDelete({ name: name })
    // deleteMany() Todos los datos que coincidan con el argumento.
    return result;
}

export async function deleteAllProduct(name) {
    const result = await modelProduct.deleteMany({ name: name })
    // Todos los datos que coincidan con el argumento.
    return result;
}

deleteProduct("Tarta de chocolate")
    .then((result) => console.log(result));

// Podremos borrarlo por id utilizando findByIdAndDelate("id")