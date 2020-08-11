const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

// Rotas

server.get("/", function(req, res) {
    return res.render('index');
});

server.listen(5000, function (){
    console.log('server is running!!!');
});