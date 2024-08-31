const  {Router} = require('express')

const questionarioController = require('../dominios/questionarios/questionarios.controllers')

const questionarioRoutes = new Router()


questionarioRoutes.get('/', questionarioController.index);
questionarioRoutes.post('/', questionarioController.createQuestionario);
questionarioRoutes.delete('/:id', questionarioController.deleteQuestionario);
questionarioRoutes.put('/:id', questionarioController.updateQuestionario);


module.exports = questionarioRoutes