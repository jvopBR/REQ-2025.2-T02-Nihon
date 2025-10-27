"use client"
import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <div className="w-full flex gap-6 items-start">
      {/* thumbnails */}
      <div className="hidden sm:flex flex-col gap-3">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setIndex(i)}
            className={`w-16 h-16 rounded-lg overflow-hidden border ${i === index ? 'ring-2 ring-primary' : 'border-gray-200'}`}
          >
            <Image src={src} alt={`thumb-${i}`} width={64} height={64} className="object-cover" />
          </button>
        ))}
      </div>

      {/* main */}
      <div className="relative flex-1 flex items-center justify-center">
        <button onClick={prev} aria-label="previous" className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md -ml-2 sm:-ml-4">
          ‹
        </button>

        <div className="bg-white rounded-xl p-4 shadow-inner w-full max-w-full flex items-center justify-center">
          <Image src={images[index]} alt={`product-${index}`} width={800} height={600} className="w-full h-auto object-contain" />
        </div>

        <button onClick={next} aria-label="next" className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md -mr-2 sm:-mr-4">
          ›
        </button>
      </div>
    </div>
  );
}
