"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const items = [
  { id: 1, title: 'Lorem', img: '/images/automacao.png' },
  { id: 2, title: 'Lorem', img: '/images/refrigeracao.png' },
  { id: 3, title: 'Lorem', img: '/images/padaria2.png' },
  { id: 4, title: 'Lorem', img: '/images/mercado.png' },
  { id: 5, title: 'Lorem', img: '/images/padaria.png' },
  { id: 6, title: 'Lorem', img: '/images/mercado.png' },
];

export default function SimilarProducts() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      setIsDragging(true);
      startX = e.pageX - (track.getBoundingClientRect().left + window.scrollX);
      scrollLeft = track.scrollLeft;
      (e.target as Element).setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const x = e.pageX - (track.getBoundingClientRect().left + window.scrollX);
      const walk = (x - startX) * 1; // scroll-fast
      track.scrollLeft = scrollLeft - walk;
    };

    const onPointerUp = (e: PointerEvent) => {
      isDown = false;
      setIsDragging(false);
      try { (e.target as Element).releasePointerCapture(e.pointerId); } catch {}
    };

    track.addEventListener('pointerdown', onPointerDown);
    track.addEventListener('pointermove', onPointerMove);
    track.addEventListener('pointerup', onPointerUp);
    track.addEventListener('pointercancel', onPointerUp);
    track.addEventListener('pointerleave', onPointerUp);

    return () => {
      track.removeEventListener('pointerdown', onPointerDown);
      track.removeEventListener('pointermove', onPointerMove);
      track.removeEventListener('pointerup', onPointerUp);
      track.removeEventListener('pointercancel', onPointerUp);
      track.removeEventListener('pointerleave', onPointerUp);
    };
  }, []);

  const scrollByOffset = (offset: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="relative mt-8">
      <h2 className="text-lg font-semibold mb-4">Produtos Semelhantes</h2>

      {/* left arrow */}
      <button
        aria-label="scroll left"
        onClick={() => scrollByOffset(-240)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow hidden sm:inline-flex"
      >
        ‹
      </button>

      {/* right arrow */}
      <button
        aria-label="scroll right"
        onClick={() => scrollByOffset(240)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow hidden sm:inline-flex"
      >
        ›
      </button>

      <div
        ref={trackRef}
        style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
        className={`flex gap-4 overflow-x-auto pb-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {items.map((it) => (
          <Link key={it.id} href="/produtosDescricao" className="min-w-[160px] bg-white rounded-lg shadow p-4 flex-shrink-0 hover:scale-105 transition-transform">
            <div className="w-full h-28 bg-gray-50 rounded flex items-center justify-center mb-3">
              <Image src={it.img} alt={it.title} width={120} height={90} className="object-contain" />
            </div>
            <div className="text-sm text-center">{it.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
