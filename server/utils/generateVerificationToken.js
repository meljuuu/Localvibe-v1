const crypto = require('crypto');

const generateVerificationToken = () => {
  // Generate a 6-digit numeric OTP for easier mobile input
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
  // Generate a longer token for deep linking
  const deepLinkToken = crypto.randomBytes(32).toString('hex');
  
  // Set expiry to 10 minutes for OTP and 24 hours for deep link
  const otpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes
  const deepLinkExpiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  
  return {
    otp,
    otpExpiry,
    deepLinkToken,
    deepLinkExpiry
  };
};

// Add validation helpers
const isTokenExpired = (expiryTime) => {
  return Date.now() > expiryTime;
};

const validateOTP = (inputOTP, storedOTP) => {
  return inputOTP === storedOTP;
};

module.exports = {
  generateVerificationToken,
  isTokenExpired,
  validateOTP
};
