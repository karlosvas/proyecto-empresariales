'use strict'
import express from "express"
import { controller } from '../controllers/index-controller.js'

const router = express.Router()
const conrtrollers = controller;

// Rutas de / (Raiz)
router.get('/', conrtrollers.index);
router.get('/contacto', conrtrollers.contacto);
router.get('/robot', controller.robot);
router.post('/post', controller.postData);


export default router;