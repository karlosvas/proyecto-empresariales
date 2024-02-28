'use strict'
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './public/routes/index-routes.js';
import cors from 'cors';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './db/mongodb.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.set("views", join(__dirname, 'views'));
app.use(express.static(join(__dirname, "public")));
app.set("view engine", "ejs");

app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.json());

connectDB();

const routes = router;
app.use(routes);

app.use('/', (req, res, next) => {
   res.status(404).render("404");
})

app.listen(PORT, () => {
   console.log(`Servidor abierto en el puerto http://localhost:${PORT}`);
})