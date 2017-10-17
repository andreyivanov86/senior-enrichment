'use strict';

const db = require('../index');
const DataTypes = db.Sequelize;

const Student = db.define('student', {
  name: {
    type: DataTypes.STRING(1e4),
    allowNull: false,
  }
});

module.exports = Student;
