'use strict';

const db = require('../index');
const DataTypes = db.Sequelize;

const Campus = db.define('campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

Campus.prototype.getStudents = () => [
  db.model('student').findAll({
    where: {campusId: this.id}
  })
]

module.exports = Campus;
