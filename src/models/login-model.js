"use strict";

let bcrypt = require('bcrypt')

const UserModel = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  
  user.beforeCreate((users, options) => {
    return bcrypt.hash(users.password, 5)
    .then(hashedPassword => {
      users.password = hashedPassword;
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







