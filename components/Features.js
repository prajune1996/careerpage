import item1 from "@/assets/features/1.png";
import item2 from "@/assets/features/2.png";
import item3 from "@/assets/features/3.png";
import item4 from "@/assets/features/4.png";
import item5 from "@/assets/features/5.png";
import item6 from "@/assets/features/6.png";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter300 = Inter({ subsets: ["latin"], weight: "300" });

const inter400 = Inter({ subsets: ["latin"], weight: "400" });

const inter600 = Inter({ subsets: ["latin"], weight: "600" });

const inter700 = Inter({ subsets: ["latin"], weight: "600" });

export default function Features() {
  const features = [
    {
      title: "Our Culture",
      description:
        "At workday, employees came first. From creating a welcoming workplace to provide.",
      image: item1,
    },
    {
      title: "Our Benefits",
      description:
        "Our benefits go beyond compensation and perks to take great care of you.",
      image: item2,
    },
    {
      title: "Global Workspace",
      description:
        "Whoever you are, whatever your background, and wherever you are located",
      image: item3,
    },
    {
      title: "Lean and efficient teams",
      description:
        "At workday your colleagues will include legends in the industry, talented, new grads, and everyone in between.",
      image: item4,
    },
    {
      title: "No dress code",
      description: "Cloths don’t transform lives, the people who wear them do.",
      image: item5,
    },
    {
      title: "Free training for everyone",
      description:
        "Whoever you are, whatever your background, and wherever you are located",
      image: item6,
    },
  ];
  return (
    <div className="text-[#f8f9fa] w-[75%] mx-auto pt-20 pb-10">
      <h1
        className={`text-black text-center ${inter400.className} text-[40px]`}
      >
        Empowering Young Minds
      </h1>
      <h1
        className={`text-black text-center  ${inter600.className} text-[40px] leading-10`}
      >
        The <span className="text-[#17A6E8]">Ultimate Job Solution</span> for
        Fresher
      </h1>
      <p
        className={`text-[#717B9E] text-center w-[90%] text-[18px] mx-auto mt-4 mb-20 ${inter300.className}`}
      >
        We have the infrastructure to address the widespread issue of freshly
        graduated students needing help getting their dream job. Our solution
        covers the full spectrum, from helping people find work to imparting the
        skills they need to succeed in the workplace and assisting them in
        navigating the hiring process.
      </p>
      <h1
        className={`text-black text-center text-[34px] mb-8 ${inter700.className}`}
      >
        Why Work with us?
      </h1>
      <div className="feature__area">
        {features.map((data, index) => (
          <div key={index} className="feature__card">
            <div className="flex">
              <div className="w-[60px] h-[60px]">
                <Image
                  className="rounded-[20px]"
                  width={60}
                  height={60}
                  src={data.image}
                  alt="dataImg"
                />
              </div>
              <h1
                className={`text-black text-[22px] self-center ml-4 ${inter600.className}`}
              >
                {data.title}
              </h1>
            </div>
            <h5
              className={`text-black text-center mt-2 ${inter400.className} leading-5`}
            >
              {data.description}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
