const express = require("express");

const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMIddleware = require("../middewares/adminMIddleware");
const authMiddleware = require("../middewares/authMiddleware");

const router = express.Router();

router.get(
  "/donar-list",
  authMiddleware,
  adminMIddleware,
  getDonarsListController
);

//GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddleware,
  adminMIddleware,
  getHospitalListController
);
//GET || ORG LIST
router.get("/org-list", authMiddleware, adminMIddleware, getOrgListController);
// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMIddleware,
  deleteDonarController
);
module.exports = router;
