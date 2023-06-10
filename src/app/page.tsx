import Image from "next/image";
import { ShoppingCart, Package, Timer, Coffee } from "../assets/icons";

import CoffeeIntro from "../assets/coffee-intro.png";
import { Coffees } from "@/components/Coffees";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex items-center gap-14 bg-[url(../assets/intro-bg.svg)] bg-cover px-40 py-20">
        <div className="space-y-16">
          <div className="space-y-4">
            <h1 className="font-title font-extrabold text-5xl text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-base-subtitle text-xl">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-yellow-600 p-2">
                <ShoppingCart
                  weight="fill"
                  size={16}
                  className="text-base-background"
                />
              </div>
              <span className="text-base-text text-base">
                Compra simples e segura
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-base-text p-2">
                <Package
                  weight="fill"
                  size={16}
                  className="text-base-background"
                />
              </div>
              <span className="text-base-text text-base">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-yellow-500 p-2">
                <Timer
                  weight="fill"
                  size={16}
                  className="text-base-background"
                />
              </div>
              <span className="text-base-text text-base">
                Entrega rápida e rastreada
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-500 p-2">
                <Coffee
                  weight="fill"
                  size={16}
                  className="text-base-background"
                />
              </div>
              <span className="text-base-text text-base">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>

        <Image src={CoffeeIntro} alt="Coffee Image" />
      </section>

      <Coffees />
    </div>
  );
}
