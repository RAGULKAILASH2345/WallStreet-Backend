const router = require("express").Router();

const authMiddleware = require("../middleware/tokenAuth");

const profile = require("../controllers/profile");

router.get(
	"/",
	authMiddleware.tokenAuth,
	profile.getProfile,
)
module.exports = router;
