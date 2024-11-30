const express = require("express");
const {
  createOrUpdateReport,
  getAllReports,
  getReportsByItem,
  deleteReport,
  deleteReportsByItem,
} = require("../controllers/report");

const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/create-or-update-report").post(isAuthenticatedUser, createOrUpdateReport);
router.route("/get-all-reports").get(isAuthenticatedUser, getAllReports);
router.route("/get-all-reports:reportedItemId/:itemType").get(isAuthenticatedUser, getReportsByItem);
router.route("/get-all-reports/:id").delete(isAuthenticatedUser, deleteReport);
router.route("/get-reports-by-item/:reportedItemId/:itemType").delete(isAuthenticatedUser, deleteReportsByItem);

module.exports = router;
