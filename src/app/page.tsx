'use client';
import type { ChangeEvent } from 'react';
import React,
{
  useState,
  useRef
} from 'react';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import DefaultView from '@/components/home/default-view';
import ResultsView from '@/components/home/results-view';

import { analyzeScreenshot, type AnalyzeScreenshotOutput } from '@/ai/flows/analyze-screenshot';
import { extractDesignStyles, type ExtractDesignStylesOutput } from '@/ai/flows/extract-design-styles';
import { suggestColorPalette, type SuggestColorPaletteOutput } from '@/ai/flows/suggest-color-palette';
import { suggestTypographyPairings, type SuggestTypographyPairingsOutput } from '@/ai/flows/suggest-typography-pairings';

import { useToast } from "@/hooks/use-toast";
import { Skeleton } from '@/components/ui/skeleton';

export type AnalysisResult = {
  analysis: AnalyzeScreenshotOutput;
  style: ExtractDesignStylesOutput;
  palette: SuggestColorPaletteOutput;
  typography: SuggestTypographyPairingsOutput;
};

export default function HomePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUri = e.target?.result as string;
        setUploadedImage(dataUri);
        handleAnalyze(dataUri);
      };
      reader.readAsDataURL(file);
    }
    // Reset file input to allow re-uploading the same file
    if(fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  const handleAnalyze = async (photoDataUri: string) => {
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const [analysis, style, palette, typography] = await Promise.all([
        analyzeScreenshot({ photoDataUri }),
        extractDesignStyles({ photoDataUri }),
        suggestColorPalette({ photoDataUri }),
        suggestTypographyPairings({ photoDataUri }),
      ]);

      setAnalysisResult({ analysis, style, palette, typography });

    } catch (error) {
      console.error("Analysis failed:", error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Something went wrong while analyzing your image. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewAnalysis = () => {
    setUploadedImage(null);
    setAnalysisResult(null);
    setIsLoading(false);
    fileInputRef.current?.click();
  }

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      <main className="flex-grow overflow-hidden">
        <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {isLoading && <LoadingSkeleton />}
          {!isLoading && (analysisResult && uploadedImage) ? (
             <ResultsView result={analysisResult} image={uploadedImage} onNewAnalysis={handleNewAnalysis} />
          ) : (
            <DefaultView onUpload={triggerFileUpload} />
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </main>
      <Footer />
    </div>
  );
}

const LoadingSkeleton = () => (
    <div className="grid md:grid-cols-2 gap-20 items-start">
      <div className="space-y-6">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-full mt-4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
      </div>
      <div className="space-y-6">
        <Skeleton className="h-96 w-full rounded-lg" />
        <div className="grid grid-cols-3 gap-4">
            <Skeleton className="h-24 w-full rounded-lg" />
            <Skeleton className="h-24 w-full rounded-lg" />
            <Skeleton className="h-24 w-full rounded-lg" />
        </div>
      </div>
    </div>
)
