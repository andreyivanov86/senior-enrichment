'use strict';

const db = require('../index');
const DataTypes = db.Sequelize;

const Student = db.define('student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Student;
