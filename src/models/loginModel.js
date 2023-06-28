const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../src/db');

const LoginModel = db.define('Login',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      },
},{
    timestamps: true,
    tableName:'login'
});


module.exports = LoginModel;