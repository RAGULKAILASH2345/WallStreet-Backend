// const { col } = require("sequelize/types");
// const { sequelize } = require("../models");
const Sequelize = require("sequelize");
const { sequelize } = require("../models");

const stocks = require("../models").stocks;
const users = require("../models").kUser23;
const transactions = require("../models").transactions;
const graph = require("../data/graph.json");
// const Members = require("../models").Members;

const checkUser = async (req, res) => {
  try {
    const { email } = req.user;

    console.time("check wallet");
    const stockData = await stocks.findOne({
      where: {
        email: email,
      },
    });
    console.timeEnd("check wallet");

    if (stockData) {
      return res.sendStatus(200);
    } else {
      console.time("create wallet");
      stocks
        .create({
          email: email,
          Aquashop: 0,
          RazerElectronics: 0,
          BVInfra: 0,
          GoalEnterprise: 0,
          MedPharma: 0,
          Paradigm: 0,
          VIFinance: 0,
          ForgeTech: 0,
          Wallet: 100000,
        })
        .then(() => {
          console.timeEnd("create wallet");
          return res.status(200).send({
            state: "Registered Successfully",
          });
        })
        .catch((err) => {
          console.timeEnd("create wallet");
          console.error(err);
          return res.sendStatus(500);
        });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Server Error. Try again.", gh: "con" });
  }
};
const addStock = async (req, res) => {
  try {
    const email = req.body.email;

    console.time("create wallet");
    await stocks.create({
      email: email,
      QuantumCoreSystems: 0,
      NeonByteTechnologies: 0,
      HyperNovaSystems: 0,
      SkyNetRobotics: 0,
      TitanSportswear: 0,
      ProBallEquipment: 0,
      StrikeForceSports: 0,
      ZenithMotors: 0,
      OrionAutoTech: 0,
      VoltEdgeMotors: 0,
      TitanXAutomobiles: 0,
      StellarBank: 0,
      EverTrustFinancial: 0,
      NovaCapitalHoldings: 0,
      QuantumPay: 0,
      SwiftCart: 0,
      NeoWearFashion: 0,
      HorizonMart: 0,
      BuySmartRetail: 0,
      BioVantaPharmaceuticals: 0,
      MedexGenLabs: 0,
      NeuroSynBiotech: 0,
      GenovaHealth: 0,
      HorizonTechInnovations: 0,
      Wallet: 100000,
      profit: 0,
    });

    console.timeEnd("create wallet");
    return res.status(200).send({
      message: "User Registered Successfully and stock record created",
    });
  } catch (error) {
    console.timeEnd("create wallet");
    console.error("Error creating stock record:", error);
    return res.status(500).send({ message: "Server Error. Try again." });
  }
};

const getWallet = async (req, res) => {
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

    const stockData = await stocks.findOne({
      where: {
        email,
      },
    });

    if (stockData) {
      return res.send(stockData);
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

const buyStock = async (req, res) => {
  try {
    const { email } = req.user;
    const description = req.body.desc;
    const column = req.params.column;
    const value = parseFloat(req.params.value);
    const nos = parseInt(req.params.nos, 10);

    const stockPurchaseAmount = value * nos;

    if (isNaN(nos) || nos <= 0) {
      return res.status(403).send({
        message: "Invalid Number of Stocks",
      });
    }

    const user = await users.findOne({ where: { email } });
    if (!user) {
      return res.status(400).send({ message: "User details not found." });
    }

    const sold = await transactions.findOne({
      where: { email: email, company: column, flag: "Sold" },
    });

    if (sold) {
      return res
        .status(403)
        .send({ message: "Stock already sold! Look out for other stocks!" });
    }

    const balance = await stocks.findOne({
      where: { email },
      attributes: ["Wallet"],
      raw: true,
    });
    if (balance.Wallet >= stockPurchaseAmount) {
      const stockData = await sequelize.query(
        `UPDATE stocks SET "${column}" = "${column}" + :nos, "Wallet" = "Wallet" - :nos * :value WHERE email = :email`,
        {
          replacements: { nos, value, email },
          nest: true,
          type: Sequelize.QueryTypes.UPDATE,
        }
      );

      if (stockData) {
        transactions.create({
          email: email,
          company: column,
          flag: "Bought",
          amount: nos * value,
          noOfStocks: nos,
          description: description,
        });
        return res.status(200).send({ message: "Transaction success" });
      } else {
        return res.status(404).send({ message: "Stock update failed" });
      }
    } else {
      return res.status(404).send({ message: "Insufficient Balance" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error. Try again." });
  }
};

const sellStock = async (req, res) => {
  try {
    const { email } = req.user;
    const column = req.params.column;
    const description = req.body.desc;
    const value = parseFloat(req.params.value);
    const nos = parseInt(req.params.nos, 10);
    if (nos < 0) {
      return res.status(403).send({
        message: "Invalid Number of Stocks",
      });
    }

    if (isNaN(nos) || nos <= 0) {
      return res.status(403).send({
        message: "Invalid Number of Stocks",
      });
    }
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

    const purchasedStocks = await stocks.findOne({
      where: { email },
      attributes: [column],
      raw: true,
    });

    if (purchasedStocks?.[column] >= nos) {
      const purchasedPrice = await transactions.findOne({
        where: {
          email: email,
          company: column,
          flag: "Bought",
        },
        attributes: ["amount"],
        raw: true,
      });

      const sellAmount = nos * value;

      if (sellAmount > purchasedPrice.amount) {
        const excess = sellAmount - purchasedPrice.amount;
        const stockData = await sequelize.query(
          `UPDATE stocks SET "${column}"="${column}" - :nos, "Wallet"="Wallet"+${purchasedPrice.amount}, "profit" = "profit" + ${excess} WHERE email='${email}'`,
          {
            replacements: { nos },
            nest: true,
            type: Sequelize.QueryTypes.UPDATE,
          }
        );
        if (stockData) {
          transactions.create({
            email: email,
            company: column,
            description: description,
            flag: "Sold",
            noOfStocks: nos,
            amount: nos * value,
          });
          return res.status(200).send({ message: "transaction success" });
        } else {
          return res.status(404).send({
            message: "User details not found",
          });
        }
      } else {
        let diff = purchasedPrice.amount - sellAmount;
        const profit = await stocks.findOne({
          where: { email },
          attributes: ["profit"],
          raw: true,
        });
        if (profit.profit < diff) {
          diff = diff - profit.profit;
          const stockData = await sequelize.query(
            `UPDATE stocks SET "${column}"="${column}" - :nos, "Wallet"="Wallet"+${purchasedPrice.amount}-${diff}, "profit" = 0 WHERE email='${email}'`,
            {
              replacements: { nos },
              nest: true,
              type: Sequelize.QueryTypes.UPDATE,
            }
          );
          if (stockData) {
            transactions.create({
              email: email,
              company: column,
              description: description,
              flag: "Sold",
              noOfStocks: nos,
              amount: nos * value,
            });
            return res.status(200).send({ message: "transaction success" });
          } else {
            return res.status(404).send({
              message: "User details not found",
            });
          }
        } else {
          const stockData = await sequelize.query(
            `UPDATE stocks SET "${column}"="${column}" - ${nos}, "Wallet"="Wallet"+${purchasedPrice.amount}, "profit" = ${profit.profit} - ${diff} WHERE email='${email}'`,
            {
              nest: true,
              type: Sequelize.QueryTypes.UPDATE,
            }
          );
          if (stockData) {
            transactions.create({
              email: email,
              company: column,
              description: description,
              flag: "Sold",
              noOfStocks: nos,
            });
            return res.status(200).send({ message: "transaction success" });
          } else {
            return res.status(404).send({
              message: "User details not found",
            });
          }
        }
      }

      // const stockData = await sequelize.query(
      //   `UPDATE stocks SET "${column}"="${column}" - ${nos}, "Wallet"="Wallet"+${nos}*${value} WHERE email='${email}'`,
      //   {
      //     nest: true,
      //     type: Sequelize.QueryTypes.UPDATE,
      //   }

      // );

      //		const stockData = await stocks.update({
      //			[column]: sequelize.literal(`${column} - ${nos}`),
      //			Wallet : sequelize.literal(`Wallet + ${nos}*${value}`)
      //		},{
      //			where: {
      //				email,
      //			},
      //		});

      // if (stockData) {
      //   transactions.create({
      //     email: email,
      //     company: column,
      //     description: description,
      //     flag: "Sold",
      //     noOfStocks: nos,
      //   });
      //   return res.status(200).send({ message: "transaction success" });
      // } else {
      //   return res.status(404).send({
      //     message: "User details not found",
      //   });
      // }
    } else {
      return res.status(404).send({
        message: "You cannot sell more stocks than you own.",
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
  getWallet,
  checkUser,
  buyStock,
  sellStock,
  addStock,
};
