'use strict'
import { Schema, model } from "mongoose"

const userSchema = new Schema({
    // Creación de esquema de usuarios.
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const modelUser = model('User', userSchema)