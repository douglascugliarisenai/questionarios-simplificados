class RespostasControllers {
    async index(request, response) {
        const respostas = await respostasServices.listRespostas()
        return response.status(200).json(respostas)
    }

    async createResposta(request, response) {
        try {
            const body = request.body
            const { perguntaId } = request.params
            const { id } = request.usuario

            const resposta = await respostasServices.createResposta({ 
                ...body,
                perguntaId,
                usuarioId: id
            })

            return response.status(201).json({ message: "Resposta criada com sucesso", resposta })    
            
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
        
    }

    async deleteResposta(request, response) {
        const { id } = request.params
        const apagou = await respostasServices.deleteResposta({ id })

        if (!apagou) {
            return response.status(400).json({ message: "Não foi possivel apagar" })
        }   

        return response.status(204).end()
    }

    async updateResposta(request, response) {
        const { id } = request.params
        const body = request.body
        const resposta = await respostasServices.updateResposta({ id, ...body })

        return response.status(200).json({ message: "Resposta atualizada com sucesso", resposta })
    }
}

module.exports = new RespostasControllers()