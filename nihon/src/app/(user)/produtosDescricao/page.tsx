"use client"
import Gallery from './Gallery';
import Breadcrumb from './Breadcrumb';
import ProductInfo from './ProductInfo';
import SimilarProducts from './SimilarProducts';

export default function ProductDescriptionPage() {
  const images = [
    '/images/Banner_site_nihon.png',
    '/images/Leitor VSI 410 Toledo.png',
    '/images/automacao.png',
    '/images/mercado.png'
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <Breadcrumb productTitle="Produto Balança Comercial para Uso de Exemplo" />

        <div className="bg-white rounded-lg p-6 shadow">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
            <div className="sm:col-span-1 md:col-span-2">
              <Gallery images={images} />
            </div>

            <div className="sm:col-span-1 md:col-span-1 md:sticky md:top-24">
              <ProductInfo />
            </div>
          </div>

          <div className="mt-8">
            <SimilarProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
