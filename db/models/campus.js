'use strict';

const db = require('../index');
const DataTypes = db.Sequelize;

const Campus = db.define('campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      unique: true
    }
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Campus;
