import Image from "next/image";
import Logo from "../assets/logo.svg";
import { MapPin, ShoppingCart } from "../assets/icons";

export function Header() {
  return (
    <header className="flex items-center justify-between px-40 py-8">
      <Image src={Logo} alt="Coffee Delivery Logo" />

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 bg-purple-400 p-2 rounded-md">
          <MapPin weight="fill" size={22} className="text-purple-500" />
          <span className="text-purple-600 text-sm">Porto Velho, RO</span>
        </div>

        <button className="p-2 rounded-md bg-yellow-400">
          <ShoppingCart weight="fill" size={22} className="text-yellow-600" />
        </button>
      </div>
    </header>
  );
}
