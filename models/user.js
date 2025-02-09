'use strict';
const {
  Model
} = require('sequelize');
const { validate } = require('uuid');
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
    mkid: DataTypes.INTEGER,
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
    cegian: DataTypes.BOOLEAN,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    roll: DataTypes.STRING,
    salt: DataTypes.STRING,
    vsaltTime: DataTypes.DATE,
    vsalt: DataTypes.STRING,
    balance:{
      type: DataTypes.DOUBLE,
      defaultValue: 100000.0,
    },
    profit:{
      type: DataTypes.DOUBLE,
      defaultValue: 0.0,
      validate:{
        min: 0.1,
      },
      check: {
        priceGreaterThanZero: {
          args: [0],
          msg: 'Price must be greater than zero',
        },
      },
    }
  }, {
    sequelize,
    modelName: 'kUser23',
  });
  return kUser23;
};
