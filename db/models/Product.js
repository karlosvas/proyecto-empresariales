'use strict'
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    // Creación del esquema de el formato de los datos en MongoDB.
    name: String,
    description: String,
    price: Number,
    imgUrl: String,
    specs: String
}, { _id: false });

const categorySchema = new Schema({
    industriales: [productSchema],
    domesticos: [productSchema],
    tecnologicos: [productSchema],
    servicio: [productSchema]
}, { _id: false });

export const modelProduct = model('Product', productSchema)
export const modelCategoryProduct = model('CategoryProduct', categorySchema)