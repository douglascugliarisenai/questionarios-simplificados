const usuariosModel = require("../../database/models/usuarios")
const {compare, hash} = require("bcrypt")
const { sign } = require("jsonwebtoken")


class LoginServices {
    async createLogin({email, senha}) {
        
        const usuario = await usuariosModel.findOne({ where: { email: email } })

        if (!usuario) {
            return {
                message: "Usuário não encontrado",
            }
        }

        const senhaCorreta = await compare(senha, usuario.senha)

        if (!senhaCorreta) {
            return {
                message: "Senha incorreta",
            }
        }

        const token = sign({ permissao: usuario.role }, process.env.JWT_SECRET, {
            subject: usuario.id,
            expiresIn: "1d"
        })

        return {
            usuario,
            token
        }
    }

}

module.exports = new LoginServices()