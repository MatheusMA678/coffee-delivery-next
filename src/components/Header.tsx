import Image from "next/image";
import Logo from "../assets/logo.svg";
import { ShoppingCart } from "../assets/icons";
import { UserLocation } from "./HeaderComponents/UserLocation";

export function Header() {
  return (
    <header className="flex items-center justify-between px-40 py-8">
      <Image src={Logo} alt="Coffee Delivery Logo" />

      <div className="flex items-center gap-3">
        <UserLocation />
        <button className="p-2 rounded-md bg-yellow-400">
          <ShoppingCart weight="fill" size={22} className="text-yellow-600" />
        </button>
      </div>
    </header>
  );
}
