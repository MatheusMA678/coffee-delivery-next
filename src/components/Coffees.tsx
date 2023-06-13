import { CoffeeCard } from "./CoffeeCard";
import { useContext } from "react";
import { CoffeesContext } from "@/contexts/CoffeesContext";
import { FilterButtons } from "./CoffeesComponents/FilterButtons";

export function Coffees() {
  const { coffees } = useContext(CoffeesContext);

  return (
    <section className="px-40 py-8 flex flex-col gap-14">
      <div className="flex items-center justify-between">
        <h2 className="font-extrabold text-3xl text-base-subtitle font-title">
          Nossos cafés
        </h2>

        <FilterButtons />
      </div>

      <section className="flex flex-wrap gap-8 justify-center">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} data={coffee} />
        ))}
      </section>
    </section>
  );
}
