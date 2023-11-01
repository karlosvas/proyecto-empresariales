"use strict"
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    // Creacion del esquema de el formato de los datos en MongoDB.
    imgUrl: String,
    name: String,
    recipe: String,
    price: Number
})

export const modelProduct = model('Product', productSchema)