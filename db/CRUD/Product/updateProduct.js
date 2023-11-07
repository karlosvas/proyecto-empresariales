'uise strict'
import { modelProduct } from '../../models/Product.js';

export async function updateRobot(name, newDescription, newPrice, newImg) {
    const updateData = {};

    if (newDescription !== null) updateData.description = newDescription;
    if (newPrice !== null) updateData.price = newPrice;
    if (newImg !== null) updateData.imgUrl = newImg;

    const result = await modelProduct.updateMany(
        { name: name },
        {
            $set: updateData
        }
    );
    console.log(updateData)
    console.log("Actualizado corretcamente", result)
    return result;
}

export async function updatePrice(name, newPrice) {
    const result = await modelProduct.updateOne(
        { name: name },
        { $set: { price: newPrice } }
    );
    console.log(result)
    return result;
}
