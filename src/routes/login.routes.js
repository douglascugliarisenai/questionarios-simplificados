const { Router } = require('express')
const yup = require('yup')

const { validarSchema } = require('../middlewares/validacaoRotas')
const LoginControllers = require('../dominios/login/login.controllers')

const schemaPostLogin = yup.object({
    body: yup.object({
        email: yup.string().email("Email informado não é valido").required("Email é obrigatório"),
        senha: yup.string().required("Senha é obrigatório")
    })
})

const loginRoutes = new Router()

loginRoutes.post('/', validarSchema(schemaPostLogin), LoginControllers.createLogin);


module.exports = loginRoutes