import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b1e4b0433b70c5",
    pass: "8ed6cd9b5e0dab"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Bruno <brunobastiani95@gmail.com>',
      to: 'Bruno Henrique de Bastiani <brunobastiani95@gmail.com>',
      subject,
      html: body
    });
  };
}