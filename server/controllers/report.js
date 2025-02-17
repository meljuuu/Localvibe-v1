const Report = require("../models/ReportModel"); // Assuming you have created ReportModel
const Post = require("../models/PostModel");
const Pin = require("../models/PinModel"); // Assuming PinModel exists
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Report a post or pin
exports.reportContent = catchAsyncErrors(async (req, res, next) => {
  try {
    const { userId, postId, pinId, reason } = req.body;

    // Determine whether the report is for a post or pin
    let reportedContent;
    if (postId) {
      reportedContent = await Post.findById(postId);
    } else if (pinId) {
      reportedContent = await Pin.findById(pinId);
    } else {
      return next(new ErrorHandler("No postId or pinId provided", 400));
    }

    if (!reportedContent) {
      return next(new ErrorHandler("Content not found", 404));
    }

    // Check if the user has already reported this content
    const existingReport = await Report.findOne({
      userId,
      reportedItemId: postId || pinId, // Change to general `reportedItemId`
      itemType: postId ? "post" : "pin", // Specify item type (post or pin)
    });

    if (existingReport) {
      return res.status(400).json({
        success: false,
        message: "You have already reported this content",
      });
    }

    // Create a new report
    const newReport = new Report({
      userId,
      reportedItemId: postId || pinId, // Store either postId or pinId
      itemType: postId ? "post" : "pin", // Specify item type (post or pin)
      reason,
      reportDate: Date.now(), // Store the report date
      reportCount: 1, // Initial count of 1
    });

    await newReport.save();

    res.status(201).json({
      success: true,
      message: "Content reported successfully",
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});

// Get all reports
exports.getAllReports = catchAsyncErrors(async (req, res, next) => {
  try {
    const reports = await Report.find().sort({ reportDate: -1 });

    res.status(200).json({
      success: true,
      reports,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Delete a report (Admin only)
exports.deleteReport = catchAsyncErrors(async (req, res, next) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return next(new ErrorHandler("Report not found with this id", 404));
    }

    await Report.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: "Report deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
});
