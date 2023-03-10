const store = require('./store')

function addArticulo(data){
    if(!data){
        console.error('[Controller] - No se recibieron los datos esperados')
        return new Promise.reject('Faltó algún dato')
    }

    const fullArticulo = data

    return store.add(fullArticulo)
}

function getArticulo(){
    return new Promise((resolve, reject)=>{
        resolve(store.list())
    })
}

function updateArticulo(id, data){
    return new Promise(async (resolve, reject)=>{
        if(!id && !data){
            return reject('Datos Invalidos')
        }
        const result = await store.update(id, data)
        resolve(result)
    })
}

function deleteArticulo(id){
    return new Promise((resolve, reject)=>{
        if(!id){
            return reject('ID invalido!')
        }

        store.delete(id)
        .then(()=>{resolve()})
        .catch(e=>{reject(e)})
    })
}

module.exports = {
    addArticulo,
    getArticulo,
    updateArticulo,
    deleteArticulo
}