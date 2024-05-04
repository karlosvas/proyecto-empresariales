'use strict'
import { modelProduct, modelCategoryProduct } from '../../models/Product.js'

export async function allProducts() {
   try {
      const products = await modelProduct.find();
      return products;
   } catch (error) {
      console.error("Error al obtener todos los productos:", error);
      throw error;
   }
}


export async function catProducts() {
   try {
      const categorySchema = await modelCategoryProduct.find()
      return categorySchema[0];
   } catch (error) {
      console.error(error);
      throw new Error("Error al busacar coleción");
   }
}


export async function readProduct(product) {
   // Devuelbe el producto con el nombre especificado.
   try {
      console.log(product)
      console.log(typeof product)
      const result = await modelProduct.findOne({ name: product })
      if (result) return result;
      else return false;
   } catch (error) {
      console.error(error);
      throw new Error("Error al buscar producto");
   }
}