const router = require("express").Router();
const user = require("../controllers/register");

router.get("/", user.register);
module.exports = router;
