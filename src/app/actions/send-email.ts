'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';
import { generateEmailSubject } from '@/ai/flows/generate-email-subject';

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
  
  if (!process.env.RESEND_API_KEY) {
    console.error('Resend API key is not set.');
    return { success: false, error: 'Email service is not configured.' };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, message } = parsedData.data;
  const toEmail = "opauloluwasetemi@gmail.com";

  try {
    let subject;
    if (process.env.GEMINI_API_KEY) {
      const subjectResult = await generateEmailSubject({ message });
      subject = subjectResult.subject;
    } else {
      console.warn("GEMINI_API_KEY is not set. Falling back to default subject.");
      subject = "New message from portfolio";
    }
    
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Must be a verified domain on Resend
      to: [toEmail],
      subject: subject,
      reply_to: email,
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
        console.error('Resend error:', error);
        return { success: false, error: `Failed to send email. ${error.message}` };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email sending error:', error);
    if (error instanceof Error) {
        if (error.message.includes('API_KEY_INVALID')) {
            return { success: false, error: 'The Google AI API key is invalid. Please check your .env file.' };
        }
        return { success: false, error: `An unexpected error occurred: ${error.message}` };
    }
    return { success: false, error: 'An unexpected error occurred.' };
  }
}
