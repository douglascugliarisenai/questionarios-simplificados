const {Router} = require('express')

const respostaController = require('../dominios/respostas/respostas.controllers')
const { validarAutenticacaoRBAC } = require('../middlewares/validarAutenticacao')

const respostaRoutes = new Router()

respostaRoutes.use(validarAutenticacaoRBAC('estudante'))
respostaRoutes.get('/', respostaController.index);
respostaRoutes.post('/:perguntaId', respostaController.createResposta);
respostaRoutes.delete('/:id', respostaController.deleteResposta);
respostaRoutes.put('/:id', respostaController.updateResposta);


module.exports = respostaRoutes