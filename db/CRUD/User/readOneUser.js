import { modelUser } from '../../models/user.js';

export async function getUser(user) {
    // Decvuelbe el usuario con el nombre especificado.
    try {
        const result = await modelUser.findOne({ username: user })
        console.log(result)
        return result;
    } catch (error) {
        console.error(error)
    }
}

getUser("karlosvas");