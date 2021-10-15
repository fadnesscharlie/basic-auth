"use strict";

// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE_URL);

const users = (sequelize, DataTypes) =>
  sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = users;
