'use strict';
/** @type {import('sequelize-cli').Migration} */

const { DataTypes } = require('sequelize');
const { CUSTOMER_TABLE } = require('../models/customer.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: true,
      type: DataTypes.INTEGER,
      unique: true
    });
  },

  async down (queryInterface) {
    //await queryInterface.removeColumn(CUSTOMER_TABLE, 'role');
  }
};
