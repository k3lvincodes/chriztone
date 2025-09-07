'use server';

/**
 * @fileOverview Suggests typography pairings based on the visual style of a design.
 *
 * - suggestTypographyPairings - A function that suggests typography pairings.
 * - SuggestTypographyPairingsInput - The input type for the suggestTypographyPairings function.
 * - SuggestTypographyPairingsOutput - The return type for the suggestTypographyPairings function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestTypographyPairingsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a design, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SuggestTypographyPairingsInput = z.infer<
  typeof SuggestTypographyPairingsInputSchema
>;

const SuggestTypographyPairingsOutputSchema = z.object({
  headingFont: z.string().describe('Suggested font for headings.'),
  bodyFont: z.string().describe('Suggested font for body text.'),
  isSerifCombinationRecommended: z
    .boolean()
    .describe(
      'Whether a serif/sans-serif combination is visually appropriate.'
    ),
  rationale: z
    .string()
    .describe('Explanation of why these pairings are suggested.'),
});

export type SuggestTypographyPairingsOutput = z.infer<
  typeof SuggestTypographyPairingsOutputSchema
>;

export async function suggestTypographyPairings(
  input: SuggestTypographyPairingsInput
): Promise<SuggestTypographyPairingsOutput> {
  return suggestTypographyPairingsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestTypographyPairingsPrompt',
  input: {schema: SuggestTypographyPairingsInputSchema},
  output: {schema: SuggestTypographyPairingsOutputSchema},
  prompt: `You are an expert in typography and visual design. Analyze the provided design screenshot and suggest suitable font pairings for headings and body text. 

Consider the overall aesthetic of the design (e.g., modern, classic, minimalist, bold).  Determine if a serif/sans-serif combination would be visually appealing and set the isSerifCombinationRecommended field appropriately. Provide a brief rationale for your font suggestions.

Photo: {{media url=photoDataUri}}
`,
});

const suggestTypographyPairingsFlow = ai.defineFlow(
  {
    name: 'suggestTypographyPairingsFlow',
    inputSchema: SuggestTypographyPairingsInputSchema,
    outputSchema: SuggestTypographyPairingsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
