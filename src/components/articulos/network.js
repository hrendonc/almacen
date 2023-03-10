const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', (req, res)=>{
    const {codigo, nombre, medida, stock} = req.body

    if(!codigo || !nombre || !medida || !stock ) return res.status(400).json({Message: 'Faltaron datos requeridos'})
    
    controller.addArticulo(req.body)
    .then((fullArticulo)=>{
        response.success(req, res, 200, 'Artículo registrado correctamente!',fullArticulo)
    })
    .catch(e=>response.error(req, res, 400, 'Error interno', e))
})

router.get('/', (req, res) => {

    controller.getArticulo()
        .then((data) => {
            response.success(req, res, 200, data)
        })
        .catch(e => {
            response.error(req, res, 400, 'Error interno', e)
        })

})

router.patch('/:idproduct', async (req, res)=>{
    try{
        const ok = await controller.updateArticulo(req.params, req.body)

        if(ok){
            response.success(req, res, 200, 'Artículo actualizado con éxito.', ok)
        }else{
            response.error(req, res, 400, 'Datos incorrectos', 'No se encontro el ID')
        }
    }
    catch (e){
        response.error(req, res, 400, 'Error interno', e)
    }
    
})

router.delete('/:idproduct', (req, res)=>{
    controller.deleteArticulo(req.params.idproduct)
    .then(() => {response.success(req, res, 200, 'Artículo eliminado con éxito!', 'Eliminado')})
    .catch(e => {response.error(req, res, 500, 'Error interno', e)})
})

module.exports = router