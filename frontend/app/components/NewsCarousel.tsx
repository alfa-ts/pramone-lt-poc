'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './ImageWithFallback';
import Link from 'next/link';

interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  slug: string;
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
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Carousel Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-full mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{news[currentSlide].date}</span>
              </div>
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full mb-4 ml-2 text-sm">
                {news[currentSlide].category}
              </div>
              <h1 className="text-5xl text-gray-900 mb-6 line-clamp-2">
                {news[currentSlide].title}
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {news[currentSlide].excerpt}
              </p>
              <div className="flex gap-4">
                <Link href={`/naujienos/${news[currentSlide].slug}`}>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8">
                    Plačiau
                  </Button>
                </Link>
                <Link href="/naujienos">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Visos naujienos
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={news[currentSlide].image || '/images/placeholder.jpg'}
                  alt={news[currentSlide].alt}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500 rounded-3xl opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              size="icon"
              variant="outline"
              onClick={prevSlide}
              className="rounded-full border-gray-300 hover:bg-amber-50 hover:border-amber-500"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {news.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-amber-500' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              size="icon"
              variant="outline"
              onClick={nextSlide}
              className="rounded-full border-gray-300 hover:bg-amber-50 hover:border-amber-500"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

