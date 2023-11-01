'uise strict'
import { modelUser } from '../../models/user.js';

export async function updatePassword(key, newKey) {
    const result = await modelUser.updateOne(
        { password: key },
        { $set: { password: newKey } }
    );
    console.log(result)
    return result;
}

export async function updateUser(user, newUser) {
    const result = await modelUser.updateOne(
        { username: user },
        { $set: { username: newUser } }
    );
    console.log(result)
    return result;
}

// Para devolber el dato actualizado findOneAndUpdate({},{$set:},{new: false})