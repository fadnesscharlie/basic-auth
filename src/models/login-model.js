"use strict";

// const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE_URL);



const UserModel = (sequelize, DataTypes) => {
  user = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  users.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 5)
    .then(hashedPassword => {
      user.password = hashedPassword;
    })
  })
  return user;
}

module.exports = UserModel;
// modularization
/* 

before create is a middle
add beforeCreate before here
grab the password, hash it, then send it
*/

// const users = (sequelize, DataTypes) =>
//   sequelize.define("User", {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
// });

// module.exports = users;







