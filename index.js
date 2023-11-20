'use strict'
import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './db/mongodb.js';
import router from './public/routes/index-routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.set("views", join(__dirname, 'views'));
app.use(express.static(join(__dirname, "public")));
app.set("view engine", "ejs");

app.disable('x-powered-by')
app.use(cookieParser());

connectDB();

const routes = router;
app.use(routes);

app.use('/', (req, res, next) => {
    res.status(404).render("404");
})