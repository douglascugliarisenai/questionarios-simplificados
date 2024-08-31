const usuariosServices = require("./usuarios.services")

const usuariosServices = new UsuariosServices()

class UsuariosControllers {
    index(req, res) {
        const usuarios = usuariosServices.listUsers()
        return res.status(200).json(usuarios)
    }

    create(req, res) {
        const body = req.body

        const usuario = usuariosServices.createUser(body)

        return res.status(201).json(usuario)
    }

    delete(request, response) {
        const { id } = request.params
        const apagou = usuarioService.delete(id)
        
        if(!apagou) {
            return response.status(400).json({ message: "Não foi possivel apagar"})
        }

        return response.status(204).end()
    }
}

module.exports = UsuariosControllers