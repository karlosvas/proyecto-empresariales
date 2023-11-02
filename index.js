'use strict'
import express, { json } from 'express';
import dotenv from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './db/mongodb.js';
import { findProduct } from './db/CRUD/Product/readProduct.js';
import cookieParser from 'cookie-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.set("views", join(__dirname, 'views'));
app.use(express.static(join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(json())
app.disable('x-powered-by')
app.use(cookieParser());

connectDB();

app.get('/', async (req, res) => {
    try {
        const data = await findProduct();
        res.render("index", { products: data });
    } catch (error) {
        console.error(error)
    }
})

app.get('/contacto', (req, res) => {
    res.render("contacto");
})

app.get('/postre', async (req, res) => {
    try {
        const data = await findProduct();
        const cookie = req.cookies.postre;
        const postre = data.find((element) => element.name === cookie);
        res.render("postre", { postre });

    } catch (error) {
        console.error(error)
    }
})

app.use('/', (req, res, next) => {
    res.status(404).render("404");
})

app.listen(PORT, () => {
    console.log(`Servidor abierto en el puerto http://localhost:${PORT}`);
})