"use client";
import GridProducts from "./GridProducts";

type FirstProductSectionProps = {
    groupedGroup: any[][];
};

export default function FirstProductSection({groupedGroup}: FirstProductSectionProps) {
    return (
        <div className="bg-white h-auto w-full rounded-3xl pb-5">
            <p className="py-5 px-10 text-black">Produtos relacionados</p>
            {groupedGroup.map((groupProducts, index) => (
                <GridProducts key={index} groupProducts={groupProducts} />
            ))}
        </div>
    );
}