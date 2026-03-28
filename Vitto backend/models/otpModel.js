const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  emailOrPhone: String,
  otp: String,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, // auto delete in 10 min
  },
});

module.exports = mongoose.model("OTP", otpSchema);