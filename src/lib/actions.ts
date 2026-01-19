"use server";

import { Resend } from "resend";

// Initialize Resend with API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailState {
  success: boolean;
  message?: string;
}

export async function sendEmailAction(
  _prevState: EmailState,
  formData: FormData,
): Promise<EmailState> {
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;

  if (!email || !name || !description) {
    return { success: false, message: "Missing fields" };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.MY_EMAIL || "",
      subject: `Portfolio Contact from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${description}</p>
      `,
    });

    if (data.error) {
      return { success: false, message: data.error.message };
    }

    return { success: true };
  } catch {
    return { success: false, message: "Failed to send email" };
  }
}
