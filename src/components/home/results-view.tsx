import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Palette, Type, Ruler, Sparkles } from 'lucide-react';
import type { AnalysisResult } from '@/app/page';

interface ResultsViewProps {
  result: AnalysisResult;
  image: string;
  onNewAnalysis: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ result, image, onNewAnalysis }) => {
  const { analysis, style, palette, typography } = result;

  const downloadStyleGuide = () => {
    const { colors, fonts, spacing } = style;
    const { headingFont, bodyFont } = typography;

    const content = `
/* --- CHRIZTONE ASSISTANT STYLE GUIDE --- */

/* --- COLORS --- */
/* Primary Palette */
${palette.basePalette.map((color, i) => `--color-primary-${i + 1}: ${color};`).join('\n')}

/* Extracted from Image */
${colors.map((color, i) => `--color-extracted-${i + 1}: ${color};`).join('\n')}


/* --- TYPOGRAPHY --- */
--font-heading: '${headingFont}';
--font-body: '${bodyFont}';

/* Extracted Fonts */
${fonts.map((font, i) => `--font-extracted-${i + 1}: '${font}';`).join('\n')}


/* --- SPACING --- */
${spacing}
`;

    const blob = new Blob([content], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'style-guide.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
        <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Analysis Complete</h1>
            <Button onClick={onNewAnalysis}>Start New Analysis</Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Previews */}
            <div className="space-y-8">
                <Card>
                    <CardHeader><CardTitle>Original Screenshot</CardTitle></CardHeader>
                    <CardContent>
                        <Image src={image} alt="Uploaded screenshot" width={1200} height={900} className="rounded-lg object-contain" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Quick Preview</CardTitle></CardHeader>
                    <CardContent style={{ backgroundColor: palette.basePalette[4] || '#ffffff' }}>
                        <div className="p-6 rounded-lg border" style={{ backgroundColor: palette.basePalette[0] || '#ffffff' }}>
                            <h2 className="text-2xl mb-2" style={{ fontFamily: typography.headingFont, color: palette.basePalette[1] }}>{typography.headingFont}</h2>
                            <p style={{ fontFamily: typography.bodyFont, color: palette.basePalette[2] }}>
                                This is a sample paragraph styled with {typography.bodyFont}. The quick brown fox jumps over the lazy dog.
                            </p>
                            <Button className="mt-4" style={{ backgroundColor: palette.basePalette[3], color: palette.basePalette[0] }}>Action Button</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right Column: Style Guide */}
            <div className="space-y-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="flex items-center gap-2"><Sparkles className="text-primary" /> AI Analysis</CardTitle>
                        <Button onClick={downloadStyleGuide} variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Download Guide</Button>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Layout</h3>
                            <p className="text-muted-foreground text-sm">{analysis.layoutDescription}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Typography</h3>
                            <p className="text-muted-foreground text-sm">{analysis.typographyDescription}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Color Scheme</h3>
                            <p className="text-muted-foreground text-sm">{analysis.colorSchemeDescription}</p>
                        </div>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><Palette className="text-primary" /> Color Palette</CardTitle></CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                        {palette.basePalette.map((color) => (
                        <div key={color} className="text-center">
                            <div className="w-16 h-16 rounded-lg border" style={{ backgroundColor: color }}></div>
                            <p className="text-xs mt-1 font-mono">{color}</p>
                        </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><Type className="text-primary" /> Typography</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h4 className="font-semibold">Suggested Pairing:</h4>
                            <p>Heading: <span className="font-medium" style={{fontFamily: typography.headingFont}}>{typography.headingFont}</span></p>
                            <p>Body: <span className="font-medium" style={{fontFamily: typography.bodyFont}}>{typography.bodyFont}</span></p>
                            <p className="text-sm text-muted-foreground mt-1">{typography.rationale}</p>
                        </div>
                         <div>
                            <h4 className="font-semibold">Extracted Fonts from Image:</h4>
                            <ul className="list-disc list-inside text-muted-foreground">
                                {style.fonts.map((font) => <li key={font}>{font}</li>)}
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle className="flex items-center gap-2"><Ruler className="text-primary" /> Spacing & Sizing</CardTitle></CardHeader>
                    <CardContent>
                        <pre className="bg-muted p-4 rounded-lg text-sm text-muted-foreground overflow-x-auto">
                            <code>{style.spacing}</code>
                        </pre>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
};

export default ResultsView;
