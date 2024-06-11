
var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(otpText) {
  try {
  var transporter = nodemailer.createTransport({
    host: 'theimperiallux.com',
    port: 587,
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
    to: "vgpersonalmail@gmail.com",
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
    return { error: 'Failed to send email', details: error.message, error:error };
  }
  return true
}
