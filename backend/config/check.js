const jwt = require("jsonwebtoken");
const dotenv = require("dotenv"); // If you haven't required dotenv yet

// Load environment variables
dotenv.config();

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTNlYmUyNzE0MTQ2MmNkNWEyOGJjZiIsImlhdCI6MTcyMDk3NjY3OSwiZXhwIjoxNzI2MTYwNjc5fQ.pcKxCPM7nu_EPi8Yj4UX0IPrfRqs25IrgXSGnK8Sv3E";

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);
} catch (error) {
  console.error("Token verification failed:", error.message);
}
