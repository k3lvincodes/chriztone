'use server';

/**
 * @fileOverview Generates an email subject from a message.
 *
 * - generateEmailSubject - A function that handles the subject generation process.
 * - GenerateEmailSubjectInput - The input type for the generateEmailSubject function.
 * - GenerateEmailSubjectOutput - The return type for the generateEmailSubject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEmailSubjectInputSchema = z.object({
  message: z.string().describe('The content of the email message.'),
});
export type GenerateEmailSubjectInput = z.infer<typeof GenerateEmailSubjectInputSchema>;

const GenerateEmailSubjectOutputSchema = z.object({
  subject: z.string().describe('A short, auto-generated subject line for the email.'),
});
export type GenerateEmailSubjectOutput = z.infer<typeof GenerateEmailSubjectOutputSchema>;

export async function generateEmailSubject(input: GenerateEmailSubjectInput): Promise<GenerateEmailSubjectOutput> {
  return generateEmailSubjectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEmailSubjectPrompt',
  input: {schema: GenerateEmailSubjectInputSchema},
  output: {schema: GenerateEmailSubjectOutputSchema},
  prompt: `You are an AI assistant that creates concise and relevant email subject lines.

  Read the following message and generate a short subject line (5-10 words) that summarizes its content. The subject should start with "New message from portfolio:".

  Message:
  {{{message}}}
  `,
});

const generateEmailSubjectFlow = ai.defineFlow(
  {
    name: 'generateEmailSubjectFlow',
    inputSchema: GenerateEmailSubjectInputSchema,
    outputSchema: GenerateEmailSubjectOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
