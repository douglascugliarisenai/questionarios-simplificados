const usuariosServices = require('./usuarios.services')

class UsuariosControllers {

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @returns 
     */
    async index(req, res) {
        try {
            const usuarios = await usuariosServices.listUsers()
            return res.status(200).json(usuarios)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }

    }

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @returns 
     */
    async create(req, res) {
        try {
            const body = req.body
            const usuario = await usuariosServices.createUser(body)

            if (usuario.message) {
                return res.status(409).json(usuario)
            }

            return res.status(201).json({ message: "Usuario criado com sucesso", usuario })

        } catch (error) {
            return res.status(500).json({ message: error.message })
        }

    }

    /**
     * 
     * @param {import("express").Request} req 
     * @param {import("express").Response} res 
     * @returns 
     */
    async delete(request, response) {
        try {
            const { id } = request.params
            const apagou = await usuariosServices.deleteUser(id)

            if (apagou.message) {
                return response.status(400).json({ message: "Não foi possivel apagar" })
            }

            return response.status(204).end()
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    /**
  * 
  * @param {import("express").Request} req 
  * @param {import("express").Response} res 
  * @returns 
  */
    async update(request, response) {
        try {
            const { id } = request.params
            const body = request.body

            const usuario = await usuariosServices.updateUser({ id, ...body })

            if (usuario.message) {
                return response.status(400).json({ message: "Não foi possivel atualizar" })
            }

            return response.status(200).json({ message: "Usuario atualizado com sucesso", usuario })
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }
}

module.exports = new UsuariosControllers()