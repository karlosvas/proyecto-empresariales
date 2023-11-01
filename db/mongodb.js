"use strict"
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

export const connectDB = () => {
    mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@clustere.ql4evhr.mongodb.net/proyecto-empresa`)
        .then(() => console.log('Connected!'))
        .catch(e => {
            console.error("Error al conectarse a la base de datos: ", e);
        });
}
