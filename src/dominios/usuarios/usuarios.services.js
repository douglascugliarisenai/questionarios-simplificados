const {v4: uuid} = require("uuid")

var usuarios = [
    { id: 1, nome: "João da Silva", email: "yXU6x@example.com", senha: "123456" },
    { id: 2, nome: "Maria da Silva", email: "g9zQo@example.com", senha: "123456" },
    { id: 3, nome: "Jose da Silva", email: "yXU6x@example.com", senha: "123456" }
]

class UsuariosServices {

    createUser(usuarioDTO) {
       const usuarioExiste = usuariosServices.findByEmail(usuarioDTO.email)

       if (usuarioExiste) {
           return res.status(400).json({
               message: "Email ja existe"
           })
       }

       const novoUsuario = {
           id: uuid(),
           ...usuarioDTO
       }
       usuarios.push(novoUsuario)
       return novoUsuario
    }

    listUsers() {
        return usuarios
    }

    updateUser({ id, nome, email, senha }) {
        const index = usuarios.findIndex(u => u.id == id)
        const novoUsuario = {
            id,
            nome,
            email,
            senha
        }
        usuarios[index] = novoUsuario
        return novoUsuario
    }

    deleteUser({ id }) {
        const usuarioExiste = usuarios.find(usuario => usuario.id === id)

        if(!usuarioExiste) {
            return false
        }
        return true
    }
}

module.exports = UsuariosServices