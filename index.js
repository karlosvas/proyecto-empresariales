'use strict'
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './src/routes/index-routes.js';
import cors from 'cors';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './db/mongodb.js';

// Variable sde entorno
dotenv.config({ path: './config/.env' });

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Le indica que los archivos estáticos se encuentran en public
app.use(express.static(join(__dirname, "public")));

// Indica a express que utilize EJS como motor de plantillas
app.set("view engine", "ejs");
// Especifíca la ubicación de la carpeta donde se encuentran las archivos de vista
app.set("views", join(__dirname, "views"));

// Deshabilita el encabezado 'X-Powered-By' en las respuestas HTTP
app.disable('x-powered-by');

// Habilita el middleware CORS para permitir solicitudes entre dominios diferentes
app.use(cors());

// Habilita el análisis de cookies y cuerpos de solicitud JSON en las solicitudes entrantes
app.use(cookieParser());
app.use(express.json());

 
// Conexión a la base da datos
connectDB();

// Define las rutas de la aplicación
app.use(router);

// Middleware para manejar solicitudes a rutas no definidas
app.use('/', (_req, res, _next) => {
   res.status(404).render("404");
});

// Inicia el servidor en el puerto especificado
const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
   console.log(`Servidor abierto en el puerto http://localhost:${PORT}`);
});
