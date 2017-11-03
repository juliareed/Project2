var Sequelize = require("sequelize");

var sequelize = require("../models/connections.js");

module.exports = function(sequelize, DataTypes) {

var Secrets = sequelize.define('secrets', {
    secrets: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
    }
    },
    comments: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.DECIMAL,
    },
    latitude: {
      type: DataTypes.DECIMAL,
    }


  });

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