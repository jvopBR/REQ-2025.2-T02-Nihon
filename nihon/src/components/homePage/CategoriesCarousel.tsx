"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function CategoriesCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const square_categories = [
    "SUPERMERCADO",
    "AÇOUGUE",
    "PADARIA",
    "REFRIGERAÇÃO",
    "AUTOMAÇÃO COMERCIAL",
  ];

  const square_categories_ref = [
    "Supermercado",
    "Açougue",
    "Padaria e Confeitaria",
    "Refrigeração Comercial",
    "Automação Comercial",
  ];

  const square_categories_img = [
    "/images/mercado.png",
    "/images/acougue.png",
    "/images/padaria.png",
    "/images/refrigeracao.png",
    "/images/automacao.png",
  ];

  useEffect(() => {
    if (!carouselRef.current) return;

    const children = carouselRef.current.children;
    const middleIndex = Math.floor(children.length / 2);
    const middleItem = children[middleIndex] as HTMLElement;

    carouselRef.current.scrollTo({
      left:
        middleItem.offsetLeft -
        carouselRef.current.offsetWidth / 2 +
        middleItem.offsetWidth / 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      ref={carouselRef}
      className="
        w-full flex gap-5 lg:gap-10 2xl:gap-20 items-center justify-start
        overflow-x-auto overflow-y-hidden 
        h-[200px] xl:h-[300px]
        snap-x snap-mandatory
        px-4
        sm:justify-center
      "
    >
      {square_categories.map((cat, i) => (
        <Link key={i} href={`/${encodeURIComponent(square_categories_ref[i])}/products`}>
          <motion.div
            className="
              w-[125px] h-[145px]
              lg:w-[150px] lg:h-[170px]
              xl:w-50 xl:h-60 
              bg-gray-200 flex flex-col items-center justify-center 
              shadow-md rounded-xl transition hover:scale-105
              snap-center
            "
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: i * 0.05 }}
          >
            <p className="text-gray-600 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-center">
              {cat}
            </p>

            <img
              src={square_categories_img[i]}
              alt={square_categories_img[i]}
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px] xl:w-36 xl:h-36 object-contain"
            />
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
