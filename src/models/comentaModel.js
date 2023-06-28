const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../src/db');

const ComentirioModel = db.define('Comentario',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    comentario: {
        type: DataTypes.STRING,
      },
},{
    timestamps: true,
    tableName:'comentario'
});


module.exports = ComentirioModel;