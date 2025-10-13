"use client";
import GridProducts from "./GridProducts";

type FirstProductSectionProps = {
  groupedGroup: any[][];
};

export default function FirstProductSection({ groupedGroup }: FirstProductSectionProps) {
  return (
    <section className="bg-white w-full rounded-3xl shadow-sm pb-6 sm:pb-8">
      <h2 className="px-4 sm:px-8 lg:px-10 py-4 text-black text-lg sm:text-xl font-semibold">
        Produtos relacionados
      </h2>

      <div className="space-y-6 sm:space-y-8">
        {groupedGroup.map((groupProducts, index) => (
          <GridProducts key={index} groupProducts={groupProducts} />
        ))}
      </div>
    </section>
  );
}
