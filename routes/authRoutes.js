const express = require("express");
const { registerController } = require("../controllers/authController");
const { loginController } = require("../controllers/authController");

const { currentUserController } = require("../controllers/authController");
const authMiddleware = require("../middewares/authMiddleware");

// const {
//   registerController,
//   loginController,
//   currentUserController,
// } = require("../controllers/authController");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

// //GET CURRENT USER || GET
router.get("/current-user", authMiddleware, currentUserController);

module.exports = router;
