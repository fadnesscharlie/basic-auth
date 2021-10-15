'use strict';

require('dotenv').config();

const PORT = process.env.PORT ? process.env.PORT : 3000

const server = require('./src/server.js');

// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE_URL);

// sequelize.sync()
//   .then(() => {
//     server.start(PORT);
//   })


const { db } = require('./src/models/index.js');



db.sync()
  .then(() => {
    server.start(PORT);
  })
