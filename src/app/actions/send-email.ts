'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendEmail(formData: z.infer<typeof contactFormSchema>) {
  const parsedData = contactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const { name, email, message } = parsedData.data;
  const toEmail = "k3lvincodes@gmail.com";

  try {
    const { data, error } = await resend.emails.send({
      from: 'Chriztone Portfolio <onboarding@resend.dev>', // Must be a verified domain on Resend
      to: [toEmail],
      subject: `New message from ${name}`,
      reply_to: email,
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
        console.error('Resend error:', error);
        return { success: false, error: 'Failed to send email.' };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
