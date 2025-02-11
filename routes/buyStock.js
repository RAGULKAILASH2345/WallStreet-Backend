const router = require("express").Router();

const authMiddleware = require("../middleware/tokenAuth");

const stocks = require("../controllers/stocks");

router.get(
	"/buyStock/:column/:value/:nos/",
	authMiddleware.tokenAuth,
	stocks.buyStock,
)
module.exports = router;
