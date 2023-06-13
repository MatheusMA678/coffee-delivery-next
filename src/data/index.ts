import {
  TraditionalCoffee,
  AmericanCoffee,
  CreamyCoffee,
  ColdCoffee,
  MilkCoffee,
  LatteCoffee,
  CapuccinoCoffee,
  MacchiatoCoffee,
  MocaccinoCoffee,
  HotChocolate,
  CubanCoffee,
  HawaiianCoffee,
  ArabicCoffee,
  IrishCoffee,
} from "@/assets/coffees";
import { v4 as uuid } from "uuid";

export const coffeesData = [
  {
    id: uuid(),
    title: "Expresso Tradicional",
    desc: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    quantity: 1,
    image: TraditionalCoffee,
    tags: ["tradicional"],
  },
  {
    id: uuid(),
    title: "Expresso Americano",
    desc: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    quantity: 1,
    image: AmericanCoffee,
    tags: ["tradicional"],
  },
  {
    id: uuid(),
    title: "Expresso Cremoso",
    desc: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    quantity: 1,
    image: CreamyCoffee,
    tags: ["tradicional"],
  },
  {
    id: uuid(),
    title: "Expresso Gelado",
    desc: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    quantity: 1,
    image: ColdCoffee,
    tags: ["tradicional", "gelado"],
  },
  {
    id: uuid(),
    title: "Café com Leite",
    desc: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    quantity: 1,
    image: MilkCoffee,
    tags: ["tradicional", "com leite"],
  },
  {
    id: uuid(),
    title: "Latte",
    desc: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    quantity: 1,
    image: LatteCoffee,
    tags: ["tradicional", "com leite"],
  },
  {
    id: uuid(),
    title: "Capuccino",
    desc: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    quantity: 1,
    image: CapuccinoCoffee,
    tags: ["tradicional", "com leite"],
  },
  {
    id: uuid(),
    title: "Macchiato",
    desc: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    quantity: 1,
    image: MacchiatoCoffee,
    tags: ["tradicional", "com leite"],
  },
  {
    id: uuid(),
    title: "Mocaccino",
    desc: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    quantity: 1,
    image: MocaccinoCoffee,
    tags: ["tradicional", "com leite"],
  },
  {
    id: uuid(),
    title: "Chocolate Quente",
    desc: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    quantity: 1,
    image: HotChocolate,
    tags: ["tradicional", "com leite"],
  },
  {
    id: uuid(),
    title: "Cubano",
    desc: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    quantity: 1,
    image: CubanCoffee,
    tags: ["tradicional", "alcoólico", "gelado"],
  },
  {
    id: uuid(),
    title: "Havaiano",
    desc: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    quantity: 1,
    image: HawaiianCoffee,
    tags: ["especial"],
  },
  {
    id: uuid(),
    title: "Árabe",
    desc: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    quantity: 1,
    image: ArabicCoffee,
    tags: ["especial"],
  },
  {
    id: uuid(),
    title: "Irlandês",
    desc: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    quantity: 1,
    image: IrishCoffee,
    tags: ["especial", "alcoólico"],
  },
];