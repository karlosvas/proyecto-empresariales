import { modelUser } from '../../models/User.js';

export async function getUser(user) {
    // Devuelhbe el usuario con el nombre especificado.
    try {
        const result = await modelUser.findOne({ username: user })
        if (result) return true;
        else return false;
    } catch (error) {
        console.error(error);
        throw new Error("Error al busacr usuario");
    }
}