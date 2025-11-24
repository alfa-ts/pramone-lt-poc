'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './ImageWithFallback';
import Link from 'next/link';

interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  type: string;
}

interface NewsCarouselProps {
  news: NewsItem[];
}

export function NewsCarousel({ news }: NewsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!news || news.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <section className="relative bg-white overflow-hidden lg:max-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-amber-50 to-transparent opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-400 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-amber-200 text-amber-700 rounded-xl shadow-sm">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{news[currentSlide].date}</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl shadow-lg text-sm">
                {news[currentSlide].category}
              </div>
            </div>

            {/* Title + Description Block */}
            <div className="flex flex-col lg:h-[400px]">
              {/* Title */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight lg:max-h-[230px] lg:overflow-hidden mb-6">
                {news[currentSlide].title}
              </h1>

              {/* Description */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl lg:flex-1 lg:overflow-hidden">
                {news[currentSlide].excerpt}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href={`/${news[currentSlide].type === 'renginys' ? 'renginiai' : 'naujienos'}/${news[currentSlide].slug}`}>
                <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all group">
                  Plačiau
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/naujienos-ir-renginiai">
                <Button 
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-amber-500 px-8 py-6 text-lg"
                >
                  Visos naujienos
                </Button>
              </Link>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-6 pt-8">
              <Button
                size="icon"
                variant="outline"
                onClick={prevSlide}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-gray-300 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
              </Button>
              
              {/* Dots Indicator */}
              <div className="flex gap-2 lg:gap-3">
                {news.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 lg:h-2.5 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'w-8 lg:w-12 bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg' 
                        : 'w-2 lg:w-2.5 bg-gray-300 hover:bg-amber-300'
                    }`}
                  />
                ))}
              </div>

              <Button
                size="icon"
                variant="outline"
                onClick={nextSlide}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-gray-300 hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all shadow-lg"
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </Button>
            </div>
          </div>

          {/* Right: Large Hero Image */}
          <div className="order-1 lg:order-2 relative">
            {/* Main Image Container */}
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity scale-105"></div>
              
              {/* Image */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={news[currentSlide].image || '/images/placeholder.svg'}
                  alt={`${news[currentSlide].title} nuotrauka`}
                  className="w-full h-[500px] lg:h-[650px] xl:h-[750px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl opacity-20 -z-10"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-700 rounded-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

