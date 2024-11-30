const express = require("express");
const {
  createOrUpdateReport,
  getAllReports,
  getReportsByItem,
  deleteReport,
  deleteReportsByItem,
} = require("../controllers/report");
const router = express.Router();

router.post("/create-or-update-report", createOrUpdateReport);
router.get("/get-all-reports", getAllReports);
router.get("/get-all-reports:reportedItemId/:itemType", getReportsByItem);
router.delete("/get-all-reports/:id", deleteReport);
router.delete("/get-reports-by-item/:reportedItemId/:itemType", deleteReportsByItem);

module.exports = router;
