const { Router } = require('express')
const yup = require('yup')

const questionarioController = require('../dominios/questionarios/questionarios.controllers')
const { validarSchema } = require('../middlewares/validacaoRotas')
const { validarAutenticacaoRBAC } = require('../middlewares/validarAutenticacao')

const questionarioRoutes = new Router()

const schemaPostQuestionario = yup.object({
    body: yup.object({
        titulo: yup.string().required("Títutlo é obrigatório"),
        descricao: yup.string().required("Descricão é obrigatório"),
        perguntas: yup.array(yup.object({
            descricao: yup.string().required("Descricão da pergunta é obrigatório")
        }))
    })
})

const schemaDeleteQuestionario = yup.object({
    params: yup.object({
        id: yup.string().uuid("Id informado não é valido").required("Id é obrigatório")
    })
})

const schemaUpdateQuestionario = yup.object({
    body: yup.object({
        titulo: yup.string().required("Títutlo é obrigatório"),
        descricao: yup.string().required("Descricão é obrigatório")
    }),
    params: yup.object({
        id: yup.string().uuid("Id informado não é valido").required("Id é obrigatório")
    })
})

questionarioRoutes.use(validarAutenticacaoRBAC('criador'))
questionarioRoutes.get('/', questionarioController.index
    /* 
        #swagger.tags = ['Questionarios']
        #swagger.path = '/questionarios'
        #swagger.method = 'get'
        #swagger.description = 'Lista todos os questionários'
        #swagger.security = [{ "bearerAuth": [] }]
        
        #swagger.responses[200] = {
        description: 'Questionários listados com sucesso',
        }
        #swagger.responses[400] = {
            description: 'Bad Request'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized'
        }       
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }                                
    */
);
questionarioRoutes.post('/', validarSchema(schemaPostQuestionario), questionarioController.createQuestionario
    /*  
        #swagger.tags = ['Questionarios']
        #swagger.path = '/questionarios'
        #swagger.method = 'post'
        #swagger.description = 'Cria um questionário'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Informações do questionário',
            required: true,
            schema: {
                "$titulo": "Títutlo",
                "$descricao": "Descricão",
                "$perguntas": [
                    {
                        "$descricao": "Descricão da pergunta"
                    }
                ]
            }
        }
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.responses[201] = {
            description: 'Questionário criado com sucesso'
        }
        #swagger.responses[400] = {
            description: 'Bad Request'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized'
        }       
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }
    */
);
questionarioRoutes.delete('/:id', validarSchema(schemaDeleteQuestionario), questionarioController.deleteQuestionario
    /*
        #swagger.tags = ['Questionarios']
        #swagger.path = '/questionarios/{id}'
        #swagger.method = 'delete'
        #swagger.description = 'Deleta um questionário'
        #swagger.security = [{ "bearerAuth": [] }]
         #swagger.responses[204] = {
            description: 'Questionário deletado com sucesso',
        }
        #swagger.responses[400] = {
            description: 'Bad Request'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized'
        }     
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }                                
    */
);
questionarioRoutes.put('/:id', validarSchema(schemaUpdateQuestionario), questionarioController.updateQuestionario
    /*
        #swagger.tags = ['Questionarios']
        #swagger.path = '/questionarios/{id}'
        #swagger.method = 'put'
        #swagger.description = 'Atualiza um questionário'
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.requestBody = {
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/components/schemas/Questionario"
                    }
                }
            }
        }
        #swagger.responses[200] = {
            description: 'Questionário atualizado com sucesso'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized'
        }       
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }
    */
);


module.exports = questionarioRoutes