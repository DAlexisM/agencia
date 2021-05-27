import {Viaje} from '../models/Viaje.js'
import {Testimoniales} from '../models/testimoniales.js'

const paginainicio = async (req,res)=>{
    try {

        const promiseBD = [];

        promiseBD.push(Viaje.findAll({ limit: 3}));
        promiseBD.push(Testimoniales.findAll({ limit: 3}));

        const resultado = await Promise.all(promiseBD);

        res.render('inicio',{
            pagina:'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]

        });
    } catch (error) {
        console.log(error);
    }
}

const paginanosotros = (req,res)=>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}

const paginaviajes = async (req,res)=>{
    //consulta base datos
    const viajes = await Viaje.findAll();
    res.render('viajes',{
        pagina: 'Proximos viajes',
        viajes
    });
}

const paginaDetalleViaje = async (req,res)=>{
    const {slug} = req.params;
    try{
        const resultado = await Viaje.findOne({where : { slug }});
        res.render('viaje',{
        pagina: 'Informacion del viaje',
        resultado
    });
    }catch(error){
        console.log(error);
    }
    
}

const paginatestimoniales = async (req,res)=>{
    try {
        const testimoniales = await Testimoniales.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        });   
    } catch (error) {
        console.log(error);
    }
}
export {
    paginainicio,
    paginanosotros,
    paginaviajes,
    paginatestimoniales,
    paginaDetalleViaje
}