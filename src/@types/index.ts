import { StaticImageData } from "next/image";

export interface CoffeeData {
  id: string;
  title: string;
  desc: string;
  price: number;
  quantity: number;
  image: StaticImageData;
  tags: string[];
}
