'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.addColumn('usuarios', 'role', {
      type: Sequelize.STRING,
      after: 'sobrenome'
    })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('usuarios', 'role')
  }
};
