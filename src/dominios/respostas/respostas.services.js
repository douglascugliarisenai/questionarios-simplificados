const RespostaModel = require("../../database/models/respostas")

class RespostasServices {
    async listRespostas() {
        const respostas = await RespostaModel.findAll()
        return respostas
    }

    async createResposta({ conteudo, perguntaId, usuarioId }) {
        const resposta = await RespostaModel.create({ 
            conteudo,
            perguntaId,
            usuarioId
         })

        return resposta
    }

    async deleteResposta({ id }) {
        const resposta = await RespostaModel.findByPk({ where: { id } })

        if (!resposta) {
            return {
                message: "Resposta não encontrada"
            }
        }
        await RespostaModel.destroy({ where: { id } })
        
        return {
            message: "Resposta apagada com sucesso"
        }
    }

    async updateResposta({ id, ...body }) {
        const resposta = await RespostaModel.update({ ...body }, { where: { id } })
        return resposta
    }
}   

module.exports = new RespostasServices()