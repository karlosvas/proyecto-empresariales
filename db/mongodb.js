'use strict'
import mongoose from 'mongoose';
import { allProducts, catProducts } from './CRUD/Product/readProduct.js';

export const connectDB = async () => {
   if (mongoose.connection.readyState === 0) {
      try {
         await mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@clustere.ql4evhr.mongodb.net/proyecto-empresa`)
         console.log('Request finished!')
      } catch (error) {
         console.error('Error al conectarse a la base de datos: ', error);
      }
   }
}

// Getter para obtener los datos
export async function getData() {
   try {
      const products = await allProducts();
      const category = await catProducts();
      return { products, category };
   } catch (error) {
      console.error("Error al obtener datos:", error);
      throw error;
   }
}
