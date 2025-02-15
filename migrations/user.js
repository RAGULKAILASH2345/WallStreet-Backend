"use strict";
const { Model } = require("sequelize");
const { validate } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class kUser23 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  
  kUser23.init({
    kid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    mkid: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    phone: DataTypes.STRING,
    college: DataTypes.STRING,
    year: DataTypes.INTEGER,
    dept: DataTypes.STRING,
    pwdhash: DataTypes.STRING,
    // cegian: DataTypes.BOOLEAN,
    // city: DataTypes.STRING,
    // state: DataTypes.STRING,
    roll: DataTypes.STRING,
    salt: DataTypes.STRING,
    vsaltTime: DataTypes.DATE,
    vsalt: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
  },
  updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
  }
  }, {
    sequelize,
    modelName: 'kUser23',
  });
  return kUser23;
};
