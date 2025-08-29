
import React from 'react';

// Amazon Product Data Interface
interface AmazonProductData {
  productTitle: string;
  price: string;
  productASIN: string;
  productURL: string;
  brand: string;
  averageRating: string;
  totalVotes: number;
  productImages: Array<{
    url: string;
    alt: string;
    originalUrl: string;
  }>;
  aboutThisItem: string[];
  specifications: Record<string, string>;
  productDescription: string;
  reviewsData: Array<{
    text: string;
    title: string;
    rating: string;
    helpful: number;
  }>;
  availability: string;
  shippingInfo: string;
  breadcrumbs: Array<{
    text: string;
    url: string;
  }>;
  extractedAt: string;
  amazonSite: string;
  locale: string;
}

interface ArticleSettings {
  template: string;
  tone: string;
  targetKeywords: string;
  length: string;
  includeAffiliateLinks: boolean;
}

// Template Processing Utilities
const templateHelpers = {
  cleanText: (text: string): string => {
    return text?.replace(/\s+/g, ' ').trim() || '';
  },
  
  extractProductName: (title: string): string => {
    return title.split(',')[0];
  },
  
  getBrandName: (brand: string): string => {
    return brand.replace('Visit the ', '').replace(' Store', '');
  },
  
  getValueProposition: (rating: string, price: string): string => {
    const numRating = parseFloat(rating);
    const numPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    
    if (numRating >= 4.5 && numPrice < 20) return 'excellent value for money';
    if (numRating >= 4.0) return 'solid performance at this price point';
    return 'reasonable option for budget-conscious buyers';
  },
  
  getMainCategory: (breadcrumbs: any[]): string => {
    return breadcrumbs?.[0]?.text || 'Product';
  },
  
  truncateText: (text: string, maxLength: number): string => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  },

  getRecommendation: (rating: string, votes: number, price: string): string => {
    const numRating = parseFloat(rating);
    if (numRating >= 4.5 && votes > 100) return 'Highly Recommended';
    if (numRating >= 4.0) return 'Recommended with Considerations';
    return 'Consider Alternatives';
  }
};

