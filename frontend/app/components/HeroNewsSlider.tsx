"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type SliderItem = {
  title: string;
  image: string;
  alt?: string;
  date?: string;
  slug?: string;
};

type HeroNewsSliderProps = {
  items: SliderItem[];
  autoPlayMs?: number;
};

export default function HeroNewsSlider({ items, autoPlayMs = 6000 }: HeroNewsSliderProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isPointerInside = useRef(false);

  const getOptimizedSrc = (url?: string) => {
    if (!url) return url as unknown as string;
    try {
      const u = new URL(url);
      if (u.hostname.endsWith("cdn.sanity.io")) {
        if (!u.searchParams.has("w")) u.searchParams.set("w", "2000");
        u.searchParams.set("auto", "format");
        return u.toString();
      }
    } catch {
      // ignore
    }
    return url;
  };

  const goTo = (idx: number) => {
    if (items.length === 0) return;
    const next = (idx + items.length) % items.length;
    setCurrent(next);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    if (items.length <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPointerInside.current) {
        setCurrent((c) => (c + 1) % items.length);
      }
    }, autoPlayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [items.length, autoPlayMs]);

  if (!items || items.length === 0) return null;

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100"
      onMouseEnter={() => {
        isPointerInside.current = true;
      }}
      onMouseLeave={() => {
        isPointerInside.current = false;
      }}
    >
      <div className="relative h-[50vh] min-h-[420px] md:min-h-[520px] lg:min-h-[620px] xl:min-h-[700px] 2xl:min-h-[780px]">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)`, width: `${items.length * 100}%` }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="relative w-full shrink-0 h-full">
              <Link href={item.slug ? `/naujienos/${item.slug}` : "#"} className="block h-full relative">
                {item.image ? (
                  <Image
                    src={getOptimizedSrc(item.image)}
                    alt={item.alt || item.title}
                    fill
                    priority={idx === 0}
                    quality={90}
                    sizes="100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-yellow-400" />
                )}

                {/* gradient overlay */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* content */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-10">
                  <div className="max-w-5xl mx-auto">
                    {item.date && (
                      <div className="inline-block text-[11px] md:text-xs font-bold tracking-wide uppercase bg-white/90 text-blue-900 px-2 py-1 rounded shadow-sm">
                        {item.date}
                      </div>
                    )}
                    <h2 className="mt-3 md:mt-4 text-2xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Controls */}
        {items.length > 1 && (
          <>
            <button
              aria-label="Previous slide"
              onClick={prev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 hover:bg-white text-blue-900 shadow p-2 md:p-3"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              onClick={next}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 hover:bg-white text-blue-900 shadow p-2 md:p-3"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 z-10">
              <div className="flex items-center justify-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      current === i ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}


