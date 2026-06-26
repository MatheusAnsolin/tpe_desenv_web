const { Sequelize } = require('sequelize');
const path = require('path');

const dbFile = process.env.DATABASE_FILE || path.join(__dirname, '..', 'data', 'database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbFile,
  logging: false
});

const User = require('./User')(sequelize);
const Projeto = require('./Projeto')(sequelize);

// associações (se precisar)
module.exports = { sequelize, User, Projeto };