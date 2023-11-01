"use strict"
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: String,
    recipe: String,
    price: Number
})

export const modelProduct = model('Product', productSchema)

const product = new modelProduct({
    name: "Tarta de chocolate",
    recipe: "3 huevos, 3 Onzas de chocolate, Azucar 30g, Arina 100g",
    price: 10
})

try {
    const resultado = await product.save()
    console.log("Gurdado exxitosamente: ", resultado)
} catch (error) {
    console.error(error)
}