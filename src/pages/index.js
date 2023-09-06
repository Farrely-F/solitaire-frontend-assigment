import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import MarqueeSlider from "@/components/MarqueeSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`min-h-screen  py-32 ${inter.className} bg-gradient-to-tr from-pink-800 via-pink-900 to-rose-600 text-white`}>
        <Hero />
        <MarqueeSlider />
      </main>
    </>
  );
}
