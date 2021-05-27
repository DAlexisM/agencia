import express from 'express'
import {
    paginainicio, 
    paginanosotros, 
    paginaviajes, 
    paginatestimoniales,
    paginaDetalleViaje
} from '../controllers/paginasController.js'
import {
    guardarTestimonial
} from '../controllers/testimoniales.js'

const router = express.Router();

router.get('/',paginainicio);

router.get('/nosotros',paginanosotros);

router.get('/viajes',paginaviajes);

router.get('/viajes/:slug',paginaDetalleViaje);

router.get('/testimoniales',paginatestimoniales);

router.post('/testimoniales',guardarTestimonial);

export default router;