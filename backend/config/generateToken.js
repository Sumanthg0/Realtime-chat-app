const jwt = require("jsonwebtoken");

const genericToken = (id) => {
  console.log(`${process.env.JWT_SECRET}`);
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "60d",
  });
};
module.exports = genericToken;
