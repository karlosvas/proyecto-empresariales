'use strict'
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    // Creacion del esquema de el formato de los datos en MongoDB.
    name: String,
    description: String,
    price: Number,
    imgUrl: String
})

export const modelProduct = model('Product', productSchema)