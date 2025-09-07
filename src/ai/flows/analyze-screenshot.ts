// The analyzeScreenshotFlow analyzes a screenshot of a design to identify key elements.
// It takes a data URI of the screenshot image as input and returns a description of the layout,
// typography, and color schemes.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeScreenshotInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a design screenshot, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AnalyzeScreenshotInput = z.infer<typeof AnalyzeScreenshotInputSchema>;

const AnalyzeScreenshotOutputSchema = z.object({
  layoutDescription: z.string().describe('Description of the layout.'),
  typographyDescription: z.string().describe('Description of the typography.'),
  colorSchemeDescription: z.string().describe('Description of the color scheme.'),
});
export type AnalyzeScreenshotOutput = z.infer<typeof AnalyzeScreenshotOutputSchema>;

export async function analyzeScreenshot(input: AnalyzeScreenshotInput): Promise<AnalyzeScreenshotOutput> {
  return analyzeScreenshotFlow(input);
}

const analyzeScreenshotPrompt = ai.definePrompt({
  name: 'analyzeScreenshotPrompt',
  input: {schema: AnalyzeScreenshotInputSchema},
  output: {schema: AnalyzeScreenshotOutputSchema},
  prompt: `You are an AI assistant specialized in analyzing design screenshots.

You will analyze the provided screenshot and identify key elements such as the layout, typography, and color scheme.

Provide a detailed description of each of these aspects.

Screenshot: {{media url=photoDataUri}}

Layout Description: A description of the layout of the design.
Typography Description: A description of the typography used in the design.
ColorScheme Description: A description of the color scheme used in the design.`,
});

const analyzeScreenshotFlow = ai.defineFlow(
  {
    name: 'analyzeScreenshotFlow',
    inputSchema: AnalyzeScreenshotInputSchema,
    outputSchema: AnalyzeScreenshotOutputSchema,
  },
  async input => {
    const {output} = await analyzeScreenshotPrompt(input);
    return output!;
  }
);
