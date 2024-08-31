class RespostasServices {
    async listRespostas() {
        const respostas = await Resposta.findAll()
        return respostas
    }

    async createResposta({ conteudo, perguntaId, usuarioId }) {
        const resposta = await Resposta.create({ 
            conteudo,
            perguntaId,
            usuarioId
         })

        return resposta
    }

    async deleteResposta({ id }) {
        const resposta = await Resposta.findByPk({ where: { id } })

        if (!resposta) {
            return {
                message: "Resposta não encontrada"
            }
        }
        await Resposta.destroy({ where: { id } })
        
        return {
            message: "Resposta apagada com sucesso"
        }
    }

    async updateResposta({ id, ...body }) {
        const resposta = await Resposta.update({ ...body }, { where: { id } })
        return resposta
    }
}   

module.exports = new RespostasServices()