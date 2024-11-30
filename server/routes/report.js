const express = require("express");
const {
  createOrUpdateReport,
  getAllReports,
  getReportsByItem,
  deleteReport,
  deleteReportsByItem,
} = require("../controllers/report");
const router = express.Router();

router.post("/reports", createOrUpdateReport);
router.get("/reports", getAllReports);
router.get("/reports/:reportedItemId/:itemType", getReportsByItem);
router.delete("/reports/:id", deleteReport);
router.delete("/reports/item/:reportedItemId/:itemType", deleteReportsByItem);

module.exports = router;
