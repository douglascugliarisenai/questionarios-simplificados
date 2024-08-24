const Sequelize = require('sequelize')
const connection = require("../connection");


const Perguntas = connection.define('perguntas', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionarioId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: 'questionarios',
            key: 'id'
        },
        onUpdate: 'CASCADE', // vai atualizar esse campo caso o id do questionario seja atualizado  
        onDelete: 'CASCADE' // vai apagar o item caso questionário seja deletado
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

module.exports = Perguntas