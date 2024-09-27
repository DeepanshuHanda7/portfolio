import { NextRequest, NextResponse } from "next/server";

import sendEmail from "@/utils/sendEmail";

const prepareAndSendMail = async (data: {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}) => {
  if (!data.Name || !data.Email || !data.Subject || !data.Message) {
    throw new Error("All fields are required.");
  }

  const emailData = `
    <html>
      <head>
        <style>
          .heading {
            margin-top: 8px;
            margin-bottom: 8px;
          }
          .message {
            white-space: pre-line;
            max-width: 1080px;
          }
        </style>
      </head>
      <body>
        <div class="heading">
          <h2>From: ${data.Name}</h2>
        </div>
        <div class="message">
          <p>${data.Message}</p>
        </div>
        <div class="heading">
          <h3>Email: ${data.Email}</h3>
        </div>
      </body>
    </html>
  `;

  const emailOptions = {
    name: data.Name,
    to: process.env.MyEmailId as string,
    subject: data.Subject,
    html: emailData,
  };

  await sendEmail(emailOptions);

  return "Your message has been sent.";
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const message = await prepareAndSendMail(data);

    return NextResponse.json({ message }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
