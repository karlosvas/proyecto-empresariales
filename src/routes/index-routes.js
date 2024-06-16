'use strict'
import express from "express"
import { controller } from '../controllers/index-controller.js'

// Enrutador de Express y controladores
const router = express.Router()
const conrtrollers = controller;

// Rutas de (Raiz)
router.get('/', conrtrollers.index);
// Rutas de (Contacto)
router.get('/contacto', conrtrollers.contacto);
// Rutas de (Robots)
router.get('/robot', controller.robot);
// Rutas de peticiones (API)
router.post('/api/post', controller.postData);


export default router;