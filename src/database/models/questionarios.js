const Sequelize = require('sequelize')
const connection = require("../connection");
const Perguntas = require('./perguntas')

const Questionarios = connection.define('questionarios', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
})

Perguntas.belongsTo(Questionarios, {
  foreignKey: 'questionarioId',
  as: 'questionario'
});
Questionarios.hasMany(Perguntas, {
  foreignKey: 'questionarioId',
  as: 'perguntas'
});

module.exports = Questionarios