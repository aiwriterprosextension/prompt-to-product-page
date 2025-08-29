
import React, { useState } from 'react';
import { Eye, Download, Copy, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface ArticlePreviewProps {
  article: string;
  productData: any;
}

const ArticlePreview = ({ article, productData }: ArticlePreviewProps) => {
  const [viewMode, setViewMode] = useState<'preview' | 'raw'>('preview');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(article);
    toast.success('Article copied to clipboard!');
  };

  const downloadArticle = () => {
    if (!article) {
      toast.error('No article to download');
      return;
    }

    const blob = new Blob([article], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${productData?.productTitle || 'article'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Article downloaded successfully!');
  };

  const wordCount = article ? article.split(' ').length : 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Article Preview
          </CardTitle>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={copyToClipboard}
              disabled={!article}
            >
              <Copy className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={downloadArticle}
              disabled={!article}
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
        {article && (
          <div className="text-sm text-muted-foreground flex gap-4">
            <span>{wordCount} words</span>
            <span>{readingTime} min read</span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {!article ? (
          <div className="text-center py-12 text-muted-foreground">
            <RefreshCw className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No article generated yet</p>
            <p className="text-sm">Upload product data and generate an article to see the preview</p>
          </div>
        ) : (
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'preview' | 'raw')}>
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="raw">Raw Text</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-4">
              <div className="prose prose-sm max-w-none">
                <div 
                  className="bg-white p-6 rounded border min-h-[400px] max-h-[600px] overflow-y-auto"
                  dangerouslySetInnerHTML={{ 
                    __html: article.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, '<strong>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              </div>
            </TabsContent>

            <TabsContent value="raw" className="mt-4">
              <div className="bg-muted/50 p-4 rounded border min-h-[400px] max-h-[600px] overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm font-mono">
                  {article}
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
};

export default ArticlePreview;
