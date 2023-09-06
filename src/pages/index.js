import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`min-h-screen p-8 md:px-16 py-32 ${inter.className} bg-gradient-to-tr from-pink-800 via-pink-900 to-rose-600 text-white`}>
        <Hero />
      </main>
    </>
  );
}
