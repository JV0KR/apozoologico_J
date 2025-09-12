//'use strict';
//const http = require('http');
//
//const server = http.createServer(function(req, res){
//    res.writeHead(200, {'content-type': 'text/plain'});
//    res.end('Hola mundo');
//
//});
//server.listen(5000);

const express = require('express')
const app = express()
const port = 3000                 //el puerto que se va a poner en el navegador

app.get ('/', (req, res) =>{         
    res.send('Hola')              //rutas como tal
})

app.listen(port, () =>{
    console.log('la app se está ejecutando')    //mensaje que muestra cuando se ejecuta
})


