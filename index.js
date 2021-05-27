import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'

const app = express();

//conectar a la base
db.authenticate()
.then( () => console.log('Base datos conectada') )
.catch( error => console.log(error) );

//definir puerto
//const port = process.env.PORT  || 4000;

//habilitar pug
app.set('view engine','pug');

//obtener el ano actual
app.use((req,resp,next)=>{
    const year = new Date();
    resp.locals.actualyear = year.getFullYear(); 
    resp.locals.titulo = "Agencia de Viajes";
    next();
})

//agregar body parse para leer datos del formulario
app.use(express.urlencoded({extended:true}));

//definir carpeta publica
app.use(express.static('public'));

//agregar router
app.use('/',router);

/** puerto y host para la app */

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

app.listen(port,host,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})