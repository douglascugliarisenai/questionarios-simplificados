const { json } = require("sequelize")
const questionariosServices = require("./questionarios.services")

class QuestionariosControllers {

    async index(request, response) {
        try {
            const questionarios = await questionariosServices.listQuestionarios()
           
            if(!questionarios) {
                return response.status(400).json({ message: "Questionários inexistentes" })
            }
            
            return response.status(200).json(questionarios)  
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    async createQuestionario(request, response) {
        try {
            const body = request.body
            const questionario = await questionariosServices.createQuestionario(body)

            return response.status(201).json({ message: "Questionário criado com sucesso", questionario })
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    async deleteQuestionario(request, response) {
        try {
            const { id } = request.params
            const apagou = await questionariosServices.deleteQuestionario(id)
            
            if(!apagou) {
                return response.status(400).json({ message: "Não foi possivel apagar"})
            }

            return response.status(204).end()   
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    async updateQuestionario(request, response) {
        try {
            const { id } = request.params
            const body = request.body
            const questionario = await questionariosServices.updateQuestionario({ id, ...body })

            return response.status(200).json({ message: "Questionário atualizado com sucesso", questionario })  
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }
}   

module.exports = new QuestionariosControllers()