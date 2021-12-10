// bring in .env environment variable with connection uri
require('dotenv').config();
// Sequelize is promised-based Node.js Object Relational Mapping tool
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate();

module.exports = sequelize;