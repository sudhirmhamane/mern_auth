import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAITRAP_USER_ID,
    pass: process.env.MAITRAP_PASSWORD,
  },
});

export default transporter;
