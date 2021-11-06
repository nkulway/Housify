'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [{
      name: 'Annie',
      email: 'ajeasley@nasa.gov',
      age: '28',
      createdAt: new Date(),
      updatedAt: new Date()
  },], {})
},
  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Members', null, {});

  }
};
