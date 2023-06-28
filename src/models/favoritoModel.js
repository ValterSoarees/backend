const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../src/db');

const favoritoModel = db.define('Favoritos',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
},{
    timestamps: true,
    tableName:'favoritos'
});


module.exports = FavoritoModel;