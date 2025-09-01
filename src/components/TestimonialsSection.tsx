
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "I built 10 affiliate posts in one weekend using AMZ Extractor. It's a game-changer.",
    author: "Nina",
    title: "Niche Site Builder",
    rating: 5,
    result: "10 posts in 1 weekend"
  },
  {
    quote: "Cut my product research time from 3 hours to 15 minutes. Now I can focus on creating content.",
    author: "Marcus",
    title: "Content Creator",
    rating: 5,
    result: "92% time savings"
  },
  {
    quote: "The bulk extraction feature is incredible. I can analyze entire categories in minutes.",
    author: "Sarah",
    title: "Affiliate Marketer",
    rating: 5,
    result: "100+ products analyzed daily"
  },
  {
    quote: "Perfect for competitive analysis. I track my competitors' pricing across multiple marketplaces.",
    author: "David",
    title: "E-commerce Seller",
    rating: 5,
    result: "15 marketplaces monitored"
  },
  {
    quote: "The CSV export saves me hours of manual data entry. My VA loves how organized everything is.",
    author: "Jennifer",
    title: "Agency Owner",
    rating: 5,
    result: "5 hours saved per project"
  },
  {
    quote: "Finally, a tool that actually works across all Amazon domains. Worth every penny.",
    author: "Carlos",
    title: "International Marketer",
    rating: 5,
    result: "18 marketplaces supported"
  },
  {
    quote: "The auto-generated affiliate links feature alone pays for itself. Super convenient.",
    author: "Emily",
    title: "Blogger",
    rating: 5,
    result: "50% faster link generation"
  },
  {
    quote: "I use this daily for my product review blog. The data accuracy is spot-on every time.",
    author: "Tom",
    title: "Review Site Owner",
    rating: 5,
    result: "99.9% accuracy rate"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center">
          <div>
            <div className="text-3xl font-bold text-[#FF9900] dark:text-[#FF9900]">10,000+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FF9900] dark:text-[#FF9900]">18+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Marketplaces</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FF9900] dark:text-[#FF9900]">4.9/5</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">User Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FF9900] dark:text-[#FF9900]">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Support</div>
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border dark:border-gray-700 transition-colors duration-300">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          <div className="text-center max-w-3xl mx-auto">
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-2xl font-medium text-gray-900 dark:text-white mb-6 leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center">
              <cite className="text-lg font-semibold text-gray-900 dark:text-white not-italic">
                {currentTestimonial.author}
              </cite>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {currentTestimonial.title}
              </div>
              <div className="mt-2 px-3 py-1 bg-[#FF9900]/10 dark:bg-[#FF9900]/20 rounded-full">
                <span className="text-sm font-medium text-[#FF9900] dark:text-[#FF9900]">
                  {currentTestimonial.result}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-[#FF9900]'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Trust Line */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-8 font-medium text-center">
          Used by 10,000+ creators, marketers, and sellers worldwide
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
