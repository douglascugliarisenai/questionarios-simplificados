const Perguntas = require("../../database/models/perguntas")
const questionariosModel = require("../../database/models/questionarios")
class QuestionariosServices {
    async listQuestionarios() {
        const questionarios = await questionariosModel.findAll()
        return questionarios
    }

    async createQuestionario({ titulo, descricao }) {
        const questionario = await questionariosModel.create({ titulo, descricao, perguntas })
        return questionario
    }

    async deleteQuestionario(id) {
        const questionario = await questionariosModel.destroy({ where: { id } })
        return questionario
    }

    async updateQuestionario(id, { titulo, descricao }) {
        const questionario = await questionariosModel.update({ titulo, descricao }, { where: { id } })
        return questionario
    }
}

module.exports = new QuestionariosServices()