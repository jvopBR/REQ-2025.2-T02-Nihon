import { useState } from "react";
import Brand from "./Brand";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

type BrandSectionProps = {
  brands: any[];
};

export default function BrandSection({ brands }: BrandSectionProps) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 6;

  const displayedBrands = brands.slice(startIndex, startIndex + visibleCount);

  const handleNext = () => {
    if (startIndex + visibleCount < brands.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  // Condições
  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + visibleCount < brands.length;

  return (
    <div className="bg-white w-full rounded-3xl shadow-sm px-4 py-6 sm:px-8 sm:py-8 overflow-hidden">
      <p className="text-black text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Marcas relacionadas</p>
      
      <div className="flex items-center justify-center gap-4">
        {/* Setinha esquerda */}
        <SlArrowLeft 
          onClick={canGoLeft ? handlePrev : undefined}
          className={`text-3xl transition ${
            canGoLeft ? "text-black cursor-pointer transition hover:scale-125" : "text-gray-300"
          }`}
        />

        {/* Brands */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16 w-full sm:w-auto">
          {displayedBrands.map((brand, index) => (
            <Brand key={startIndex + index} {...brand} />
          ))}
        </div>

        {/* Setinha direita */}
        <SlArrowRight
          onClick={canGoRight ? handleNext : undefined}
          className={`text-3xl transition ${
            canGoRight ? "text-black cursor-pointer transition hover:scale-125" : "text-gray-300"
          }`}
        />
      </div>
    </div>
  );
}
