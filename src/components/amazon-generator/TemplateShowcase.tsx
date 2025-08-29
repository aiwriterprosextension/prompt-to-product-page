
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TemplateShowcase = () => {
  const templates = [
    {
      title: "Product Review Template",
      type: "product-review",
      description: "Comprehensive review format with ratings, features, and customer feedback",
      preview: `# {{productTitle}} Review: Is This {{category}} Worth {{price}}?

**Quick Stats:** {{rating}}/5 ⭐ ({{votes}} reviews) | {{price}} | {{availability}}

## Product Overview
The {{productName}} from {{brand}} has captured attention of {{votes}} Amazon customers...

## Key Features That Stand Out
✓ {{feature1}}
✓ {{feature2}}
✓ {{feature3}}

## What Real Customers Say
> "{{customerReview}}" - ⭐⭐⭐⭐⭐

## The Bottom Line
At {{price}}, this product offers {{valueProposition}}.`,
      tags: ["SEO Optimized", "Customer Reviews", "Detailed Analysis"]
    },
    {
      title: "Buying Guide Template",
      type: "buying-guide",
      description: "Analysis and recommendation format for informed purchasing decisions",
      preview: `# {{category}} Buying Guide: {{productName}} Analysis

## At a Glance
- **Product:** {{productTitle}}
- **Price Point:** {{price}}
- **Customer Satisfaction:** {{rating}}/5

## Who Should Consider This Product?
This product is designed for users who need {{targetUse}}...

## Feature Analysis
{{detailedFeatures}}

## Investment Analysis
**Recommendation:** {{recommendation}} based on {{criteria}}`,
      tags: ["Buyer-Focused", "Decision Support", "Feature Analysis"]
    }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {templates.map((template, index) => (
        <Card key={index} className="gradient-card">
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <CardTitle className="text-xl">{template.title}</CardTitle>
              <Badge variant="secondary">{template.type}</Badge>
            </div>
            <p className="text-muted-foreground">{template.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {template.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/30 p-4 rounded border">
              <p className="text-xs text-muted-foreground mb-2">Template Preview:</p>
              <pre className="text-xs font-mono whitespace-pre-wrap text-foreground/80 max-h-64 overflow-y-auto">
                {template.preview}
              </pre>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TemplateShowcase;
