"use client"
import Image from "next/image";

export default function ProductInfo({ title = 'Produto Balança Comercial para Uso de Exemplo' }: { title?: string }) {
  return (
    <div className="w-full">
      <h1 className="text-center sm:text-left text-lg font-semibold mb-4">{title}</h1>

      <div className="flex justify-center sm:justify-start">
        <button className="bg-red-500 text-white px-6 py-2 rounded-full shadow w-full sm:w-auto">Fazer Orçamento</button>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow p-4">
        <h3 className="font-medium mb-2">Características do Produto</h3>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-gray-200 mt-1" />
            <div>
              <div className="text-sm">Tipo: Balança</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-gray-200 mt-1" />
            <div>
              <div className="text-sm">Fornecedor: Fulano</div>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-gray-200 mt-1" />
            <div>
              <div className="text-sm">Status: Disponível em estoque</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-6 bg-white rounded-lg shadow p-4">
        <h3 className="font-medium mb-2">Descrição do Produto</h3>
        <p className="text-sm text-gray-700">
          Mais preciso, menos desperdício. Ideal para quem precisa de controle absoluto no peso dos produtos, esta balança digital é de alta precisão e construída com materiais duráveis.
        </p>
      </div>
    </div>
  );
}
