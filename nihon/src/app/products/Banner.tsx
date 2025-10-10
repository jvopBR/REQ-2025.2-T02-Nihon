export default function Banner() {
    return(
        <div className="bg-[#ED3135] h-75 w-full flex items-center justify-between px-20">
            <div style={{backgroundImage: "url('/images/logoBannerProductPage.png')"}} className="bg-cover bg-center h-30 w-80"></div>
            <p className="text-white text-[30px] w-90 font-bold">Tudo o que você precisa para o seu negócio!</p>
        </div>
    );
}