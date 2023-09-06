import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="p-8 md:px-16 mb-20 flex:col md:flex lg:first-letter:flex w-full md:justify-between mx-auto items-center">
      <div className="md:w-1/2 h-fit flex flex-col justify-center gap-5 mb-8">
        <h1 className="text-3xl lg:text-5xl font-bold">Your agent of joy, happiness, and the good life!</h1>
        <p className="sm:text-sm md:text-base">A creative and collaborative enterprise shaping the society towards a more enjoyable life We are on a mission to be an agent of joy, happiness and the good life</p>
        <Link href={"/users"}>
          <button className="text-xs md:text-base outline outline-1 px-4 py-2 rounded-xl hover:bg-white hover:text-pink-800 font-bold">Meet our users!</button>
        </Link>
      </div>
      <div className="md:w-1/2 h-fit flex justify-center">
        <Image src={"https://aroosand.sirv.com/Soltaire/Gamer.png"} alt="hero image" width={500} height={250} />
      </div>
    </div>
  );
}
