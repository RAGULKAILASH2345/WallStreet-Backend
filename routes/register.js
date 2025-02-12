const router = require("express").Router();
const user = require("../controllers/register");
const stocks = require("../controllers/stocks");
router.post("/register", user.register, stocks.addStock);
router.post("/login", user.login);
router.post("/checkregister", user.checkRegister);

module.exports = router;