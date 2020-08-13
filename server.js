const express = require('express');
const nunjucks = require('nunjucks');
const receitas = require('./data')

const server = express();

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

// Rotas

server.get("/", function (req, res) {
    const receita = receitas;
    return res.render('index', { receita });
});

server.get("/about", function(req, res) {
    return res.render('about');
})

server.get("/receitas", function(req, res) {
    const receita = receitas;
    return res.render('receitas' , { receita });
});

server.get("/detalhes", function (req, res) {
    const id = req.query.id;
    const receita = receitas.find(function (receita) {
        if (receita.id == id) {
            return true;
        }
    });
    if (!receita) {
        return res.send("receita não encontrada");
    }

    return res.render('detalhes', { receita });
});

server.listen(5000, function () {
    console.log('server is running!!!');
});