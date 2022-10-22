import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  try {
    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedback = new SubmitFeedbackUseCase(
      prismaFeedbackRepository,
      nodemailerMailAdapter
    );

    await submitFeedback.execute({
      type,
      comment,
      screenshot,
    });

    return res.status(201).send();
  } catch (err) {
    console.error(err);
  }
});
