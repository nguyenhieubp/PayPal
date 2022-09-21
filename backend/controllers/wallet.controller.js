const Wallet = require("../models/Wallet.model");
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
module.exports.getMoney = async (req, res, next) => {
  const { id } = req.params;
  try {
    const wallet = await Wallet.findById(id).populate("User", "name");
    res.status(300).json({ message: "SUCCESS", data: wallet });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports.createWallet = async (req, res) => {
  const idUser = req.user;
  const newWallet = new Wallet({
    money: 0,
    User: idUser,
  });
  try {
    await newWallet.save();
    res.status(200).json({ message: "SUCCESS", wallet: newWallet });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//ADD MONEY
module.exports.receiveMoney = async (req, res) => {
  const { id } = req.params;
  try {
    const wallet = await Wallet.findById(id).populate("User", "name");
    wallet.money = wallet.money + req.body.receive;
    await wallet.save();
    res.status(300).json({ message: "SUCCESS", wallet });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//MINUS MONEY
module.exports.minusMoney = async (req, res) => {
  const { id } = req.params;
  try {
    const wallet = await Wallet.findById(id).populate("User", "name");
    if (wallet.money < req.body.minus) {
      res.status(300).json({ message: "you don't have enough money" });
    } else {
      wallet.money = wallet.money - req.body.minus;
      await wallet.save();
      res.status(300).json({ message: "SUCCESS", wallet });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

//Send money
module.exports.sendMoney = async (req, res, next) => {
  const { send, take } = req.query;
  const numberMoneySend = req.body.numberMoneySend;
  try {
    const walletSend = await Wallet.findById(send);
    const walletTake = await Wallet.findById(take);
    if (send === take) {
      const err = {
        statusCode: 301,
        message: "you don't sent to me",
      };
      return next(err);
    }
    if (walletSend.money < numberMoneySend) {
      const err = {
        statusCode: 301,
        message: "you don't have enough money",
      };
      return next(err);
    }
    walletSend.money = walletSend.money - numberMoneySend;
    walletTake.money = walletTake.money + numberMoneySend;
    await walletSend.save();
    await walletTake.save();
    res.status(200).json({
      message: "SUCCESS",
      walletSend,
      walletTake,
      date: new Date(),
    });
  } catch (error) {
    res.status(400).json({ message: "Not find id wallet " });
  }
};

module.exports.getWalletUser = async (req, res) => {
  try {
    const idUser = req.user;
    const data = await Wallet.find({ User: idUser });
    res.status(200).json(data);
  } catch (error) {
    res.json("Not get wallet");
  }
};

module.exports.deleteWallet = async (req, res) => {
  const idUser = req.user;
  try {
    const user = await User.findById(idUser);
    if (bcrypt.compareSync(req.body.password, user.password)) {
      await Wallet.deleteOne({ _id: req.body.idWallet });
      res.status(200).json({ message: "DELETE SUCCESS" });
    } else {
      res.status(401).json({ message: "Password not matches !" });
    }
  } catch (error) {
    res.status(400).json({ message: "Register !" });
  }
};
