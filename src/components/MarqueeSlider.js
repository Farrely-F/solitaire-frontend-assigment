// components/MarqueeSlider.js
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const logoImages = [
  "https://sltr.id/wp-content/uploads/10-150x110.png",
  "https://sltr.id/wp-content/uploads/11-150x110.png",
  "https://sltr.id/wp-content/uploads/1-150x110.png",
  "https://sltr.id/wp-content/uploads/7-150x110.png",
  "https://sltr.id/wp-content/uploads/8-150x110.png",
  "https://sltr.id/wp-content/uploads/9-150x110.png",
  "https://sltr.id/wp-content/uploads/3-150x110.png",
  "https://sltr.id/wp-content/uploads/4-150x110.png",
  "https://sltr.id/wp-content/uploads/5-150x110.png",
  "https://sltr.id/wp-content/uploads/6-150x110.png",
  "https://sltr.id/wp-content/uploads/2-150x110.png",
  // Add more image paths as needed
];

const MarqueeSlider = () => {
  return (
    <>
      <Marquee className="w-full bg-white min-h-[200px] mb-20">
        <div className="flex w-full text-black ">
          {logoImages.map((image, index) => (
            <Image key={index} src={image} alt={`running logo ${index}`} width={100} height={100} className="mr-32 object-contain" />
          ))}
        </div>
      </Marquee>
      <div className="min-h-screen px-8 md:px-16 flex flex-col justify-center">
        <h2 className="text-sm md:text-3xl font-medium mb-5">
          Trusted By Community: <br />
          <span className="text-3xl md:text-5xl font-bold">{`"We Guarantee You The Best Experience You Will Ever Have"`}</span>
        </h2>
        <p className="text-sm md:text-base text-justify">
          At our company, our customers are at the heart of everything we do, and we have an unwavering commitment to respecting their needs and preferences. We genuinely value each and every customer, recognizing that they are the driving
          force behind our success. Their feedback is an essential part of our journey, serving as a compass that guides us toward excellence. We actively seek out their input, and their insights help us shape our products and services to
          better serve them. We understand that respecting our customers means going above and beyond to ensure their satisfaction, addressing their concerns promptly, and providing exceptional support. By doing so, we aim to create lasting
          relationships built on trust, reliability, and mutual respect, because we know that our customers deserve nothing but the best.
        </p>
      </div>
    </>
  );
};

export default MarqueeSlider;
