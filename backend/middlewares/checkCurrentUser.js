const jwt = require("jsonwebtoken");
const checkCurrentUser = (req, res, next) => {
  const Authorization = req.header("authorization");
  if (!Authorization) {
    req.user = null;
    return next();
  }
  const token = Authorization.replace("Bearer ", "");
  const { userId } = jwt.verify(token, process.env.SECRET);
  req.user = userId;
  next();
};

module.exports = checkCurrentUser;
