import { ReturnProduct } from "@/components/adminPages/ProductButtons";

export default function Page() {
    return(
        <div className="flex flex-col h-full w-full bg-[#FBFAFA] overflow-hidden">
            <div className="flex pt-10 justify-between items-center">
                <h1 className="text-[35px] text-black pl-15 font-bold">Adicionar Produtos</h1>
                <div className="pr-15">
                    <ReturnProduct/>
                </div>
            </div>
            <div className="h-px w-full bg-gray-300 mt-10"/>
            <div className="h-dvh max-w-full border border-gray-300 m-15 rounded-3xl text-black flex">
                <div className="w-full p-10 flex flex-col justify-center">
                    <div className="flex flex-col">
                        <h1>Nome do Produto</h1>
                        <textarea name="" id="" className="h-10 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"/>
                    </div>
                    <div>
                        <h1>Tipo</h1>
                        <textarea name="" id="" className="h-10 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1>Marca</h1>
                            <textarea name="" id="" className="h-10 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"/>
                        </div>
                        <div>
                            <h1>Verticais</h1>
                            <textarea name="" id="" className="h-10 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"/>
                        </div>
                    </div>
                    <div className="flex flex-col"> 
                        <h1>Características</h1>
                        <textarea name="" id="" className="h-10 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"/>
                    </div>
                    <div></div>
                    <div>
                        <h1>Descrição</h1>
                        <textarea name="" id="" className="h-40 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"></textarea>
                    </div>
                </div>
                <div className="w-full p-10 flex flex-col justify-between">
                    <div>
                        <h1>Imagens</h1>
                        <textarea name="" id="" className="h-72 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-[#ED3135] h-14 w-40 text-[20px] text-white rounded-2xl transition hover:scale-105 cursor-pointer">+ Adicionar</button>
                    </div>
                </div>
            </div>
        </div>      
    );
}
