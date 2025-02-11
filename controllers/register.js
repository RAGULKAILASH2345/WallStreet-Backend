const Sequelize = require("sequelize");
const { sequelize } = require("../models");

const stocks = require("../models").stocks;
const users = require("../models").kUser23;


const register= async (req,res)=>{
    console.log(req.body);
try{
    const response =await users.create({

    })
}
catch(error)
{
    console.error("Error registering user:",err);
    res.status(500).send({message:"Internal server error",error:error});
}
}
module.exports = {
    register
};