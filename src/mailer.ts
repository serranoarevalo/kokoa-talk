require("dotenv").config();
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transportOptions = {
  auth: {
    api_user: process.env.SENDGRID_USER,
    api_key: process.env.SENDGRID_PASSWORD
  }
};

const transport = nodemailer.createTransport(sgTransport(transportOptions));

const sendEmail = email => transport.sendMail(email);

export const sendLoginEmail = (secret, to) => {
  const email = {
    from: "support@kokoatalk.com",
    to: "itnicolasme@gmail.com",
    subject: "Login Secret 🔒",
    html: `Your login secret is: <b>${secret}</b>. Copy paste it in the app to login. Thanks for using Kokoa Talk`
  };
  return sendEmail(email);
};
