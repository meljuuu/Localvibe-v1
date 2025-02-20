const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your Name"],
    },
    userName: {
      type: String,
    },
    bio: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    isVerified:  {
      type: Boolean,
      default: false
    },
    
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    
    accountType: {
      type: String,
      enum: ["admin", "personal", "business", "prembusiness"],
      default: "personal",
      required: [true, "Please specify the account type"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    latitude: {
      type: Number,
      default: null,
    },
    longitude: {
      type: Number,
      default: null,
    },
    avatar: {
      public_id: {
        type: String,
        required: [true, "Please upload one profile picture!"],
      },
      url: {
        type: String,
        required: [true, "Please upload one profile picture!"],
      },
    },
    coverPhoto: {
      public_id: {
        type: String,
        default: null,
      },
      url: {
        type: String,
        default: null,
      },
    },
    followers: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    following: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    interactions: [
      {
        post_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
          required: true,
        },
        score: {
          type: Number,
          default: 0,
        },
      },
    ],
    share: [
      {
        post_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
          required: true,
        },
      },
    ],
    similarUsers: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        similarityScore: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

// Encrypt Email & Tokens Before Saving
userSchema.pre("save", async function (next) {
  if (this.isModified("email")) {
    this.email = encryptData(this.email);
  }

  if (this.isModified("verificationToken") && this.verificationToken) {
    this.verificationToken = encryptData(this.verificationToken);
  }

  if (this.isModified("resetPasswordToken") && this.resetPasswordToken) {
    this.resetPasswordToken = encryptData(this.resetPasswordToken);
  }

  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  next();
});

// Decrypt Email & Tokens
userSchema.methods.getDecryptedEmail = function () {
  return decryptData(this.email);
};

userSchema.methods.getDecryptedVerificationToken = function () {
  return this.verificationToken ? decryptData(this.verificationToken) : null;
};

userSchema.methods.getDecryptedResetPasswordToken = function () {
  return this.resetPasswordToken ? decryptData(this.resetPasswordToken) : null;
};


// Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
