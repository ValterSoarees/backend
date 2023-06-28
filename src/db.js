const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('projeto-app', 'root', '123456', {
    dialect: 'mysql', host: 'localhost'
});

module.exports = dbSequelize;