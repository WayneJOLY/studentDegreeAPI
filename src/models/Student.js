const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Student = sequelize.define('student', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //degreeID:
});

module.exports = Student;