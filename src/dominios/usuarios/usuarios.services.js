const usuariosModel = require("../../database/models/usuarios")
const { hash } = require("bcrypt")

class UsuariosServices {

    async listUsers() {
        const usuarios = await usuariosModel.findAll({
            attributes: ["id", "nome", "sobrenome", "email","role", "createdAt", "updatedAt"],
        })
        return usuarios
    }

    async createUser({ email, nome, sobrenome, senha, role }) {
        const usuarioExiste = await usuariosModel.findOne({ where: { email: email } })

        if (usuarioExiste) {
            return {
                message: "Usuário já existe"
            }
        }

        const senhaCriptografada = await hash(senha, 8)

        const novoUsuarioCriado = await usuariosModel.create({
            email,
            nome,
            sobrenome,
            role,
            senha: senhaCriptografada
        })

        return novoUsuarioCriado
    }

    async updateUser(usuario) {
        const usuarioConsulta = usuariosModel.findByPk(usuario.id)

        if (!usuarioConsulta) {
            return {
                message: "Usuário não encontrado",
            }
        }

        const usuarioAtualizar = {
            id,
            nome,
            email,
            senha
        }

        const usuarioAtualizado = await usuarios.update(usuarioAtualizar, { where: { id } })

        return usuarioAtualizado
    }

    async deleteUser(id) {
        const usuarioExiste = await usuariosModel.findByPk(id)
        if (!usuarioExiste) {
            return {
                message: "Usuário não encontrado",
            }
        }

        const usuarioApagar = await usuariosModel.destroy({ where: { id } })

        return true;
    }
}

module.exports = new UsuariosServices()