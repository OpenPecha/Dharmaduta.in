
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { Download, Upload, Loader2 } from 'lucide-react';

const BackgroundRemover = () => {
  const [originalImage, setOriginalImage] = useState<string>('/lovable-uploads/ffde9819-f58d-444e-95d4-ee6b4323a186.png');
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setOriginalImage(url);
      setProcessedImage(null);
      setError(null);
    }
  };

  const handleRemoveBackground = async () => {
    if (!originalImage) return;

    setIsProcessing(true);
    setError(null);

    try {
      // Load the image
      const response = await fetch(originalImage);
      const blob = await response.blob();
      const imageElement = await loadImage(blob);

      // Remove background
      const resultBlob = await removeBackground(imageElement);
      const resultUrl = URL.createObjectURL(resultBlob);
      setProcessedImage(resultUrl);
    } catch (err) {
      console.error('Background removal failed:', err);
      setError('Failed to remove background. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'image-no-background.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const processDefaultImage = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      // Load the uploaded Buddhist manuscript image
      const response = await fetch('/lovable-uploads/ffde9819-f58d-444e-95d4-ee6b4323a186.png');
      const blob = await response.blob();
      const imageElement = await loadImage(blob);

      // Remove background
      const resultBlob = await removeBackground(imageElement);
      const resultUrl = URL.createObjectURL(resultBlob);
      setProcessedImage(resultUrl);
    } catch (err) {
      console.error('Background removal failed:', err);
      setError('Failed to remove background. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">AI Background Remover</CardTitle>
            <p className="text-center text-muted-foreground">
              Remove backgrounds from images using AI
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Upload */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex gap-4">
                <Button
                  onClick={processDefaultImage}
                  disabled={isProcessing}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  {isProcessing ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Upload className="mr-2 h-4 w-4" />
                  )}
                  Process Buddhist Manuscript
                </Button>
                
                <label className="cursor-pointer">
                  <Button variant="outline" asChild>
                    <span>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Different Image
                    </span>
                  </Button>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {originalImage && originalImage !== '/lovable-uploads/ffde9819-f58d-444e-95d4-ee6b4323a186.png' && (
                <Button
                  onClick={handleRemoveBackground}
                  disabled={isProcessing}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  {isProcessing ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    'Remove Background'
                  )}
                </Button>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-destructive text-center">{error}</p>
              </div>
            )}

            {/* Image Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Original Image */}
              <div className="space-y-2">
                <h3 className="font-semibold text-center">Original Image</h3>
                <div className="border rounded-lg overflow-hidden bg-white">
                  <img
                    src={originalImage}
                    alt="Original"
                    className="w-full h-auto max-h-96 object-contain mx-auto"
                  />
                </div>
              </div>

              {/* Processed Image */}
              <div className="space-y-2">
                <h3 className="font-semibold text-center">Background Removed</h3>
                <div className="border rounded-lg overflow-hidden bg-gray-100 bg-opacity-50 bg-[linear-gradient(45deg,#f0f0f0_25%,transparent_25%),linear-gradient(-45deg,#f0f0f0_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f0f0f0_75%),linear-gradient(-45deg,transparent_75%,#f0f0f0_75%)] bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]">
                  {processedImage ? (
                    <img
                      src={processedImage}
                      alt="Background Removed"
                      className="w-full h-auto max-h-96 object-contain mx-auto"
                    />
                  ) : (
                    <div className="h-96 flex items-center justify-center text-muted-foreground">
                      {isProcessing ? (
                        <div className="text-center">
                          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
                          <p>Processing image...</p>
                        </div>
                      ) : (
                        <p>Processed image will appear here</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Download Button */}
            {processedImage && (
              <div className="text-center">
                <Button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Result
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BackgroundRemover;
