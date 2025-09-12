import { config } from 'dotenv';
config();

import '@/ai/flows/suggest-typography-pairings.ts';
import '@/ai/flows/extract-design-styles.ts';
import '@/ai/flows/analyze-screenshot.ts';
import '@/ai/flows/suggest-color-palette.ts';
import '@/ai/flows/generate-email-subject.ts';