exports.modifyReview = catchAsyncErrors(async (req, res, next) => {
  try {
    const { pinId, reviewId, userId, reviewText, ratings, name, image } = req.body;

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

    // Log user and review comparison for debugging
    console.log('User ID:', userId);
    console.log('Review User ID:', review.user._id.toString());

    if (review.user._id.toString() !== userId) {
      return next(new ErrorHandler("You are not authorized to modify this review", 403));
    }

    // Update review details
    review.reviewText = reviewText;
    review.ratings = ratings;
    review.name = name;
    review.image = image;

    // Recalculate average rating
    const oldRating = review.ratings;
    const newRating = ratings;

    pin.averageRating = (pin.averageRating * pin.reviewCount - oldRating + newRating) / pin.reviewCount;

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
