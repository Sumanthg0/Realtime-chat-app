const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
module.exports = router;
