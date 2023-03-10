const Model = require('./model')

function addArticulo(articulo){
    const myArticulo = new Model(articulo)
    return myArticulo.save()
}

async function getArticulo(){
    const articulos = await Model.find()
    return articulos
}

async function updateArticulo(id, data){
    try{
        const foundData = await Model.findOne({
            _id: id.idproduct
        })

        if(foundData){
            if(data.codigo) foundData.codigo = data.codigo
            if(data.nombre) foundData.nombre = data.nombre
            if(data.medida) foundData.medida = data.medida
            if(data.stock) foundData.stock = data.stock
            if(data.descripcion) foundData.descripcion = data.descripcion
            if(data.img) foundData.img = data.img

            const newData = await foundData.save()
            return newData
        }else{
            return false
        }
    }
    catch (e){
        console.log('[Update-Store] - ', e.message)
        return false
    }    
}

function deleteArticulo(id){
    return Model.deleteOne({_id: id})
}

module.exports = {
    add: addArticulo,
    list: getArticulo,
    update: updateArticulo,
    delete: deleteArticulo
}