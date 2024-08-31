const  {Router} = require('express')
const usuarioController = require('../dominios/usuarios/usuarios.controllers')

const usuarioRoutes = new Router()

usuarioRoutes.post('/', usuarioController.create);
usuarioRoutes.get('/', usuarioController.index);
usuarioRoutes.delete('/:id', usuarioController.delete);


module.exports = usuarioRoutes