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

loginRoutes.post('/', validarSchema(schemaPostLogin), LoginControllers.createLogin
    /*  #swagger.tags = ['Login']
        #swagger.path = '/login'
        #swagger.method = 'post'
        #swagger.description = 'Endpoint para realizar login'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Informações do login',
            required: true,
            schema: {
                "$email": "Email",
                "$senha": "Senha"
            }
        }
        #swagger.responses[200] = {
            description: 'OK'
        }
        #swagger.responses[400] = {
            description: 'Email ou senha inválidos'
        }
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }   
    */
);


module.exports = loginRoutes