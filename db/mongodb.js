"use strict"
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@clustere.ql4evhr.mongodb.net/proyecto-empresa`)
        console.log('Connected!')
    } catch (error) {
        console.error("Error al conectarse a la base de datos: ", error);
    }
}