// Article Templates
const templates = {
  'product-review': `# {{productTitle}} Review: Is This {{getMainCategory(breadcrumbs)}} Worth {{price}}?

**Quick Stats:** {{averageRating}}/5 ⭐ ({{totalVotes}} reviews) | {{price}} | {{availability}}

## Product Overview
The {{extractProductName(productTitle)}} from {{getBrandName(brand)}} has captured the attention of {{totalVotes}} Amazon customers, earning an impressive {{averageRating}}/5 rating. This comprehensive review will help you decide if this product meets your needs.

## Key Features That Stand Out
- {{aboutThisItem[0]}}
- {{aboutThisItem[1]}}
- {{aboutThisItem[2]}}
- {{aboutThisItem[3]}}

## What Real Customers Say
> "{{reviewsData[0].text}}" - {{reviewsData[0].rating}}/5 ⭐

> "{{reviewsData[1].text}}" - {{reviewsData[1].rating}}/5 ⭐

## Specifications
{{specifications}}

## The Bottom Line
At {{price}}, the {{extractProductName(productTitle)}} offers {{getValueProposition(averageRating, price)}}. With {{totalVotes}} customer reviews averaging {{averageRating}} stars, this product has proven its worth in the marketplace.

**[Check Current Price on Amazon]({{productURL}})**`,

  'buying-guide': `# {{getMainCategory(breadcrumbs)}} Buying Guide: {{extractProductName(productTitle)}} Analysis

## At a Glance
- **Product:** {{productTitle}}
- **Brand:** {{getBrandName(brand)}}
- **Price Point:** {{price}}
- **Customer Satisfaction:** {{averageRating}}/5 ({{totalVotes}} reviews)
- **Availability:** {{availability}}

## Who Should Consider This Product?
This product is designed for users who need reliable performance and quality features in the {{getMainCategory(breadcrumbs)}} category.

## Feature Analysis

### Primary Features
{{aboutThisItem[0]}}

This feature addresses the core functionality users expect from this type of product.

### Additional Benefits
{{aboutThisItem[1]}}

{{aboutThisItem[2]}}

## Customer Feedback Analysis
Based on {{totalVotes}} verified reviews, customers consistently highlight:

- Quality and durability
- Value for money at {{price}}
- {{reviewsData[0].text}}

## Investment Analysis
**Price:** {{price}}
**Rating:** {{averageRating}}/5 stars
**Recommendation:** {{getRecommendation(averageRating, totalVotes, price)}}

**[View Latest Pricing on Amazon]({{productURL}})**`,

  'seo-product-page': `# {{productTitle}} | {{price}} | {{averageRating}} Stars

## Product Highlights
✓ {{aboutThisItem[0]}}
✓ {{aboutThisItem[1]}}
✓ {{aboutThisItem[2]}}
✓ {{aboutThisItem[3]}}

## Customer Reviews: {{averageRating}}/5 ⭐
**{{totalVotes}} verified Amazon reviews**

{{reviewsData[0].text}}

## Complete Product Information
- **Brand:** {{getBrandName(brand)}}
- **Availability:** {{availability}}
- **ASIN:** {{productASIN}}
- **Category:** {{getMainCategory(breadcrumbs)}}

## Product Specifications
{{specifications}}

## Why Choose {{extractProductName(productTitle)}}?
With {{totalVotes}} customer reviews and an average rating of {{averageRating}} stars, this product has established itself as a reliable choice in the {{getMainCategory(breadcrumbs)}} category.

**[Buy Now on Amazon - {{price}}]({{productURL}})**`,

  'feature-focus': `# Why {{extractProductName(productTitle)}} Is Worth Your Attention

## The Numbers Don't Lie
{{averageRating}} stars from {{totalVotes}} customers | {{price}} price point

## Top Features That Matter

### 1. {{aboutThisItem[0]}}
This standout feature sets the product apart from competitors and directly addresses user needs.

### 2. {{aboutThisItem[1]}}
Another key advantage that customers consistently mention in their reviews.

### 3. {{aboutThisItem[2]}}
This feature adds significant value and justifies the {{price}} investment.

## Customer Experience Highlights
"{{reviewsData[0].text}}" - Verified Amazon Purchase

"{{reviewsData[1].text}}" - Verified Amazon Purchase

## Technical Details
{{specifications}}

## Final Thoughts
The {{extractProductName(productTitle)}} delivers on its promises, as evidenced by {{totalVotes}} customer reviews averaging {{averageRating}} stars.

**[Check Latest Price & Reviews]({{productURL}})**`,

  'problem-solution': `# Struggling with Your Current {{getMainCategory(breadcrumbs)}}? This {{price}} Alternative Has {{totalVotes}} Success Stories

## The Challenge
Many users face common problems with products in the {{getMainCategory(breadcrumbs)}} category:
- Reliability issues
- Poor value for money
- Lack of essential features

## The Solution: {{extractProductName(productTitle)}}

{{getBrandName(brand)}} designed this product to address exactly these issues:

**Key Solutions:**
- {{aboutThisItem[0]}}
- {{aboutThisItem[1]}}
- {{aboutThisItem[2]}}

## Proven Results
{{averageRating}} out of 5 stars from {{totalVotes}} real users proves this approach works.

### What Customers Say:
"{{reviewsData[0].text}}" - {{reviewsData[0].rating}}/5 stars

## Investment & Value
At {{price}}, this solution offers {{getValueProposition(averageRating, price)}}.

**[Get Your Solution Here]({{productURL}})**`
};

