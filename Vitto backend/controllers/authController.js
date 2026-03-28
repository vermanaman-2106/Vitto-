const OTP = require("../models/otpModel");
const jwt = require("jsonwebtoken");

exports.sendOTP = async (req, res) => {
  try {
    const { emailOrPhone } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // 🔥 Show OTP in backend terminal
    console.log("Generated OTP:", otp);

    await OTP.create({ emailOrPhone, otp });

    res.json({
      message: "OTP sent successfully. Check server console.",
      otp, // 👈 optional (for testing only)
    });

  } catch (err) {
    console.error("SEND OTP ERROR:", err);
    res.status(500).json({ message: "Error sending OTP" });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { emailOrPhone, otp } = req.body;

    const record = await OTP.findOne({ emailOrPhone, otp });

    if (!record) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const token = jwt.sign({ emailOrPhone }, process.env.JWT_SECRET);

    res.json({ message: "Verified", token });

  } catch (err) {
    console.error("VERIFY OTP ERROR:", err);
    res.status(500).json({ message: "Error verifying OTP" });
  }
};