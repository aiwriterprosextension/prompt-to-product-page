
import React from 'react';
import { Settings, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface ArticleSettings {
  template: string;
  tone: string;
  targetKeywords: string;
  length: string;
  includeAffiliateLinks: boolean;
}

interface ArticleSettingsPanelProps {
  settings: ArticleSettings;
  onSettingsChange: (settings: ArticleSettings) => void;
  onGenerate: () => void;
}

const ArticleSettingsPanel = ({ settings, onSettingsChange, onGenerate }: ArticleSettingsPanelProps) => {
  const updateSetting = (key: keyof ArticleSettings, value: any) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  const templates = [
    { value: 'product-review', label: 'Product Review', description: 'Comprehensive review with pros/cons' },
    { value: 'buying-guide', label: 'Buying Guide', description: 'Analysis and recommendations' },
    { value: 'seo-product-page', label: 'SEO Product Page', description: 'Search-optimized product content' },
    { value: 'feature-focus', label: 'Feature Focus', description: 'Highlight key product features' },
    { value: 'problem-solution', label: 'Problem Solution', description: 'Address customer pain points' }
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Article Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="template-select">Template Type</Label>
          <Select value={settings.template} onValueChange={(value) => updateSetting('template', value)}>
            <SelectTrigger id="template-select">
              <SelectValue placeholder="Choose template" />
            </SelectTrigger>
            <SelectContent>
              {templates.map((template) => (
                <SelectItem key={template.value} value={template.value}>
                  <div>
                    <div className="font-medium">{template.label}</div>
                    <div className="text-xs text-muted-foreground">{template.description}</div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="tone-select">Article Tone</Label>
          <Select value={settings.tone} onValueChange={(value) => updateSetting('tone', value)}>
            <SelectTrigger id="tone-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional & Authoritative</SelectItem>
              <SelectItem value="casual">Casual & Friendly</SelectItem>
              <SelectItem value="enthusiastic">Enthusiastic & Excited</SelectItem>
              <SelectItem value="analytical">Analytical & Data-Driven</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="keywords-input">Target Keywords</Label>
          <Input 
            id="keywords-input"
            placeholder="Enter keywords separated by commas"
            value={settings.targetKeywords}
            onChange={(e) => updateSetting('targetKeywords', e.target.value)}
          />
          <p className="text-xs text-muted-foreground mt-1">
            These will be naturally integrated into your article
          </p>
        </div>
        
        <div>
          <Label htmlFor="length-select">Article Length</Label>
          <Select value={settings.length} onValueChange={(value) => updateSetting('length', value)}>
            <SelectTrigger id="length-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">Short (300-500 words)</SelectItem>
              <SelectItem value="medium">Medium (500-800 words)</SelectItem>
              <SelectItem value="long">Long (800-1200 words)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="affiliate-links" 
            checked={settings.includeAffiliateLinks}
            onCheckedChange={(checked) => updateSetting('includeAffiliateLinks', !!checked)}
          />
          <Label htmlFor="affiliate-links" className="text-sm">
            Include affiliate link structure
          </Label>
        </div>

        <Button 
          onClick={onGenerate}
          className="w-full"
          size="lg"
        >
          <Wand2 className="w-4 h-4 mr-2" />
          Generate Article
        </Button>
      </CardContent>
    </Card>
  );
};

export default ArticleSettingsPanel;
