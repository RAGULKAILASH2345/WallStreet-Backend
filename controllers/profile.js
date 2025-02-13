const { sequelize } = require("../models");
const stocks = require("../models").stocks;
const users = require("../models").kUser23;
const transactions = require("../models").transactions;

const getHistory = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await users.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).send({
        message: "User details not found.",
      });
    }

    const historyData = await transactions.findAll({
      where: {
        email: email,
      },
      order: [["createdAt", "DESC"]],
    });

    if (historyData) {
      return res
        .status(200)
        .send({ message: "history successfully fetched", historyData });
    } else {
      return res.status(404).send({
        message: "User details not found",
      });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Server Error. Try again.", gh: "con" });
  }
};

const getProfile = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await users.findOne({
      where: {
        email,
      },
      attributes: [
        ["mkid", "K! ID"],
        ["firstname", "Name"],
        ["email", "Email"],
        ["dept", "Department"],
        ["college", "College"],
      ],
    });

    if (!user) {
      return res.status(404).send({
        message: "User details not found.",
      });
    }
    console.log("user details:", user);
    // res.status(200).send({
    //   message: "user profile details fetched successfully",
    //   data: user,
    // });
    let stockData = await stocks.findOne({
      where: {
        email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "email", "profit"],
      },
    });
    console.log(stockData);

    if (stockData) {
      const walletBalance = stockData.Wallet;
      stockData = { ...stockData.dataValues };
      delete stockData.Wallet;

      const profile = {
        userTable: { ...user.dataValues, Wallet: walletBalance },
        stockTable: stockData,
      };

      res.status(200).send({
        message: "User profile details fetched successfully",
        profile,
      });
    } else {
      return res.status(404).send({
        message: "User details not found",
      });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Server Error. Try again.", gh: "con" });
  }
};

module.exports = {
  getProfile,
  getHistory,
};
