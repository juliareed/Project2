<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
var Secret = sequelize.define('Secret', {
    secret: {
=======
var Sequelize = require("sequelize");

var sequelize = require("../models/connections.js");

module.exports = function(sequelize, DataTypes) {

var Secrets = sequelize.define('secrets', {
    secrets: {
>>>>>>> d333d3782b6baecf3a31acf0c1b2f3dad4257b89
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
    }
    },
<<<<<<< HEAD
    comment: {
=======
    comments: {
>>>>>>> d333d3782b6baecf3a31acf0c1b2f3dad4257b89
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.DECIMAL,
    },
    latitude: {
      type: DataTypes.DECIMAL,
    }
  });
<<<<<<< HEAD
  return Secret;
}
=======

var users = sequelize.define('users', {
  name:{
    type: DataTypes.STRING
  }
});

users.belongsToMany(Secrets, {
  through: 'id',
  foreignKey: 'id'
});
};

module.exports = Secrets;
>>>>>>> d333d3782b6baecf3a31acf0c1b2f3dad4257b89
