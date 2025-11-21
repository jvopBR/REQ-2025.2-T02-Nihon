"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type BrandProps = {
  name: string,
  productName: string | null,
  isOnBrandPage?: boolean; 
}

export default function Brand( { name, productName, isOnBrandPage }: BrandProps) {
  const path = usePathname();
  let url = `${path}/${name}`;
  if(productName) {
    url = `${path}/${name}?productName=${productName}`;
  }
  if(isOnBrandPage) {
    return( 
      <div
        className="
          bg-[#ED3135]
          rounded-full
          shadow-xl
          cursor-pointer

          w-[64px] h-[64px]
          min-[375px]:w-[67px] min-[375px]:h-[67px]
          min-[390px]:w-[70px] min-[390px]:h-[70px]
          min-[405px]:w-[73px] min-[405px]:h-[73px] 
          min-[420px]:w-[76px] min-[420px]:h-[76px]
          sm:w-[79px] sm:h-[79px]
          md:w-[100px] md:h-[100px]
          lg:w-[120px] lg:h-[120px]
          xl:w-[140px] xl:h-[140px]
          text-white
          flex
          items-center
          justify-center
        "
      >
        {name}
      </div>);
  } else {  
    return (
      <Link href={url}>
        <div
          className="
            bg-[#ED3135]
            rounded-full
            shadow-xl
            transition-transform
            hover:scale-110
            cursor-pointer

            w-[64px] h-[64px]
            min-[375px]:w-[67px] min-[375px]:h-[67px]
            min-[390px]:w-[70px] min-[390px]:h-[70px]
            min-[405px]:w-[73px] min-[405px]:h-[73px] 
            min-[420px]:w-[76px] min-[420px]:h-[76px]
            sm:w-[79px] sm:h-[79px]
            md:w-[100px] md:h-[100px]
            lg:w-[120px] lg:h-[120px]
            xl:w-[140px] xl:h-[140px]
            text-white
            flex
            items-center
            justify-center
          "
        >
          {name}
        </div>
      </Link>
    );
  }
}