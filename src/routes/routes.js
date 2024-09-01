const { Router } = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('../config/docs/swagger')

const routes = new Router()

const usuariosRoutes = require('./usuarios.routes')
const questionariosRoutes = require('./questionarios.routes')
const respostasRoutes = require('./respostas.routes')
const loginRoutes = require('./login.routes')


routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
routes.use('/login', loginRoutes) 
routes.use('/usuarios', usuariosRoutes)
routes.use('/questionarios',questionariosRoutes)
routes.use('/respostas', respostasRoutes)


module.exports = routes