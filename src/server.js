const express = require("express")
const UsuariosControllers = require("./dominios/usuarios/usuarios.controllers")

const app = express()
app.use(express.json())

const usuariosControllers = new UsuariosControllers()

/** Rota para listagem de usuários */
app.get("/usuarios", usuariosControllers.index)

/** Rota para criar um novo usuario */
app.post("/usuarios", usuariosControllers.create)

/** Rota para deletar um usuario */
app.delete("/usuarios/:id", usuariosControllers.delete)

app.listen(3000, () => console.log("Server running at http://localhost:3000"))