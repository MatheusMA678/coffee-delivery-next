"use client";

import { CoffeeData } from "@/@types";
import { coffeesData } from "@/data";
import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface CoffeesContextType {
  coffees: CoffeeData[];
}

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export const CoffeesContext = createContext({} as CoffeesContextType);

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState(coffeesData);

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
