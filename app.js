"use strict"
import express, { json } from 'express';
import dotenv from 'dotenv';
import path, { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.set("views", join(__dirname, 'views'));
app.use(express.static(join(__dirname, "src")));
app.set("view engine", "ejs");


app.use(json())
app.disable('x-powered-by')

app.get('/', (req, res) => {
    res.render("index");
})

app.listen(PORT, () => {
    console.log(`Servidor abiero en el puerto http://localhost:${PORT}`);
})