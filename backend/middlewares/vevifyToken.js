const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
  const Authorization = req.header("authorization");
  if (!Authorization) {
    res.json("Please register !");
  }
  const token = Authorization.replace("Bearer ", "");
  const { userId } = jwt.verify(token, process.env.SECRET);
  req.user = userId;
  next();
};

module.exports = verifyToken;
