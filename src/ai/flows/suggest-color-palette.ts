'use server';

/**
 * @fileOverview Suggests a base color palette based on the screenshot, using a combination of identified prominent and complementary colors.
 *
 * - suggestColorPalette - A function that handles the color palette suggestion process.
 * - SuggestColorPaletteInput - The input type for the suggestColorPalette function.
 * - SuggestColorPaletteOutput - The return type for the suggestColorPalette function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestColorPaletteInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a design screenshot, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SuggestColorPaletteInput = z.infer<typeof SuggestColorPaletteInputSchema>;

const SuggestColorPaletteOutputSchema = z.object({
  basePalette: z.array(
    z.string().describe('A hex color code.'),
  ).describe('An array of hex color codes representing the base color palette.')
});
export type SuggestColorPaletteOutput = z.infer<typeof SuggestColorPaletteOutputSchema>;

export async function suggestColorPalette(input: SuggestColorPaletteInput): Promise<SuggestColorPaletteOutput> {
  return suggestColorPaletteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestColorPalettePrompt',
  input: {schema: SuggestColorPaletteInputSchema},
  output: {schema: SuggestColorPaletteOutputSchema},
  prompt: `You are a color palette expert. Analyze the provided design screenshot and suggest a base color palette with prominent and complementary colors.

  Return an array of hex color codes.

  Screenshot: {{media url=photoDataUri}}
  `,
});

const suggestColorPaletteFlow = ai.defineFlow(
  {
    name: 'suggestColorPaletteFlow',
    inputSchema: SuggestColorPaletteInputSchema,
    outputSchema: SuggestColorPaletteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
