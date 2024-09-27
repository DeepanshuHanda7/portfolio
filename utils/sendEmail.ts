import nodemailer from "nodemailer";

interface EmailOptions {
  name: string;
  to: string;
  subject: string;
  html: string;
}

async function sendEmail(options: EmailOptions): Promise<void> {
  try {
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MailId,
        pass: process.env.MailPassword,
      },
    });

    // Define email message
    const mailOptions = {
      from: `${options.name} <${process.env.MailId}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    };

    // Send email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("Nodemailer : error while sending mail.");
  }
}

export default sendEmail;
