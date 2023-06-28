const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../src/db');

const CadastroModel = db.define('Cadastro',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      },
      telefone:{
        type: DataTypes.STRING,
        allowNull:true
      }
},{
    timestamps: true,
    tableName:'cadastro'
});


module.exports = CadastroModel;