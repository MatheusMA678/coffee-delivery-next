"use client";

import React, { useContext, useState } from "react";
import { CoffeesContext } from "@/contexts/CoffeesContext";

export function FilterButtons() {
  const [tags, setTags] = useState<string | null>(null);

  const { coffees } = useContext(CoffeesContext);

  const filtteredCoffees = coffees.filter((coffee) => {
    coffee.tags.some((tag) => tags?.includes(tag));
  });

  const handleSetTag = (tagName: string) => {
    setTags(tagName);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="py-1.5 px-3 border rounded-full text-yellow-600 font-bold text-[0.625rem] border-yellow-500"
        onClick={() => {
          handleSetTag("tradicional");
        }}
      >
        TRADICIONAL
      </button>
      <button className="py-1.5 px-3 border rounded-full text-yellow-600 font-bold text-[0.625rem] border-yellow-500">
        ESPECIAL
      </button>
      <button className="py-1.5 px-3 border rounded-full text-yellow-600 font-bold text-[0.625rem] border-yellow-500">
        COM LEITE
      </button>
      <button className="py-1.5 px-3 border rounded-full text-yellow-600 font-bold text-[0.625rem] border-yellow-500">
        ALCOÓLICO
      </button>
      <button className="py-1.5 px-3 border rounded-full text-yellow-600 font-bold text-[0.625rem] border-yellow-500">
        GELADO
      </button>
    </div>
  );
}
