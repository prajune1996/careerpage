import heroImg from "@/assets/hero_img.png";
import Image from "next/image";

import { Inter } from "next/font/google";
const inter500 = Inter({ subsets: ["latin"], weight: "500" });

const inter700 = Inter({ subsets: ["latin"], weight: "700" });

export default function HeroSection() {
  return (
    <div className="hero__bg flex justify-between ">
      <div className="w-[75%] flex justify-between mx-auto items-center">
        <div>
          <h1 className={`${inter500.className} text-[36px]`}>ABOUT</h1>
          <h1
            className={`text-[54px] leading-10 text-[#17A6E8] ${inter700.className}`}
          >
            Career Opportunity
          </h1>
        </div>
        <div>
          <Image width={500} height={500} src={heroImg} alt="heroImg" />
        </div>
      </div>
    </div>
  );
}
