//'use strict';
//const http = require('http');
//
//const server = http.createServer(function(req, res){
//    res.writeHead(200, {'content-type': 'text/plain'});
//    res.end('Hola mundo');
//
//});
//server.listen(5000);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------
//app.get ('/', (req, res) =>{         
////    res.send('Hola')              //rutas como tal
////})
////
////app.listen(port, () =>{
////    console.log('la app se está ejecutando 3000')    //mensaje que muestra cuando se ejecuta
//})
//----------------------------------------------------------------------------------
const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const animalRoutes = require("./routes/animal");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON

//Gestión de las rutas usando el middleware
app.use("/api", animalRoutes);
app.use(express.json());

//Conexión a la base de datos
mongoose
     .connect(process.env.MONGODB_URI)
     .then(() => console.log("Conexión exitosa"))
     .catch((error) => console.log(error));

//Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

