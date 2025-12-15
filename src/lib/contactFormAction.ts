'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail({
  email,
  name,
  description,
}: {
  email: string;
  name: string;
  description: string;
}) {
  try {
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: `${process.env.MY_EMAIL}`,
      subject: 'Portfolio - nový dotaz',
      html: `
                <p><strong>Jméno:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Zpráva:</strong> ${description}</p>
            `,
    });

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Došlo k chybě při odesílání emailu.');
    } else {
      throw new Error('Došlo k neznámé chybě.');
    }
  }
}
