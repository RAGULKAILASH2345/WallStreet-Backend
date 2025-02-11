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

		console.time('check wallet');
		const stockData = await stocks.findOne({
			where: {
				email: email,
			},
		});
		console.timeEnd('check wallet');

		if (stockData) {
			return res.sendStatus(200);
		}
		else {
			console.time('create wallet');
			stocks.create({
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
			}).then(() => {
				console.timeEnd('create wallet');
				return res.status(200).send({
					state: "Registered Succesfully"
				})
			}).catch((err) => {
				console.timeEnd('create wallet');
				console.error(err);
				return res.sendStatus(500);
			})
		}
	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Server Error. Try again.", gh: 'con' });
	}
}

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
				message: "User details not found."
			});
		}

		const stockData = await stocks.findOne({
			where: {
				email,
			},
		});

		if (stockData) {
			return res.send(stockData);
		}
		else {
			return res.status(404).send({
				message: "User details not found",
			});
		}

	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Server Error. Try again.", gh: 'con' });
	}
}


const buyStock = async (req, res) => {
	try {
	  const { email } = req.user;
	  const column = req.params.column;
	  const value = parseFloat(req.params.value);
	  const nos = parseInt(req.params.nos, 10);
  
	  if (isNaN(nos) || nos <= 0) {
		return res.status(403).send({
		  message: "Invalid Number of Stocks"
		});
	  }
  
	  const user = await users.findOne({ where: { email } });
	  if (!user) {
		return res.status(404).send({ message: "User details not found." });
	  }
  
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
		  number: nos,
		});
		return res.status(200).send({ message: "Transaction success" });
	  } else {
		return res.status(404).send({ message: "Stock update failed" });
	  }
	} catch (error) {
	  console.error(error);
	  return res.status(500).send({ message: "Server Error. Try again." });
	}
  };
  

const sellStock = async (req, res) => {
	try {
		const hour = new Date().getHours();
		if ( hour > 16 || hour < 9 ){
			return res.status(403).send({
				message: "Market is Closed!"
			});
		}
		const { email } = req.user;
		const  column  = req.params.column;
		const  value  = req.params.value;
		const  nos = req.params.nos;
		if (nos < 0) {
			return res.status(403).send({
				message: "Invalid Number of Stocks"
			});
		}

		if(value != graph[index][column][5]){
			return res.status(403).send({
				message: "Suprise Mothafucka"
			});
		}
		const user = await users.findOne({
			where: {
				email,
			},
		});

		if (!user) {
			return res.status(404).send({
				message: "User details not found."
			});
		}

		const stockData = await sequelize.query(
			`UPDATE stocks SET "${column}"="${column}" - ${nos}, "Wallet"="Wallet"+${nos}*${value} WHERE email='${email}'`,
			{
				nest: true,
				type: Sequelize.QueryTypes.UPDATE
			}
		);

//		const stockData = await stocks.update({
//			[column]: sequelize.literal(`${column} - ${nos}`),
//			Wallet : sequelize.literal(`Wallet + ${nos}*${value}`)
//		},{
//			where: {
//				email,
//			},
//		});

		if (stockData) {
			transactions.create({
				email: email,
				company: column,
				flag: "Sold",
				number: nos,
			})
			return res.status(200).send({message:"transaction success"});
		}
		else {
			return res.status(404).send({
				message: "User details not found",
			});
		}

	} catch (error) {
		console.error(error);
		return res.status(500).send({ message: "Server Error. Try again.", gh: 'con' });
	}
}

module.exports = {
	getWallet,
	checkUser,
	buyStock,
	sellStock,
};
