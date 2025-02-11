const router = require("express").Router();

const authMiddleware = require("../middleware/tokenAuth");

const stocks = require("../controllers/stocks");

router.post(
	"/:column/:value/:nos/",
	authMiddleware.tokenAuth,
	stocks.sellStock,
)
module.exports = router;
