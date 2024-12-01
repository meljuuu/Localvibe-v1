const mongoose = require("mongoose");
const pinSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    businessName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    contactInfo: {
      phone: {
        type: String,
        default: null,
      },
      email: {
        type: String,
        default: null,
      },
      website: {
        type: String,
        default: null,
      },
    },
    image: {
      public_id: {
        type: String,
        default: null,
      },
      url: {
        type: String,
        default: null,
      },
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    // Change visitCount to track user visits
    visitCount: {
      type: [String], // Array of userIds
      default: [], // Stores unique userIds who visited the post
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    amenities: {
      type: [String],
      default: [],
    },
    // Embedded reviews schema
    reviews: [
      {
        userId: {
          type: String, // userId is now a simple string
          required: true,
        },
        reviewText: {
          type: String,
          required: true,
        },
        ratings: {
          type: Number,
          required: true,
          min: 1,
          max: 5, // Assuming ratings are between 1 and 5
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    operatingHours: {
      monday: { open: String, close: String },
      tuesday: { open: String, close: String },
      wednesday: { open: String, close: String },
      thursday: { open: String, close: String },
      friday: { open: String, close: String },
      saturday: { open: String, close: String },
      sunday: { open: String, close: String },
    },
  },
  { timestamps: true }
);

// Method to add a visit, ensuring no duplicates
pinSchema.methods.addVisit = function (userId) {
  // Check if the userId is already in the visitCount array
  if (!this.visitCount.includes(userId)) {
    // Add the userId to the visitCount array
    this.visitCount.push(userId);
    // Save the updated pin
    return this.save();
  }
  // Return the pin without changes if the user has already visited
  return Promise.resolve(this);
};

module.exports = mongoose.model("Pin", pinSchema);
