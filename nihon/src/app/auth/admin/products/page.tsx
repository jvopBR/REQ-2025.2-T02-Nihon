import SearchBar from "@/components/adminPages/SearchNihon";
import {AddProduct} from "@/components/adminPages/ProductButtons";
import Product from "@/components/adminPages/Product";


export default function Page() {
    const arrayProducts = Array.from({ length: 10 }, (_, i) => i + 1);
    return(
        <div className="flex flex-col min-h-screen w-full bg-[#FBFAFA]">
            <div className="flex items-center justify-between pt-10">
                <h1 className="text-[35px] text-black pl-15 font-bold">Produtos</h1>
                <div className="pr-15">
                    <AddProduct />
                </div>
            </div>
            <div className="h-px w-full bg-gray-300 mt-10"/>
            <div className="px-15">
                <div className="pt-5">
                    <SearchBar/>
                </div>
                <div className="pt-10 flex flex-col gap-10">
                    {arrayProducts.map((index)=>(
                        <Product key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
}