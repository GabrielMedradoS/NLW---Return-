import express from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

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

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("HTTP server is running!");
});
