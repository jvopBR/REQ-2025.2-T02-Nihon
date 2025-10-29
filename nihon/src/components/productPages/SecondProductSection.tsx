import Product from "./Product";

type SecondProductSectionProps = {
    products: any[];
}

export default async function SecondProductSection({products}: SecondProductSectionProps) {
    return(
        <div className="bg-white w-full mx-auto max-w-7xl rounded-3xl shadow-sm">
            <div className="flex flex-wrap justify-center px-[25px] 
                gap-3  
                sm:gap-7
                md:gap-6.5
                xl:gap-10
                2xl:gap-20">
                {products.map((product) => (
                <Product key={product.idproduto} name={product.nome} idproduto={product.idproduto}/>
        ))}
            </div>
        </div>
    );
}