import Image from "next/image";

import Tradicional from "../assets/coffees/tradicional.png";

export function Coffees() {
  return (
    <section className="px-40 py-8 flex flex-col gap-14">
      <h2 className="font-extrabold text-3xl text-base-subtitle font-title">
        Nossos cafés
      </h2>

      <section>
        <div className="relative w-64 h-80 rounded-md rounded-tr-[36px] rounded-bl-[36px] bg-base-card flex flex-col items-center gap-4 px-6 py-5">
          <Image
            src={Tradicional}
            alt="tradicional"
            className="absolute -top-5"
          />

          <span className="mt-20 bg-yellow-400 rounded-full text-yellow-600 font-bold text-[10px] px-2 py-1 leading-tight">
            TRADICIONAL
          </span>

          <div className="text-center flex flex-col items-center gap-2">
            <h3 className="font-title font-bold text-xl text-base-subtitle">
              Expresso Tradicional
            </h3>
            <p className="text-sm text-base-label">
              O tradicional café feito com água quente e grãos moídos
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
