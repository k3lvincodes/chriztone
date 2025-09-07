'use server';

/**
 * @fileOverview An AI agent for extracting design styles from a screenshot.
 *
 * - extractDesignStyles - A function that handles the design style extraction process.
 * - ExtractDesignStylesInput - The input type for the extractDesignStyles function.
 * - ExtractDesignStylesOutput - The return type for the extractDesignStyles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractDesignStylesInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a design screenshot, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ExtractDesignStylesInput = z.infer<typeof ExtractDesignStylesInputSchema>;

const ExtractDesignStylesOutputSchema = z.object({
  colors: z.array(z.string()).describe('The color palette extracted from the design.'),
  fonts: z.array(z.string()).describe('The fonts used in the design.'),
  spacing: z
    .string()
    .describe('The spacing information extracted from the design, in CSS variable format.'),
  extractedStylesText: z
    .string()
    .describe('A textual description of the extracted styles, including colors, fonts and spacing.'),
});
export type ExtractDesignStylesOutput = z.infer<typeof ExtractDesignStylesOutputSchema>;

export async function extractDesignStyles(input: ExtractDesignStylesInput): Promise<ExtractDesignStylesOutput> {
  return extractDesignStylesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractDesignStylesPrompt',
  input: {schema: ExtractDesignStylesInputSchema},
  output: {schema: ExtractDesignStylesOutputSchema},
  prompt: `You are an expert UI/UX designer with a keen eye for detail. Your task is to analyze a design screenshot and extract its key style attributes, including colors, fonts, and spacing.

  Analyze the design in the provided screenshot and output the colors, fonts and spacing information. Be as accurate as possible. For the spacing information, output the information in CSS variable format.

  Screenshot: {{media url=photoDataUri}}
  `,
});

const extractDesignStylesFlow = ai.defineFlow(
  {
    name: 'extractDesignStylesFlow',
    inputSchema: ExtractDesignStylesInputSchema,
    outputSchema: ExtractDesignStylesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
