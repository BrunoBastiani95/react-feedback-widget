import { SubmitFeedbackService } from "./submit-feedback-service"

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    const submitFeedback = new SubmitFeedbackService(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Example comment',
      screenshot: 'data:image/png;base64teste'
    })).resolves.not.toThrow();
  });
});

