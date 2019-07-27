const express = require("express");
const passport = require("../config/passport");
const {
  signup,
  login,
  logut,
  profile
} = require("../controllers/auth.controllers");
const router = express.Router();
const { verifyToken } = require("../config/jwt");
/* GET home page */
router.post("/signup", signup);
router.post("/login", passport.authenticate("local"), login);
router.get("/logout", logut);
router.get("/profile", verifyToken, profile);
module.exports = router;
