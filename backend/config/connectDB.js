const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    // .connect(process.env.URL_DB)
    .connect("mongodb://localhost:27017")
    .then(() => {
      console.log("Succesfully Connected to the Mongodb Database");
    })
    .catch(() => {
      console.log("Error Connecting to the Mongodb Database");
    });
};

module.exports = connectDB;
