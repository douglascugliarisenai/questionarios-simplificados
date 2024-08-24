const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database.config')[process.env.NODE_ENV || 'development'];

const connection = new Sequelize(databaseConfig)
  

module.exports = connection;