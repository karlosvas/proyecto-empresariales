"use strict"
import mongoose from 'mongoose';

export const connectDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/proyecto-empresa')
        .then(() => console.log('Connected!'))
        .catch(e => {
            console.error("Error al conectarse a la base de datos: ", e);
        });
}
