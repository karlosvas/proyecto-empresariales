import { connectDB } from '../../mongodb.js'
import { createProduct } from './createProduct.js'
connectDB();

let data1 = "1. ** Boston Dynamics' Spot ** -Descripción:Spot es un robot cuadrúpedo fabricado por Boston Dynamics, diseñado para navegar por terrenos difíciles¹².Utiliza cámaras para la localización simultánea y el mapeo(SLAM) para la navegación autónoma.Tiene 5 pares de cámaras estéreo que proporcionan imágenes y vídeos en blanco y negro.Spot percibe cualquier cosa por encima de 30 cm de altura como un obstáculo y lo evita o lo rodea.Tiene 2 actuadores en cada cadera, y un actuador en cada rodilla, creando 12 grados de libertad, 3 por pierna¹. Spot Enterprise se recarga automáticamente y está diseñado para la detección y la inspección en entornos remotos o peligrosos.-Precio: Aproximadamente $74, 500.00- URL de la imagen: [Imagen de Spot](^ 1 ^) <https://d2908q01vomqb2.cloudfront.net/a9334987ece78b6fe8bf130ef00b74847c1d3da6/2021/10/18/Enterprise_Industrial-.jpg>"

let data2 = "2. ** iRobot Roomba **- Descripción: Roomba es esencialmente un robot aspirador autónomo fabricado y vendido por la empresa iRobot⁷. Este robot aspirador tiene forma de disco y en el centro del robot hay un botón que dice (clean).Debajo de la aspiradora hay dos cepillos laterales que es lo que Roomba utiliza principalmente para limpiar los suelos y en la parte trasera hay un cubo de residuos desmontable⁷.- Precio: Varía según el modelo, aproximadamente entre $249.99 y $1, 399.99- URL de la imagen: [Imagen de iRobot Roomba](^ 7 ^) <https://th.bing.com/th/id/OIP.IbmWQO90JN5Zz8-mxLIH9gHaFj?pid=ImgDet&rs=1"

let data3 = " ** SoftBank's Pepper**- Descripción: Pepper es un robot semihumanoide fabricado por SoftBank Robotics(anteriormente Aldebaran Robotics), diseñado con la capacidad de leer emociones¹². Fue presentado en una conferencia el 5 de junio de 2014, y se mostró en las tiendas de teléfonos móviles de SoftBank en Japón al día siguiente¹². La capacidad de Pepper para reconocer las emociones se basa en la detección y análisis de las expresiones faciales y los tonos de voz¹².- Precio: Aproximadamente $1, 800.00- URL de la imagen: [Imagen de Pepper](^ 12 ^) <https://en.wikipedia.org/wiki/File:SoftBank_pepper.JPG>"

let data4 = ". ** DJI's RoboMaster S1**- Descripción: El RoboMaster S1 es el robot educativo inteligente de DJI que permite a los usuarios sumergirse en el mundo de la robótica, la programación y la IA a través de emocionantes características y juegos¹⁵.El S1 soporta movimiento omnidireccional, lanzamiento de bolas de gel, y proporciona una experiencia de conducción FPV inmersiva¹⁵.- Precio: Aproximadamente $549.00- URL de la imagen: [Imagen de RoboMaster S1](^ 15 ^) <https://www.techtoyreviews.com/wp-content/uploads/2019/06/DJI-RoboMaster-S1.jpg>"

let data5 = "** Anki's Cozmo**- Descripción: Cozmo es un pequeño robot diseñado para fines de entretenimiento y educativos[^ 20 ^].Cuenta con un diseño pequeño y compacto y es capaz de diversas interacciones como reconocer caras, jugar juegos y explorar su entorno[^ 20 ^].Cozmo está alimentado por un conjunto de sofisticados algoritmos de IA que aprenden y se adaptan a su entorno y al usuario[^ 20 ^].- Precio: Aproximadamente $179.99- URL de la imagen: [Imagen de Cozmo](^ 20 ^) <https://m.media-amazon.com/images/I/61I1ZttEOaL._AC_SL1000_.jpg"

function docodificed(data) {
    let res = {
        name: "",
        description: "",
        price: 0,
        imgUrl: "",
    }

    let nameBool = false, descBool = false, priceBool = false, ignore = false, imgBool = false
    let priceAcumulator = "", nameStart = 0;

    for (let word of data) {
        if (word == '[') {
            ignore = true
            continue
        } else if (ignore) {
            if (word == "]") ignore = false
            continue
        }

        //Obtener name
        if (word == '*' && res.name == "") nameStart++;
        if (nameStart == 2) {
            nameBool = true
            nameStart++;
        } else if (nameBool) {
            if (word == '*') {
                nameBool = false
                res.name = res.name.trim()
                continue
            }
            res.name += word
        }

        // Obtener description
        if (word == ':' && res.description == "") {
            descBool = true
        } else if (descBool) {
            if (word == '-') {
                descBool = false
                res.description = res.description.trim().replace(/[¹²³⁴⁵⁶⁷⁸⁹]/g, '');
                continue
            }
            res.description += word
        }

        if (word == '$' && res.price == 0) {
            priceBool = true
        } else if (priceBool) {
            if (word == ',' || word == '.') {
                priceBool = false;
                continue
            }
            priceAcumulator += word
        }

        if (word == "<" && res.img == "") {
            imgBool = true
        } else if (imgBool) {
            if (word == ">") {
                imgBool = false
                continue
            }
            res.img += word
        }
    }

    res.price = parseInt(priceAcumulator);
    return res
}

createProduct(docodificed(data1))
createProduct(docodificed(data2))
createProduct(docodificed(data3))
createProduct(docodificed(data4))
createProduct(docodificed(data5))