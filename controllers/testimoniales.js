import {Testimoniales} from '../models/testimoniales.js'

const guardarTestimonial = async (req,res)=>{
    const {nombre, correo, mensaje } = req.body;

    const error =[];

    if(nombre.trim()===''){
        error.push({mensaje: 'Nombre vacio'});
    }
    if(correo.trim()===''){
        error.push({mensaje: 'Correo vacio'});
    }
    if(mensaje.trim()===''){
        error.push({mensaje: 'Mensaje vacio'});
    }

    if(error.length>0)
    {
        const testimoniales = await Testimoniales.findAll();

        res.render('testimoniales',{
            pagina: 'Testimoniales',
            errores: error,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    }
    else{
        try {
            await Testimoniales.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');
        } catch (e) {
            console.log(e)
        }
    }
}

export{
    guardarTestimonial
}