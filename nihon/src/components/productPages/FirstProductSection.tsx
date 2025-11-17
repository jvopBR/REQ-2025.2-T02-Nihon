"use client";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

export default function FirstProductSection({ products }: { products?: any[] }) {
  if (!products || !products.length) return null;

  const supabase = useMemo(() => createClient(), []);
  const display = products.slice(0, 12);

  const [imageMap, setImageMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const idsToFetch = display
      .filter((p: any) => {
        const hasImage =
          p.thumbnail ||
          p.imagem ||
          (p.imagem_produto && p.imagem_produto[0] && p.imagem_produto[0].url);
        return !hasImage;
      })
      .map((p: any) => p.idproduto)
      .filter(Boolean);

    if (!idsToFetch.length) return;

    let mounted = true;
    (async () => {
      try {
        const { data, error } = await supabase
          .from("imagem_produto")
          .select("idproduto, url, posicao")
          .in("idproduto", idsToFetch)
          .order("posicao", { ascending: true });

        if (error) {
          console.warn("Erro ao buscar imagens:", error);
          return;
        }

        if (!mounted || !data) return;

        const map: Record<string, string> = { ...imageMap };
        for (const row of data) {
          const id = String(row.idproduto);
          if (!map[id] && row.url) {
            map[id] = row.url;
          }
        }

        setImageMap(map);
      } catch (e) {
        console.error("Erro inesperado ao buscar imagens:", e);
      }
    })();

    return () => { mounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, supabase]);

  const placeholder = "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'>
      <rect width='400' height='300' fill='#f8fafc'/>
      <g fill='#cbd5e1' font-family='Arial, Helvetica, sans-serif' font-size='18' text-anchor='middle'>
        <text x='200' y='150'>Sem imagem</text>
      </g>
    </svg>`
  );

  const watermarkPath = "/logo/logoWatermark.png";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {display.map((item: any) => {
        const imageSrc =
          item.thumbnail ||
          item.imagem ||
          (item.imagem_produto && item.imagem_produto[0] && item.imagem_produto[0].url) ||
          imageMap[String(item.idproduto)] ||
          null;

        const finalSrc = (typeof imageSrc === "string" && (imageSrc.startsWith("http") || imageSrc.startsWith("/")))
          ? imageSrc
          : placeholder;

        return (
          <Link
            key={item.idproduto}
            href={`/produtosDescricao?id=${encodeURIComponent(String(item.idproduto))}`}
            className="block bg-white border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-4 flex flex-col items-stretch h-full">
              {/* container com aspect ratio e imagem em fill + object-contain para evitar cortes */}
              <div className="relative w-full rounded mb-3 overflow-hidden bg-gray-50" style={{ paddingBottom: "56.25%" }}>
                <Image
                  src={finalSrc}
                  alt={item.nome || "produto"}
                  fill
                  style={{ objectFit: "contain" }}
                  className="p-2"
                  unoptimized
                />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Image
                    src={watermarkPath}
                    alt="Nihon"
                    width={220}
                    height={60}
                    className="object-contain opacity-20 saturate-0"
                    unoptimized
                  />
                </div>
              </div>

              <h3 className="mt-auto text-center text-sm font-semibold text-gray-800 line-clamp-2">
                {item.nome}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
