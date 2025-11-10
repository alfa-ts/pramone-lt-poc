'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './ImageWithFallback';
import Link from 'next/link';

interface Partner {
  name: string;
  logo?: string;
  extra?: string;
}

interface ModernPartnersSliderProps {
  partners: Partner[];
  title: string;
}

export function ModernPartnersSlider({ partners, title }: ModernPartnersSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  if (!partners || partners.length === 0) {
    return null;
  }

  // Number of items to show at once (responsive)
  const itemsPerView = 4;
  const maxIndex = Math.max(0, partners.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bendradarbiaujame su pirmaujančiomis Lietuvos ir tarptautinėmis organizacijomis,
            kuriant tvirtesnę verslo bendruomenę
          </p>
        </div>

        <div 
          className="relative px-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Previous Button */}
          <Button
            size="icon"
            variant="outline"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full border-gray-300 bg-white hover:bg-amber-50 hover:border-amber-500 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                >
                  <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-amber-200 p-8 aspect-square">
                    <div className="text-center">
                      {partner.logo ? (
                        <ImageWithFallback
                          src={partner.logo}
                          alt={partner.name || 'Partner'}
                          className="w-full h-20 object-contain mb-3"
                        />
                      ) : (
                        <div className="w-20 h-20 mx-auto mb-3 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300">
                          <span className="text-3xl group-hover:scale-110 transition-transform text-amber-600 group-hover:text-white">
                            {partner.name ? partner.name.charAt(0).toUpperCase() : '?'}
                          </span>
                        </div>
                      )}
                      <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors font-medium">
                        {partner.name || 'Partner'}
                      </div>
                      {partner.extra && (
                        <div className="text-xs text-gray-500 mt-1">
                          {partner.extra}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <Button
            size="icon"
            variant="outline"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full border-gray-300 bg-white hover:bg-amber-50 hover:border-amber-500 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-amber-500' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Link href="/apie/partneriai" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors group">
            <span>Visi partneriai</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

