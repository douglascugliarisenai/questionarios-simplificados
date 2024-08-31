const  {Router} = require('express')

const respostaController = require('../dominios/respostas/respostas.controllers')
const { validarAutenticacao } = require('../middlewares/validarAutenticacao')

const respostaRoutes = new Router()


respostaRoutes.use(validarAutenticacao)
respostaRoutes.get('/', respostaController.index);
respostaRoutes.post('/', respostaController.createResposta);
respostaRoutes.delete('/:id', respostaController.deleteResposta);
respostaRoutes.put('/:id', respostaController.updateResposta);


module.exports = respostaRoutes