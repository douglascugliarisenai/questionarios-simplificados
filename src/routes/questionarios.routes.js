const { Router } = require('express')
const yup = require('yup')

const questionarioController = require('../dominios/questionarios/questionarios.controllers')
const { validarSchema } = require('../middlewares/validacaoRotas')

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


questionarioRoutes.get('/', questionarioController.index);
questionarioRoutes.post('/', validarSchema(schemaPostQuestionario), questionarioController.createQuestionario);
questionarioRoutes.delete('/:id', validarSchema(schemaDeleteQuestionario), questionarioController.deleteQuestionario);
questionarioRoutes.put('/:id', validarSchema(schemaUpdateQuestionario), questionarioController.updateQuestionario);


module.exports = questionarioRoutes