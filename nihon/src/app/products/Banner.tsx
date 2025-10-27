export default function Banner() {
  return (
    <div 
      className="bg-[#ED3135] h-auto shadow-sm w-full flex justify-between py-10 md:py-15 lg:py-20 xl:py-25">
      <div style={{ backgroundImage: "url('/images/logoBannerProductPage.png')" }} className="bg-cover bg-center h-15 w-40 md:h-20 md:w-55 xl:h-30 xl:w-80 ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12"></div>

      <p className="text-white pt-2.5 text-[12px] sm:text-[13px] md:text-[20px] lg:text-[24px] xl:text-[26px] w-32 sm:w-45 md:w-70 lg:w-80 xl:w-100 text-justify font-bold mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12">
        TUDO QUE VOCÊ PRECISA PARA O SEU NEGÓCIO!
      </p>
    </div>
  );
}
