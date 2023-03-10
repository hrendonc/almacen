const express = require('express')
const articulos = require('../components/articulos/network')

// Creamos un servidor de rutas
const routes = function (server) {
    server.use('/', articulos)
}

module.exports = routes