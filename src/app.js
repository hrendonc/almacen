const express = require('express')
const router = require('./network/routes')
const db = require('./db')
var cors = require('cors')

const path = require('path')

// Conexión a la DB
db()

const app = express()

app.use(cors())

// Obtener información del cliente (Body/Query)
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Rutas
router(app)

// Ejecutar Servidor
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
})
