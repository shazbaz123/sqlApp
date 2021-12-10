const sequelize = require('../db/connection.js');
const { DataTypes } = require('sequelize');

const movie = sequelize.define('Movie',{
    // movie_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actor: {
        type: DataTypes.STRING
    }
});

const actor = sequelize.define('Actor',{
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actor: {
        type: DataTypes.STRING
    }
});

module.exports = movie;