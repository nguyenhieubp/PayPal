const express = require("express");
const router = express.Router();
const controllerAuth = require("../controllers/auth.controller");
const checkCurrentUser = require("../middlewares/checkCurrentUser");
router.post("/register", controllerAuth.register);
router.post("/login", controllerAuth.login);
router.post("/userCurrent", checkCurrentUser, controllerAuth.checkCurrentUser);

module.exports = router;
