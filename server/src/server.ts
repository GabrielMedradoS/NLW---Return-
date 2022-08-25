import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "407f533ebf1759",
    pass: "f1b7354fa22445",
  },
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type: type,
      comment: comment,
      screenshot: screenshot,

      /* Quando a chave é igual ao valor eu posso simplesmente passar uma short sintax
      Apenas passando os valores como o exemplo abaixo: 
    data: {
      type,
      comment,
      screenshot, */
    },
  });

  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Gabriel Medrado <gabriel.medradoo@hotmail.com>",
    subject: "Novo Feedback",
    html: [
      `<div style="font-family: sans-serif; font-size:16px; color:#111">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("HTTP server is running!");
});
