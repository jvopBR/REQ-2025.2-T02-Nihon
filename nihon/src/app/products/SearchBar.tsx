"use client";

import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="h-14 w-full bg-[#ED3135] flex items-center justify-center">
      {/* Container relativo para posicionar a lupa */}
      <div className="relative">
        {/* Ícone de lupa */}
        <SlMagnifier
          className={`
            absolute left-3 top-1/2 transform -translate-y-1/2
            text-[13px] 
            min-[375px]:text-[14.5px] 
            min-[390px]:text-[16px] 
            min-[405px]:text-[17.5px] 
            min-[420px]:text-[19px]
            text-gray-400 transition-opacity duration-200
            pointer-events-none
            ${isFocused || value ? "opacity-0" : "opacity-100"}
          `}
        />

        {/* Campo de pesquisa */}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Pesquisar"
          className="
            h-[40px] 
            w-[200px] bg-white rounded-3xl
            sm:w-[350px]
            md:w-[500px]
            lg:w-[600px]
            xl:w-[700px]
            outline-none
            text-[13px] 
            min-[375px]:text-[14.5px] 
            min-[390px]:text-[16px] 
            min-[405px]:text-[17.5px] 
            min-[420px]:text-[19px]
            focus:ring-2 focus:ring-red-500
            placeholder:text-gray-400
            transition-all
            pl-10 pr-4 /* Padding left maior para a lupa */
          "
        />
      </div>
    </div>
  );
}