import { div } from "framer-motion/client";
import Product from "./Product";

type SecondProductSectionProps = {
    products: any[];
}

export default function SecondProductSection({products}: SecondProductSectionProps) {
    return(
        <div className="bg-white w-full mx-auto max-w-7xl rounded-3xl shadow-sm">
            <div className="py-5 flex flex-wrap justify-between gap-3 px-[25px]">
                {products.map((product) => (
                <Product key={product.id} name={product.title}/>
                ))}
            </div>
        </div>
    );
}