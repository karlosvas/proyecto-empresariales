"use strict"
import mongoose from 'mongoose';
import { allProducts, catProducts } from './CRUD/Product/readProduct.js';

export let products = [];
export let category = [];

export const connectDB = async () => {
   if (mongoose.connection.readyState === 0) {
      try {
         await mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@clustere.ql4evhr.mongodb.net/proyecto-empresa`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         })
         // Se cargan todos los productos
         products = await allProducts();
         // Se cargan todas las categorías
         category = await catProducts();
         // Se cierra la conexión
         console.log('Request finished!')
      } catch (error) {
         console.error("Error al conectarse a la base de datos: ", error);
      }
   }
   return { products, category }
}