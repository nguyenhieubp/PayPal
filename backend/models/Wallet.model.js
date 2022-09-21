const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WalletSchema = new Schema({
  money: {
    type: Number,
    default: 0,
  },
  User: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Wallet", WalletSchema);
