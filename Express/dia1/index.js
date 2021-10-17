//ENTORNO
const express = require ('express');
const { algoritmoPrueba } = require('../../node2/funciones/funciones');

const app = express();
const router =('./router.js');

app.use(router);

const port = 3000;

//ALGORITMO
app.listen(port, ()=> console.log(`Servidor levantado y rulando en el puerto ${port}`))

