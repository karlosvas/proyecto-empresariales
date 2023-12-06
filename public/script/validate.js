'use strict'
import { category } from '../controllers/index-controller.js'

async function validateData(data) {
    try {
        const info = await category
        console.log(info)
    } catch (error) {

    }
}