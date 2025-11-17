export default function Banner() {
  return (
    <div className="w-full bg-[#ED3135]">
      <div className="max-w-7xl mx-auto h-8 md:h-10 lg:h-12 flex items-center relative px-4">
        {/* linha fina branca translúcida */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-white/25" />

        {/* Logo sólido à esquerda */}
        <div className="flex items-center z-20">
          <img
            src="/images/logoBannerProductPage.png"
            alt="Nihon"
            className="h-6 md:h-8 lg:h-10 object-contain"
          />
        </div>

        {/* Texto centralizado */}
        <p className="absolute left-1/2 transform -translate-x-1/2 text-white text-[12px] md:text-sm lg:text-base font-bold opacity-95">
          TUDO QUE VOCÊ PRECISA PARA O SEU NEGÓCIO!
        </p>
      </div>
    </div>
  );
}
