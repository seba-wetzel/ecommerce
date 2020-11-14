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
  const json = JSON.parse(body)
  const info = await transporter.sendMail({
    from: account,
    to,
    subject: "Gracias por su compra ✔",
    text: `Gracias por su compra con un valor de $${json.amount}, tus productos ya estan en produccion!
    Responde este mail para coordinar el pago y la forma de envio. Saludos!`
  });
  return info;
};