// Main Template Processor
export const processTemplate = (
  templateType: string, 
  product: AmazonProductData, 
  settings: ArticleSettings
): string => {
  let template = templates[templateType as keyof typeof templates];
  if (!template) {
    template = templates['product-review'];
  }

  let processed = template;
  
  // Replace all template variables
  processed = processed.replace(/\{\{productTitle\}\}/g, product.productTitle || '');
  processed = processed.replace(/\{\{price\}\}/g, product.price || '');
  processed = processed.replace(/\{\{averageRating\}\}/g, product.averageRating || '');
  processed = processed.replace(/\{\{totalVotes\}\}/g, product.totalVotes?.toString() || '0');
  processed = processed.replace(/\{\{availability\}\}/g, product.availability || '');
  processed = processed.replace(/\{\{productASIN\}\}/g, product.productASIN || '');
  processed = processed.replace(/\{\{productURL\}\}/g, product.productURL || '');
  
  // Helper function replacements
  processed = processed.replace(/\{\{getBrandName\(brand\)\}\}/g, templateHelpers.getBrandName(product.brand || ''));
  processed = processed.replace(/\{\{extractProductName\(productTitle\)\}\}/g, templateHelpers.extractProductName(product.productTitle || ''));
  processed = processed.replace(/\{\{getMainCategory\(breadcrumbs\)\}\}/g, templateHelpers.getMainCategory(product.breadcrumbs || []));
  processed = processed.replace(/\{\{getValueProposition\(averageRating,\s*price\)\}\}/g, templateHelpers.getValueProposition(product.averageRating || '0', product.price || '0'));
  processed = processed.replace(/\{\{getRecommendation\(averageRating,\s*totalVotes,\s*price\)\}\}/g, templateHelpers.getRecommendation(product.averageRating || '0', product.totalVotes || 0, product.price || '0'));
  
  // Process features (first 4)
  product.aboutThisItem?.slice(0, 4).forEach((feature, index) => {
    const regex = new RegExp(`\\{\\{aboutThisItem\\[${index}\\]\\}\\}`, 'g');
    processed = processed.replace(regex, templateHelpers.cleanText(feature));
  });
  
  // Process reviews (first 3)
  product.reviewsData?.slice(0, 3).forEach((review, index) => {
    const textRegex = new RegExp(`\\{\\{reviewsData\\[${index}\\]\\.text\\}\\}`, 'g');
    const ratingRegex = new RegExp(`\\{\\{reviewsData\\[${index}\\]\\.rating\\}\\}`, 'g');
    
    processed = processed.replace(textRegex, templateHelpers.truncateText(review.text, 150));
    processed = processed.replace(ratingRegex, review.rating);
  });

  // Process specifications
  if (product.specifications) {
    const specText = Object.entries(product.specifications)
      .map(([key, value]) => `**${key}:** ${value}`)
      .join('\n');
    processed = processed.replace(/\{\{specifications\}\}/g, specText);
  }
  
  // Apply settings modifications
  if (settings.targetKeywords) {
    processed = addKeywordsNaturally(processed, settings.targetKeywords);
  }

  if (settings.includeAffiliateLinks) {
    processed = addAffiliateStructure(processed);
  }
  
  return processed;
};

// Helper functions for processing
const addKeywordsNaturally = (content: string, keywords: string): string => {
  const keywordList = keywords.split(',').map(k => k.trim());
  let modified = content;
  
  keywordList.forEach(keyword => {
    if (keyword && !modified.toLowerCase().includes(keyword.toLowerCase())) {
      // Add keyword in a natural way (this is a simplified implementation)
      modified = modified.replace(/\. /, `. When considering ${keyword}, `);
    }
  });
  
  return modified;
};

const addAffiliateStructure = (content: string): string => {
  // Add affiliate disclosure and structure
  const disclosure = `\n\n---\n**Affiliate Disclosure:** This article contains affiliate links. When you purchase through these links, we may earn a commission at no additional cost to you.\n`;
  return content + disclosure;
};

export { templates, templateHelpers, type AmazonProductData, type ArticleSettings };
