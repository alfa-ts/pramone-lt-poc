"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface ImageModalProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageModal({
  src,
  alt,
  width = 1200,
  height = 800,
  className = "",
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable Image */}
      <div
        className={`relative group cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full rounded-lg"
        />
        
        {/* Overlay hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all rounded-lg flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-xl px-6 py-3 flex items-center gap-3 shadow-xl">
            <ZoomIn className="size-5 text-[#fe9a00]" />
            <span className="text-sm text-gray-900 font-medium">
              Spustelėkite peržiūrėti
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 size-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group z-10"
            aria-label="Uždaryti"
          >
            <X className="size-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Help text */}
          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm">
            Slinkite arba naudokite dviejų pirštų gestą priartinimui
          </div>

          {/* Image container - scrollable on mobile */}
          <div
            className="relative max-w-7xl max-h-full overflow-auto bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={width * 2}
              height={height * 2}
              className="w-auto h-auto max-w-none md:max-w-full"
              style={{ minWidth: "100%", minHeight: "100%" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

