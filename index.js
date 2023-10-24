import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.render("index");
})

app.listen(PORT, () => {
    console.log(`Servidro abiero en el puerto http://localhost:${PORT}`);
})