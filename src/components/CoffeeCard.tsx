import Image from "next/image";
import { ShoppingCart } from "@/assets/icons";

import { CoffeeData } from "@/@types";

export function CoffeeCard({ data }: { data: CoffeeData }) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(data.price);

  return (
    <section>
      <div className="relative w-64 h-80 rounded-md rounded-tr-[36px] rounded-bl-[36px] bg-base-card flex flex-col items-center gap-4 px-6 py-5">
        <Image src={data.image} alt="tradicional" className="absolute -top-5" />

        <div className="flex items-center gap-1">
          {data.tags.map((tag) => {
            return (
              <span
                key={tag}
                className="mt-20 bg-yellow-400 rounded-full text-yellow-600 font-bold text-[10px] px-2 py-1 leading-tight"
              >
                {tag.toUpperCase()}
              </span>
            );
          })}
        </div>

        <div className="text-center flex flex-col items-center gap-2 flex-1">
          <h3 className="font-title font-bold text-xl text-base-subtitle">
            {data.title}
          </h3>
          <p className="text-sm text-base-label">{data.desc}</p>
        </div>

        <div className="flex items-center justify-between w-full">
          <span className="text-base-text text-sm">
            R${" "}
            <span className="font-title font-extrabold text-2xl">
              {formattedPrice.replace(/^.{3}/, "")}
            </span>
          </span>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 w-[72px] h-[38px] p-2 bg-base-button rounded-lg overflow-hidden">
              <button className="text-purple-500 flex-1 text-lg font-bold">
                -
              </button>
              <span className="text-base-title">{data.quantity}</span>
              <button className="text-purple-500 flex-1 text-lg font-bold">
                +
              </button>
            </div>
            <button className="bg-purple-600 rounded-lg p-2">
              <ShoppingCart weight="fill" size={22} color="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
