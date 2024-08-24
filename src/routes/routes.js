const { Router } = require('express')
const routes = new Router()

const usuariosRoutes = require('./usuarios.routes')
const questionariosRoutes = require('./questionarios.routes')

// Publicas
routes.use('/usuarios', usuariosRoutes)
routes.use('/questionarios', questionariosRoutes)



module.exports = routes