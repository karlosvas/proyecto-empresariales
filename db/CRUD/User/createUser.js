import { modelUser } from '../../models/user.js'

export async function createUser(username, password) {
    const user = new modelUser({
        username,
        password
    })
    try {
        await user.save();
        console.log(user)
    } catch (error) {
        console.error(error)
    }
}