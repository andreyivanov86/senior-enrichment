'use strict';

const db = require('../index');
const DataTypes = db.Sequelize;

const Campus = db.define('campus', {
  name: {
    type: DataTypes.STRING(1e4),
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING(),
    allowNull: true
  }
});

module.exports = Campus;
