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

usuarioRoutes.post('/',validarSchema(schemaPostUsuario), usuarioController.create
    /*
        #swagger.tags = ['Usuários']
        #swagger.summary = 'Cria um novo Usuário';
        #swagger.description = 'Endpoint para criar um novo Usuário';
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Informações do novo Usuário',
            required: true,
            schema: {
                "$nome": "Nome",
                "$sobrenome": "Sobrenome",
                "$email": "Email",
                "$senha": "Senha",
                "$role": "Role"
            }
        }
        
        #swagger.responses[201] = {
        description: 'Usuário criado com sucesso'
        }
        #swagger.responses[409] = {
            description: 'Conflict'
        }        
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }                                
    */
);
usuarioRoutes.get('/', usuarioController.index
    /*
        #swagger.tags = ['Usuários']
        #swagger.path = '/'
        #swagger.method = 'get'
        #swagger.summary = 'Endpoint para listar os usuários'
        
        #swagger.responses[200] = {
        description: 'Usuários listados com sucesso'
        }
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }                                
    */
);
usuarioRoutes.delete('/:id', usuarioController.delete
    /*
        #swagger.tags = ['Usuários']
        #swagger.path = '/{id}'
        #swagger.method = 'delete'
        #swagger.summary = 'Endpoint para deletar um usuário'
       
        #swagger.responses[204] = {
        description: 'Usuário deletado com sucesso'
        }
        #swagger.responses[400] = {
            description: 'Bad Request'
        }
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }
    */
);


module.exports = usuarioRoutes