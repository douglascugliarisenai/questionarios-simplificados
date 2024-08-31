const {Router} = require('express')

const respostaController = require('../dominios/respostas/respostas.controllers')
const respostaRoutes = new Router()

respostaRoutes.get('/', respostaController.index);
respostaRoutes.post('/:perguntaId', respostaController.createResposta);
respostaRoutes.delete('/:id', respostaController.deleteResposta);
respostaRoutes.put('/:id', respostaController.updateResposta);


module.exports = respostaRoutes