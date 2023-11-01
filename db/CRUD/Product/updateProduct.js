'uise strict'
import { modelProduct } from '../../models/Product.js';

export async function updateRecipe(name, newRecipe) {
    const result = await modelProduct.updateOne(
        { name: name },
        { $set: { recipe: newRecipe } }
    );
    console.log(result)
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

updatePrice("Batido de fresa", 6)