const  {Router} = require('express')
const yup = require('yup')

const usuarioController = require('../dominios/usuarios/usuarios.controllers')
const { validarSchema } = require('../middlewares/validacaoRotas')

const schemaPostUsuario = yup.object({
    body: yup.object({
        nome: yup.string().required("Nome é obrigatório"),
        sobrenome: yup.string(),
        email: yup.string().email("Email informado não é valido").required("Email é obrigatório"),
        senha: yup.string().min(6, "Senha deve ter pelo menos 6 digitos").max(12, "Senha deve ter no maximo 12 digitos").required("Senha é obrigatório"),
        role: yup.string().oneOf(["estudante", "criador"]).required("Role é obrigatório")
    })
})

const usuarioRoutes = new Router()

usuarioRoutes.post('/',validarSchema(schemaPostUsuario), usuarioController.create);
usuarioRoutes.get('/', usuarioController.index);
usuarioRoutes.delete('/:id', usuarioController.delete);


module.exports = usuarioRoutes