const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    require: [true, "Please enter name"],
  },
  email: {
    type: String,
    require: [true, "Please enter email"],
    trim: true,
  },
  password: {
    type: String,
    require: [true, "Please enter password"],
    trim: true,
    minLength: [8, "password short"],
  },
});

UserSchema.pre("save", function (next) {
  user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    } else {
      user.password = hash;
      next();
    }
  });
});

module.exports = mongoose.model("User", UserSchema);
