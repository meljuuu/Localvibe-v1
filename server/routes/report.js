const express = require("express");
const { reportContent, getAllReports, deleteReport } = require("../controllers/report");

const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

// Report routesrouter.post("/report-content", (req, res, next) => {
  console.log("Report content route hit!");
  next(); // Call the controller function
});


// Admin route to get all reports
router.route("/get-all-reports").get(isAuthenticatedUser, getAllReports);

// Admin route to delete a report
router.route("/delete-report/:id").delete(isAuthenticatedUser, deleteReport);

module.exports = router;
