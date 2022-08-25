import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
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
  }
}
