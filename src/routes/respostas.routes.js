const {Router} = require('express')

const respostaController = require('../dominios/respostas/respostas.controllers')
const { validarAutenticacaoRBAC } = require('../middlewares/validarAutenticacao')

const respostaRoutes = new Router()

respostaRoutes.use(validarAutenticacaoRBAC('estudante'))
respostaRoutes.get('/', respostaController.index
    /*
        #swagger.tags = ['Respostas']
        #swagger.path = '/respostas'
        #swagger.method = 'get'
        #swagger.summary = 'Endpoint para buscar todas as respostas'
        #swagger.security = [{ "bearerAuth": [] }]
        
        #swagger.responses[200] = {
        description: 'Respostas encontradas com sucesso'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized'
        }
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }
    */
);
respostaRoutes.post('/:perguntaId', respostaController.createResposta
    /*
        #swagger.tags = ['Respostas']
        #swagger.path = '/respostas/{perguntaId}'
        #swagger.method = 'post'
        #swagger.summary = 'Endpoint para criar uma nova resposta'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Informação da resposta',
            required: true,
            schema: {
                "$descricao": "Descricão da resposta"
            }
        }

        #swagger.parameters['perguntaId'] = {
            in: 'path',
            description: 'Id da pergunta', 
        }
        #swagger.security = [{ "bearerAuth": [] }]
        #swagger.responses[201] = {
        description: 'Resposta criada com sucesso'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized'
        }
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }
    */
);
respostaRoutes.delete('/:id', respostaController.deleteResposta
    /*
        #swagger.tags = ['Respostas']
        #swagger.path = '/respostas/{id}'
        #swagger.method = 'delete'
        #swagger.summary = 'Endpoint para deletar uma resposta'
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.responses[204] = {
        description: 'Resposta deletada com sucesso'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized'
        }
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }
    */
);
respostaRoutes.put('/:id', respostaController.updateResposta
    /*
        #swagger.tags = ['Respostas']
        #swagger.path = '/respostas/{id}'
        #swagger.method = 'put'
        #swagger.summary = 'Endpoint para atualizar uma resposta'
        #swagger.security = [{ "bearerAuth": [] }]

        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Informação da resposta',
            required: true,
            schema: {
                "$descricao": "Descricão da resposta"
            }
        }
        #swagger.responses[200] = {
        description: 'Resposta atualizada com sucesso'
        }
        #swagger.responses[401] = {
            description: 'Unauthorized'
        }
        #swagger.responses[500] = {
            description: 'Internal Server Error'
        }
    */
);


module.exports = respostaRoutes