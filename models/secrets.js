module.exports = function(sequelize, DataTypes) {
var Secret = sequelize.define('Secret', {
    secret: {
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
  return Secret;
}
