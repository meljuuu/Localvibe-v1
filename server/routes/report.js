const express = require("express");
const { reportContent, getAllReports, deleteReport } = require("../controllers/report");

const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

// Report routes
router.route("/report-content").post(isAuthenticatedUser, reportContent); // Report a post or pin

// Admin route to get all reports
router.route("/get-all-reports").get(isAuthenticatedUser, getAllReports);

// Admin route to delete a report
router.route("/delete-report/:id").delete(isAuthenticatedUser, deleteReport);

module.exports = router;
