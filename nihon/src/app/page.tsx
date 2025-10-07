"use client";
import { FaWarehouse, FaStore, FaRegStar, FaCreditCard } from "react-icons/fa";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import FornecedorCard from "../components/FornecedorCard";

export default function Home() {
  const categories = [
    "Supermercado",
    "Açougue",
    "Padaria e confeitaria",
    "Bar e restaurante",
    "Refrigeração comercial",
    "Automação Comercial",
    "Equipamentos para cozinha",
    "Mobiliário Comercial",
    "Utensílios e suprimentos",
  ];

  const square_categories = [
    "SUPERMERCADO",
    "AÇOUGUE",
    "PADARIA",
    "REFRIGERAÇÃO",
    "AUTOMAÇÃO COMERCIAL",
  ];

  const square_categories_img = [
    "/images/mercado.png",
    "/images/acougue.png",
    "/images/padaria.png",
    "/images/refrigeracao.png",
    "/images/automacao.png",
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-28 pb-5">
      {/* Banner principal responsivo */}
      <div className="relative w-full h-[200px] md:h-[360px] lg:h-[480px] xl:h-[500px]">
        <Image
          src="/images/Banner_site_nihon.png"
          alt="Banner principal"
          fill
          sizes="100vw"
          className="object-cover object-left"
          priority
        />
      </div>


      {/* categorias */}
      <div className="w-full bg-white  py-5 mt-10">
        <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700 text-sm">
          {categories.map((category, index) => (
            <motion.div
              key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <p className="hover:text-[#E21414] cursor-pointer transition-colors">
                    {category}
                  </p>
                  {index !== categories.length - 1 && (
                    <span className="mx-4 text-gray-400">|</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* square categories */}
          <div className="flex items-center gap-20 justify-center px-8 mt-15">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-50 h-60 bg-gray-200 flex flex-col items-center justify-center shadow-2xl rounded-xl"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: i * 0.05 }}
              >

                <p className="text-gray-600 font-medium text-center mb-5">{square_categories[i]}</p>
                <img
                  src={square_categories_img[i]}
                  alt={square_categories_img[i]}
                  className="w-36 h-36 object-contain"
                />
              </motion.div>
            ))} 
          </div>

          {/* diferenciais */}
          <div className="flex items-center gap-50 justify-center mt-30">
            <div className="flex flex-col items-center">
              <FaWarehouse className="text-[#E21414] text-5xl mb-2" />
              <p className="text-gray-500">Estoque Próprio</p>
            </div>
            <div className="flex flex-col items-center">
              <FaStore className="text-[#E21414] text-5xl mb-2" />
              <p className="text-gray-500">Mais de 200 lojas montadas</p>
            </div>
            <div className="flex flex-col items-center">
              <FaRegStar className="text-[#E21414] text-5xl mb-2" />
              <p className="text-gray-500">28 anos de mercado</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCreditCard className="text-[#E21414] text-5xl mb-2" />
              <p className="text-gray-500 ">Pagamento facilitado</p>
            </div>
          </div>

          {/* faixa fornecedores - carrossel contínuo com efeito profissional */}
          <FaixaFornecedoresCarrossel />
        </div>
      );
    }


function FaixaFornecedoresCarrossel() {
  const fornecedores = [
    '/images/datalogic.png',
    '/images/elginBematech.png',
    '/images/gelopar.png',
    '/images/gertec.png',
    '/images/starrett.png',
    // '/images/prix.png',
  ];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);
  let [firstRef, { width: firstWidth }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [vw, setVw] = useState(0);
  const GAP_PX = 32;

  useEffect(() => {
    const update = () => setVw(window.innerWidth || 0);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
  if (!firstWidth) return;
  let controls;
  let finalPosition = -(firstWidth + GAP_PX);

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls?.stop;
  }, [rerender, xTranslation, duration, firstWidth, mustFinish]);

  return (
    <div className="w-full overflow-hidden bg-gray-200 mt-[100px] mb-20 relative h-[100px] flex items-center justify-center">
      <motion.div
        className="flex items-center gap-8 flex-nowrap"
        style={{ x: xTranslation, width: 'max-content', willChange: 'transform' }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {/* sequência 1 (medida) */}
        <div ref={firstRef} className="flex items-center gap-10 mr-8">
          {fornecedores.map((item, idx) => (
            <FornecedorCard image={item} key={`seq-0-${idx}`} />
          ))}
        </div>
        {/* renderiza sequências adicionais até cobrir viewport inteira */}
        {Array.from({ length: Math.max(1, firstWidth ? Math.ceil((vw + firstWidth) / firstWidth) - 1 : 1) }).map((_, seq) => (
          <div key={`seq-${seq + 1}`} className="flex items-center gap-8 mr-8">
            {fornecedores.map((item, idx) => (
              <FornecedorCard image={item} key={`seq-${seq + 1}-${idx}`} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
