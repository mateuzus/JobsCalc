const express = require('express')
const server = express()
const routes = require('./routes')

//template engine
server.set('view engine', 'ejs')

//habilitar arquivos publicos
server.use(express.static('public'))

//rotas
server.use(routes)

server.listen(3000, () => {
    console.log('back rodando na porta 3000')
})

