'use strict';
require("dotenv").config();
const fs = require('fs');
const path = require('path');
const  Sequelize  = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
// const stock = require(path.join(__dirname , "stocks.js"))
const db = {};

// console.log(stock)
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const Stock = sequelize.define('stocks',{
  email:{
      type:Sequelize.STRING,
      primaryKey:true
  },
  Aquashop: {
      type:Sequelize.INTEGER,
  },
  RazerElectronics: {
      type:Sequelize.INTEGER,
  },
  BVInfra: {
      type:Sequelize.INTEGER,
  },
  GoalEnterprise: {
      type:Sequelize.INTEGER,
  },
  MedPharma: {
      type:Sequelize.INTEGER,
  },
  Paradigm: {
      type:Sequelize.INTEGER,
  },
  VIFinance: {
      type:Sequelize.INTEGER,
  },
  ForgeTech: {
      type:Sequelize.INTEGER,
  },
  Wallet: {
      type:Sequelize.INTEGER,
  },
})

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     console.log(model)
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
