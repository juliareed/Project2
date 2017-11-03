var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var Secrets = sequelize.define('secrets', {
    secrets: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
    }
    },
    comments: {
      type: Sequelize.STRING,
    },
    longitude: {
      type: Sequelize.DECIMAL,
    },
    latitude: {
      type: Sequelize.DECIMAL,
    }


  });

users.belongsToMany(secrets, {
  through: 'id',
  foreignKey: 'id'
});

secrets_db.sync();

module.exports = Secrets;