const express = require("express");
const app = express();
app.use(express.json());

//CORS
const cors = require("cors");
app.use(cors());

//.ENV
require("dotenv").config();

//DB
const connectDB = require("./config/connectDB");
connectDB();

//Router
const routerAuth = require("./routers/auth.router");
const routerWallet = require("./routers/wallet.router");
app.use("/api/v1/auth", routerAuth);
app.use("/api/v1/wallet", routerWallet);

//CHECK ERROR
const { errorHandle } = require("./middlewares/errorHandle");
app.all("*", (req, res, next) => {
  const err = new Error("the route can not be found");
  err.statusCode = 404;
  next(err);
});
app.use(errorHandle);

//START BACKEND
const POST = process.env.POST;
app.listen(POST, () => {
  console.log("Backend-start");
});
