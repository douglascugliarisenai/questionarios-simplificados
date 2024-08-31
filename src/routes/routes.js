const { Router } = require('express')
const routes = new Router()

const usuariosRoutes = require('./usuarios.routes')
const questionariosRoutes = require('./questionarios.routes')
const respostasRoutes = require('./respostas.routes')
const loginRoutes = require('./login.routes')
const { validarAutenticacaoRBAC } = require('../middlewares/validarAutenticacao')


routes.use('/login', loginRoutes) 
routes.use('/usuarios', usuariosRoutes)



routes.use(validarAutenticacaoRBAC('criador'))
routes.use('/questionarios',questionariosRoutes)

routes.use(validarAutenticacaoRBAC('estudante'))
routes.use('/respostas', respostasRoutes)


module.exports = routes