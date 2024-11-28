const Report = require("../models/ReportModel"); // Assuming you have created ReportModel
const Post = require("../models/PostModel");
const Pin = require("../models/PinModel"); // Assuming PinModel exists
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


exports.reportContent = catchAsyncErrors(async (req, res, next) => {
  try {
    const { userId, postId, pinId, reason, itemType } = req.body;

    // Validate if itemType is either "post" or "pin"
    if (itemType !== "post" && itemType !== "pin") {
      return next(new ErrorHandler("Invalid itemType provided", 400));
    }

    // Set pinId or postId to null depending on itemType
    let reportedContent;
    if (itemType === "post") {
      if (postId) {
        reportedContent = await Post.findById(postId);
      }
    } else if (itemType === "pin") {
      if (pinId) {
        reportedContent = await Pin.findById(pinId);
      }
    }

    if (!reportedContent) {
      return next(new ErrorHandler("Content not found", 404));
    }

    // Check if the user has already reported this content
    const existingReport = await Report.findOne({
      userId,
      reportedItemId: itemType === "post" ? postId : pinId, // Use postId or pinId depending on itemType
      itemType, // Use the itemType directly (either "post" or "pin")
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
      reportedItemId: itemType === "post" ? postId : pinId, // Store either postId or pinId based on itemType
      itemType, // Use the itemType directly
      reason,
      reportDate: Date.now(),
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
