const Pin = require("../models/PinModel");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");

// Create a new pin
exports.createPin = catchAsyncErrors(async (req, res, next) => {
  try {
    const {
      createdBy,
      businessName,
      description,
      category,
      latitude,
      longitude,
      contactInfo,
      image,
    } = req.body;

    let myCloud;

    if (image) {
      myCloud = await cloudinary.v2.uploader.upload(image, {
        folder: "pins",
      });
    }

    const pin = new Pin({
      createdBy,
      businessName,
      description,
      category,
      latitude,
      longitude,
      contactInfo,
      image: image
        ? {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          }
        : null,
    });

    await pin.save();

    res.status(201).json({
      success: true,
      pin,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});


exports.createReview = catchAsyncErrors(async (req, res, next) => {
  try {
    const { pinId, user, comment, rating } = req.body;

    // Validate that required fields are provided
    if (!pinId || !user || !comment || !rating) {
      return next(new ErrorHandler("Please provide all required fields", 400));
    }

    // Find the pin where the review should be added
    const pin = await Pin.findById(pinId);

    if (!pin) {
      return next(new ErrorHandler("Pin not found", 404));
    }

    // Create the review object
    const review = {
      user,
      comment,
      rating,
    };

    // Add the review to the reviews array
    pin.reviews.push(review);

    // Update the review count and the average rating of the pin
    pin.reviewCount = pin.reviews.length;

    // Recalculate average rating
    const totalRating = pin.reviews.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    pin.averageRating = totalRating / pin.reviewCount;

    // Save the updated pin document
    await pin.save();

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      review: pin.reviews[pin.reviews.length - 1], // Return the newly added review
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// get all reviews for a specific pin
exports.getAllReviews = catchAsyncErrors(async (req, res, next) => {
  try {
    // Find the pin by its ID
    const pin = await Pin.findById(req.params.pinId);

    // If no pin is found, return an error
    if (!pin) {
      return next(new ErrorHandler("Pin not found", 404));
    }

    // Return the reviews array from the pin
    res.status(200).json({ success: true, reviews: pin.reviews });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Get all pins
exports.getAllPins = catchAsyncErrors(async (req, res, next) => {
  try {
    const pins = await Pin.find().sort({
      createdAt: -1,
    });

    res.status(200).json({ success: true, pins });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Get pin by ID
exports.getPinById = catchAsyncErrors(async (req, res, next) => {
  try {
    const pin = await Pin.findById(req.params.id);
    if (!pin) {
      return next(new ErrorHandler("Pin not found", 404));
    }

    res.status(200).json({ success: true, pin });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Update pin by ID
exports.updatePinById = catchAsyncErrors(async (req, res, next) => {
  try {
    const pinId = req.params.id;
    const updateFields = req.body;

    const pin = await Pin.findByIdAndUpdate(pinId, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!pin) {
      return next(new ErrorHandler("Pin not found", 404));
    }

    res.status(200).json({ success: true, pin });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Delete pin by ID
exports.deletePinById = catchAsyncErrors(async (req, res, next) => {
  console.log("trying to delete pin");
  try {
    const pin = await Pin.findById(req.params.id);
    if (!pin) {
      return next(new ErrorHandler("Pin not found", 404));
    }

    if (pin.image?.public_id) {
      await cloudinary.v2.uploader.destroy(pin.image.public_id);
    }

    await Pin.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: "Pin deleted successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});
