export default function Banner() {
  return (
    <div
      className="bg-[#ED3135] w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-8 sm:py-10">
      <div style={{ backgroundImage: "url('/images/logoBannerProductPage.png')" }} className="bg-cover bg-center h-16 w-40 sm:h-24 sm:w-56 md:h-28 md:w-72 lg:h-32 lg:w-80 mb-6 md:mb-0"></div>

      <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-right font-bold max-w-[90%] md:max-w-[60%] lg:max-w-[50%]">
        Tudo o que você precisa para o seu negócio!
      </p>
    </div>
  );
}
