const crypto = require('crypto');

const generateVerificationToken = () => {
  // Generate verification token
  const verificationToken = crypto.randomBytes(20).toString('hex');
  
  // Set expiry time to 24 hours from now
  const verificationTokenExpiresAt = new Date(
    Date.now() + 24 * 60 * 60 * 1000
  ).toString();

  return {
    verificationToken,
    verificationTokenExpiresAt
  };
};

// Helper to check if token is expired
const isVerificationTokenExpired = (expiryTimeString) => {
  const expiryTime = new Date(expiryTimeString);
  return Date.now() > expiryTime.getTime();
};

// Helper to validate token
const validateVerificationToken = async (User, token) => {
  const user = await User.findOne({
    verificationToken: token,
    isVerified: false
  });

  if (!user) {
    throw new Error('Invalid verification token');
  }

  if (isVerificationTokenExpired(user.verificationTokenExpiresAt)) {
    throw new Error('Verification token has expired');
  }

  return user;
};

module.exports = {
  generateVerificationToken,
  isVerificationTokenExpired,
  validateVerificationToken
};
