const express = require("express");
const router = express.Router();

//MIDDLEWARE
const verifyToken = require("../middlewares/vevifyToken");

//CONTROLLER
const controllerWallet = require("../controllers/wallet.controller");
router.post("/create/wallet", verifyToken, controllerWallet.createWallet);
router.get("/get/money/:id", verifyToken, controllerWallet.getMoney);
router.post("/receive/money/:id", verifyToken, controllerWallet.receiveMoney);
router.post("/minus/money/:id", verifyToken, controllerWallet.minusMoney);
router.post("/sendMoney", verifyToken, controllerWallet.sendMoney);
router.post("/getWallet/", verifyToken, controllerWallet.getWalletUser);
router.post("/deleteWallet/", verifyToken, controllerWallet.deleteWallet);

module.exports = router;
