const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "subairasam8733260@gmail.com", 
      pass: "iptffnejtffzyhto" 
  }
});

exports.sendOtpEmail = (email, otp) => {
  const mailOptions = {
    from: "subairasam8733260@gmail.com",
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  return transporter.sendMail(mailOptions);
};
