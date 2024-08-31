const PerguntasModel = require("../../database/models/perguntas")
const QuestionariosModel = require("../../database/models/questionarios")
class QuestionariosServices {

    async createQuestionario({ titulo, descricao, perguntas }) {
        const questionario = await QuestionariosModel.create({
            titulo,
            descricao,
            perguntas
        },{
                include: [
                    {
                        model: PerguntasModel,
                        as: "perguntas"
                    }
                ]
            });

        return questionario;
    }

    async listQuestionarios() {
        const questionarios = await QuestionariosModel.findAll({
            include: [
                {
                    model: PerguntasModel,
                    as: "perguntas",
                }
            ]
        })

        if(!questionarios) {
            return null
        }
        
        return questionarios
    }

    async deleteQuestionario(id) {
        const questionario = await QuestionariosModel.destroy({ where: { id } })
        return questionario
    }

    async updateQuestionario(id, { titulo, descricao }) {
        const questionario = await QuestionariosModel.update({ titulo, descricao }, { where: { id } })
        return questionario
    }
}

module.exports = new QuestionariosServices()