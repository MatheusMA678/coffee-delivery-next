import { Header } from "@/components/Header";
import "./globals.css";
import { Baloo_2 as Baloo, Roboto_Flex as Roboto } from "next/font/google";

const baloo = Baloo({ subsets: ["latin"], variable: "--baloo-font" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--roboto-font",
});

export const metadata = {
  title: "Coffee Delivery",
  description: "Desafio do Projeto 2 do bootcamp Ignite Rocketseat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baloo.variable} min-h-screen bg-base-background font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
