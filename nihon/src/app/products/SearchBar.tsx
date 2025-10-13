"use client";

import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="h-14 w-full bg-[#ED3135] flex items-center justify-center px-4 sm:px-6">
      <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        {/* Ícone de lupa */}
        <SlMagnifier
          className={`absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-opacity
          ${isFocused || value ? "opacity-0" : "opacity-100"}`}
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
            h-10 w-full bg-white rounded-3xl
            pl-10 pr-4
            outline-none
            text-sm sm:text-base
            focus:ring-2 focus:ring-red-500
            placeholder:text-gray-400
            transition-all
          "
        />
      </div>
    </div>
  );
}
