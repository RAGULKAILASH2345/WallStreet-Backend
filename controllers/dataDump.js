const { dateForFilename } = require("../utils/dateFormatter");
const { sendCSV } = require("../utils/sendAttachment");

const stocks = require("../models").stocks;

const getStocks = async (req, res) => {
	try {
		const data = await stocks.findAll({
			attributes: {	// reduce data exported
				exclude: ["createdAt", "updatedAt"]
			},
			order: [["Wallet", "DESC"]],
			raw: true,	// omit metadata
		});

		sendCSV(res, "K23-WSW-Stocks-" + dateForFilename(), data);
		return;
	} catch (error) {
		console.error("getStocks");
		return res.status(500).send({ message: "Server Error. Try again." });
	}
}

module.exports = { getStocks };
