const router = require("express").Router();
const user = require("../controllers/register");

router.post("/register", user.register);
router.post("/login", user.login);

module.exports = router;
