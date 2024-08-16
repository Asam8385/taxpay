const { sendOtpEmail } = require('../services/emailService');
const { generateOtp } = require('../utils/otpUtils');

let otpStore = {}; // For demo purposes

exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();
  otpStore[email] = otp;
  
  try {
    await sendOtpEmail(email, otp);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending OTP', error });
  }
};

exports.verifyOtp = (req, res) => {
  const { email, otp } = req.body;
  const storedOtp = otpStore[email];

  if (storedOtp === otp) {
    delete otpStore[email];
    res.status(200).json({ message: 'OTP verified successfully' });
  } else {
    res.status(400).json({ message: 'Invalid OTP' });
  }
};
