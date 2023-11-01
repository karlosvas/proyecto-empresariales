'use strict'
import { modelProduct } from '../../models/Product.js';
import { connectDB } from '../../mongodb.js'
connectDB()

export async function createProduct(name, recipe, price, url) {
    const product = new modelProduct({
        imgUrl: url,
        name: name,
        recipe: recipe,
        price: price
    })

    try {
        // Guardar el producto en la DB.
        const result = await product.save()
        console.log("Gurdado exxitosamente: ")
        return result
    } catch (error) {
        console.error(error)
    }
}

// createProduct("tarta", "Fresa 200g, azúcar 50g, miel 1 cucharada, leche 300ml", 5, "https://imgs.search.brave.com/0dzJy3JcHQYmUXJTe2agc4Mm3Ca7xm1lPsf4f06c_Xw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cGV0aXRjaGVmLmVz/L2ltZ3VwbC9yZWNp/cGUvdGFydGEtZGUt/bWFzY2FycG9uZS1j/b24tbGltYS15LW1l/cm1lbGFkYS1kZS1m/cmVzYS0tbGctMTMx/NjY1cDE5ODI5NS5q/cGc")
//     .then((result) => console.log(result))

// createProduct("Tarta de chocolate", "3 huevos, 3 Onzas de chocolate, Azucar 30g, Arina 100g", 10, "https://imgs.search.brave.com/OCp-0gnUS6UaX5Fjt_Qc_N-PEwPqdsupE3lOzfi5OW4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGl2aW5hY29jaW5h/LmVzL3dwLWNvbnRl/bnQvdXBsb2Fkcy90/YXJ0YS1jaG9jb2xh/dGUuanBn")
//     .then((result) => console.log(result))