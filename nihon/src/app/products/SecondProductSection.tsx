import GridProducts from "./GridProducts";

type SecondProductSectionProps = {
    groupedGroup: any[][];
}

export default function SecondProductSection({groupedGroup}: SecondProductSectionProps) {
    return(
        <div className="bg-white h-auto w-full rounded-3xl py-5">
            {groupedGroup.map((groupProducts, index) => (
             <GridProducts key={index} groupProducts={groupProducts}/>
            ))}
        </div>
    );
}