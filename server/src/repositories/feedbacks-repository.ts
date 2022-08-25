// Contrato - Explica quais operaçoes posso fazer no db mas ele n ira implementar

// essa Interface pertence a camada de dados da nossa aplicação
export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
