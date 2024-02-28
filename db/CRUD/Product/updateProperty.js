'uise strict'
import { modelProduct } from '../../models/Product.js';

export async function updateProperty(name, property, newProperty) {
   // Prodcut es el objeto con el producto a actualizar.
   const result = await modelProduct.updateOne(
      { name: name },
      {
         $set: {
            [property]: newProperty
         }
      }
   );
   console.log("Actualizado corretcamente")
   return result;
}