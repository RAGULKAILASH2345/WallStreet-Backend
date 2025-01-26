const router = require("express").Router();

const { getStocks } = require("../controllers/dataDump");
const { adminQueryCreds } = require("../middleware/admin");

router.get(
	"/getStocks",
	adminQueryCreds,	
	getStocks,
);

module.exports = router;

