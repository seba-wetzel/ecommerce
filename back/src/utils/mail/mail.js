import nodemailer from "nodemailer";
import { account, password } from "./config.js";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: account,
    pass: password,
  },
});

// email sender function
export const sendEmail = async function (to, body) {
  // Definimos el transporter
  const info = await transporter.sendMail({
    from: account,
    to,
    subject: "Hello ✔",
    text: "Gracias por su compra",
    html: `<b>${body}</b>`,
  });
  return info;
};
