'use strict'
import { modelProduct } from '../../models/Product.js';
// import { connectDB } from '../../mongodb.js'
// connectDB()

export async function createProduct(name, recipe, price, url) {
    const product = new modelProduct({
        name: name,
        recipe: recipe,
        price: price,
        imgUrl: url
    })

    try {
        // Guardar el producto en la DB.
        const result = await product.save()
        console.log("Gurdado exitosamente: ", result)
        return result
    } catch (error) {
        console.error(error)
    }
}

// createProduct("Tarta de Oreo, caramelo y chocolate blanco.", "Para la base:450g de oreos trituradas.120g de mantequilla sin sal derretida.Para el caramelo:400g de leche condensada.90g de mantequilla sin sal.100g de azúcar, (blanco o moreno según se quiera más dulce o menos).1 / 2 cucharilla de sal.1 cucharada de sirope dorado.Para la parte de arriba:250g de chocolate blanco.16 oreos(aproximadamente, depende del molde).Tamaño recomendado del molde: 8x8.", 5, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisE6kFUOG9zPD8P8lwFgcxiwJ2XX5j-jHvFGRODV4a9qh3qCReEGBoYyxg8qu3cxs8A53W4tJOZzd29Vzva8a-iVdrqHqrn7AtHTgCVKc8_9wi7D-_ZSElYqbj_H653uzOXOm07sImfo4YKdicFLf0RFp1zaewSbCvmAB4-dy5MIStHhnHX6U1Ppjg/s1214/Tarta%20oreo%201.jpg")

// createProduct("Tarta de ricotta con nutella", "Ricotta fresca 750g Azúcar 100g 2 Huevos 100ml de leche 90g Maizena 5 - 6 cucharadas de nutella(al gusto) Molde de 24cm desmontable.", 10, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCEpqXiSGqCVINfRJKmqe7oX7vooA4eQHXpt5U-ZAUGSYklnPwK5Gh_U_n2lr2ktPS4MxfEpUIU7FgO5l9AQa49dU67SEAgEU_zfNMo2xME3ISCdOg_XHOB9RFVlqtilgn6BoLZfKnjw_DHb9943fQwbmV5IHoLqTf8Rqyz112BUVQXnTnL7QNhUom/s543/Tarta%20de%20Ricotta%20y%20nutella.png")

// createProduct("Galletas con chispas de chocolate y relleno", "Relleno de la galleta: 170g de crema de queso(tipo philadelphia).30g de azúcar glas.Para la galleta:200g de mantequilla sin sal reblandecida.100g de azúcar moreno.100g de azúcar granulado.1 huevo.1 cucharilla de extracto de vainilla.1 cucharilla de  bicarbonato.1 cucharilla de sal.315g de azúcar glas.200g de chispas de chocolate.", 3, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihPOHqZFWjmCG9K9tII_rlqk3KT7ItN84jguAG8-2bD_prB8xYW5KAVp_Be_DEQh93ApGbOithovh4gTUQo8sCMhNpIqFddnUmL02XWUlTSINJzb2-N_rJOgjdLMOBKfWetbeSWnBgVUivWDJIjsOEpKcYzbnOWC34-sQvk8vshfFDx-RLG_zbVKMh/s1134/Galletas%20rellenas.jpg")

// createProduct("Tarta de manzana", "1 yogur natural (125ml).3 huevos L.3 vasos de harina(225g).2 vasos de azúcar(220g).1 / 2 vaso de aceite de girasol(75ml).15g de levadura.4 manzanas pequeñas(500 g sin pelar).Ralladura y zumo de 1 / 2 limón.Mermelada de melocotón para decorar.Mantequilla para engrasar el molde.Molde de 22x6 cm preferiblemente.", 3, "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7xhcKJvoyOkoPXkxEa7L8i-HlnAMuxdm89MK2DoXprewK4xYePxSOWLp6rjUk7vT1BufBuRjqs9iREmMDA6qSHwzmdRjFC6-e3cE6CgcMQiGse1oBg93hq5Fav86tz2m2-WovBSopns3A5bmTD_Yf9sfdF434NdXZyGyjBH458UhhAm7VmJVtZmFR/s1401/Tarta%20manzana.jpg")