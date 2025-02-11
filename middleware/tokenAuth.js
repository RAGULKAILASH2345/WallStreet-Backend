// require("dotenv").config();

const jwt = require("jsonwebtoken");

// const stocks = require("../models").stocks;

const users = require("../models").kUser23;

const tokenAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token,process.env.JWTSECRET);

    let tokenPayload;
    try {
      tokenPayload = jwt.verify(token, process.env.JWTSECRET);
    } catch (error) {
      return res.status(401).send({
        message: error.name + ": " + error.message,
      });
    }
	console.log(tokenPayload)
    if (!tokenPayload.id) {
      return res.status(400).send({
        message: "Invalid token.",
      });
    }

    const user = await users.findOne({
      where: {
        kid: tokenPayload.id,
      },
	  
    });

    if (!user) {
      return res.status(403).send({
        message: "User details not found.",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Server Error. Try again.",
      gh: "token",
    });
  }
};

module.exports = {
  tokenAuth,
};
