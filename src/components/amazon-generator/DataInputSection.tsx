
import React, { useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface DataInputSectionProps {
  onDataSubmit: (data: any) => void;
}

const DataInputSection = ({ onDataSubmit }: DataInputSectionProps) => {
  const [activeTab, setActiveTab] = useState('single');
  const [jsonData, setJsonData] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const validateAmazonData = (data: any): boolean => {
    const required = ['productTitle', 'price', 'productASIN', 'productURL'];
    return required.every(field => data[field]);
  };

  const handleJSONSubmit = () => {
    try {
      const parsed = JSON.parse(jsonData);
      if (validateAmazonData(parsed)) {
        onDataSubmit(parsed);
        toast.success('Product data validated and loaded!');
      } else {
        toast.error('Invalid Amazon product data format');
      }
    } catch (error) {
      toast.error('Invalid JSON format');
    }
  };

  const handleFileUpload = (uploadedFiles: FileList | null) => {
    if (!uploadedFiles) return;
    
    const fileArray = Array.from(uploadedFiles);
    const jsonFiles = fileArray.filter(file => 
      file.type === 'application/json' || file.name.endsWith('.json')
    );

    if (jsonFiles.length === 0) {
      toast.error('Please upload JSON files only');
      return;
    }

    setFiles([...files, ...jsonFiles]);
    toast.success(`${jsonFiles.length} file(s) added`);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const processBulkFiles = async () => {
    if (files.length === 0) {
      toast.error('Please upload JSON files first');
      return;
    }

    const processedData = [];
    
    for (const file of files) {
      try {
        const text = await file.text();
        const data = JSON.parse(text);
        if (validateAmazonData(data)) {
          processedData.push(data);
        }
      } catch (error) {
        toast.error(`Error processing ${file.name}`);
      }
    }

    if (processedData.length > 0) {
      onDataSubmit(processedData);
      toast.success(`${processedData.length} products loaded successfully!`);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Product Data Input
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="single">Single Product</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Products</TabsTrigger>
          </TabsList>

          <TabsContent value="single" className="space-y-4 mt-6">
            <div>
              <Label htmlFor="json-input">Paste Amazon Product JSON</Label>
              <Textarea
                id="json-input"
                placeholder='{"productTitle": "Example Product", "price": "$29.99", ...}'
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
              />
            </div>
            <Button 
              onClick={handleJSONSubmit}
              disabled={!jsonData.trim()}
              className="w-full"
            >
              Validate & Load Data
            </Button>
          </TabsContent>

          <TabsContent value="bulk" className="space-y-4 mt-6">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging 
                  ? 'border-primary bg-primary/5' 
                  : 'border-muted-foreground/25 hover:border-primary/50'
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-lg font-medium mb-2">Drop JSON files here</p>
              <p className="text-muted-foreground mb-4">or click to browse</p>
              <Button
                variant="outline"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                Choose Files
              </Button>
              <input
                id="file-upload"
                type="file"
                multiple
                accept=".json,application/json"
                className="hidden"
                onChange={(e) => handleFileUpload(e.target.files)}
              />
            </div>

            {files.length > 0 && (
              <div className="space-y-2">
                <Label>Selected Files ({files.length})</Label>
                <div className="max-h-32 overflow-y-auto space-y-1">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                      <span className="text-sm truncate">{file.name}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFile(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={processBulkFiles}
                  className="w-full"
                >
                  Process {files.length} Files
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DataInputSection;
