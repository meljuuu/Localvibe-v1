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
      operatingHours,  // Add operatingHours to the body
    } = req.body;

    // Optional: Validate operatingHours format
    if (!operatingHours || Object.keys(operatingHours).length !== 7) {
      return next(new ErrorHandler("Invalid operating hours format", 400));
    }

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
      operatingHours, // Include operatingHours when creating the pin
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

// Add a review to a pin
exports.addReview = catchAsyncErrors(async (req, res, next) => {
  try {
    const { pinId, userId, reviewText, ratings } = req.body;

    if (!pinId || !userId || !reviewText || !ratings) {
      return next(new ErrorHandler("All fields are required", 400));
    }

    const pin = await Pin.findById(pinId);

    if (!pin) {
      return next(new ErrorHandler("Pin not found", 404));
    }

    const review = { userId, reviewText, ratings, createdAt: new Date() };

    pin.reviews.push(review);
    pin.reviewCount = pin.reviews.length;

    // Update average rating
    const totalRatings = pin.reviews.reduce((sum, rev) => sum + rev.ratings, 0);
    pin.averageRating = totalRatings / pin.reviewCount;

    // Check if the pin qualifies for verification
    if (pin.reviewCount >= 10 && pin.averageRating >= 4.5) {
      pin.isVerified = true;
    } else {
      pin.isVerified = false;  // Reset to false if conditions are not met
    }

    await pin.save();

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      pin,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});


// Modify a review
exports.modifyReview = catchAsyncErrors(async (req, res, next) => {
  try {
    const { pinId, reviewId, userId, reviewText, ratings } = req.body;

    if (!pinId || !reviewId || !userId || !reviewText || !ratings) {
      return next(new ErrorHandler("All fields are required", 400));
    }

    const pin = await Pin.findById(pinId);

    if (!pin) {
      return next(new ErrorHandler("Pin not found", 404));
    }

    const review = pin.reviews.id(reviewId);

    if (!review) {
      return next(new ErrorHandler("Review not found", 404));
    }

    if (review.userId !== userId) {
      return next(new ErrorHandler("You are not authorized to modify this review", 403));
    }

    review.reviewText = reviewText;
    review.ratings = ratings;

    // Update average rating
    const totalRatings = pin.reviews.reduce((sum, rev) => sum + rev.ratings, 0);
    pin.averageRating = totalRatings / pin.reviews.length;

    await pin.save();

    res.status(200).json({
      success: true,
      message: "Review modified successfully",
      pin,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  try {
    const { pinId, reviewId, userId } = req.body;

    // Ensure all required fields are present
    if (!pinId || !reviewId || !userId) {
      return next(new ErrorHandler("All fields are required", 400));
    }

    // Fetch the pin by ID
    const pin = await Pin.findById(pinId);

    if (!pin) {
      return next(new ErrorHandler("Pin not found", 404));
    }

    // Find the review by ID
    const review = pin.reviews.find((rev) => rev._id.toString() === reviewId);

    if (!review) {
      return next(new ErrorHandler("Review not found", 404));
    }

    // Check if the user is authorized to delete the review
    if (review.userId.toString() !== userId) {
      return next(new ErrorHandler("You are not authorized to delete this review", 403));
    }

    // Remove the review manually
    pin.reviews = pin.reviews.filter((rev) => rev._id.toString() !== reviewId);

    // Update review count
    pin.reviewCount = pin.reviews.length;

    // Update average rating
    const totalRatings = pin.reviews.length
      ? pin.reviews.reduce((sum, rev) => sum + rev.ratings, 0)
      : 0;
    pin.averageRating = pin.reviews.length ? totalRatings / pin.reviews.length : 0;

    // Save the updated pin
    await pin.save();

    // Respond with success
    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      pin,
    });
  } catch (error) {
    // Handle unexpected errors
    return next(new ErrorHandler(error.message, 400));
  }
});

// Add a visit to a pin
exports.addVisit = catchAsyncErrors(async (req, res, next) => {
  try {
    const { pinId, userId } = req.body;

    if (!pinId || !userId) {
      return next(new ErrorHandler("Pin ID and User ID are required", 402));
    }

    // Find the pin by ID
    const pin = await Pin.findById(pinId);
    if (!pin) {
      return next(new ErrorHandler("Pin not found", 404));
    }

    // Check if the user has already visited the pin
    if (pin.visitCount.includes(userId)) {
      return next(new ErrorHandler("User has already visited this pin", 401));
    }

    // Add the user ID to the visitCount array
    pin.visitCount.push(userId);

    // Save the updated pin document
    await pin.save();

    res.status(200).json({
      success: true,
      message: "Visit added successfully",
      pin,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

