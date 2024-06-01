
var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(otpText) {
  try {
  var transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: 'Quote request from ImperialLux site !',
    text: otpText,
  };
  const response = await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
    
  });
  } catch (error) {
    console.error('Error sending mail:', error);
    return { error: 'Failed to send email', details: error.message };
  }
  return true
}
