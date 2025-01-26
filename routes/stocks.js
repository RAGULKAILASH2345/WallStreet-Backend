const router = require("express").Router();

const authMiddleware = require("../middleware/tokenAuth");

const stocks = require("../controllers/stocks");

router.get(
	"/",
	authMiddleware.tokenAuth,
	stocks.getWallet,
)
module.exports = router;
