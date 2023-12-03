'uise strict'
import { modelProduct } from '../../models/Product.js';

export async function updateProduct(name, product) {
    const updateData = {};

    if (product.name !== null) updateData.name = product.name;
    if (product.newDescription !== null) updateData.description = product.newDescription;
    if (product.newPrice !== null) updateData.price = product.newPrice;
    if (product.newImg !== null) updateData.imgUrl = product.newImg;
    if (product.newSpecs !== null) updateData.specs = product.newSpecs;

    const result = await modelProduct.updateMany(
        { name: name },
        {
            $set: updateData
        }
    );
    console.log("Actualizado corretcamente")
    console.log(updateData)
    return result;
}
