import Image from "next/image";
import compImg from "@/assets/company_img.png";
import { Inter } from "next/font/google";
import locationIcon from "@/assets/icons/map-pin.svg";
import clockIcon from "@/assets/icons/clock.svg";
import breifcaseIcon from "@/assets/icons/briefcase.svg";

const inter700 = Inter({ subsets: ["latin"], weight: "600" });
const inter300 = Inter({ subsets: ["latin"], weight: "300" });

const inter400 = Inter({ subsets: ["latin"], weight: "400" });
const inter500 = Inter({ subsets: ["latin"], weight: "500" });

export default function Opportunites() {
  const items = [
    {
      title: "Mechanical Engineer",
      company: "Atlas Copco",
      location: "Pune",
      exp: "0 - 3 years",
      timing: "2 hours ago",
    },
    {
      title: "Mechanical Engineer",
      company: "Atlas Copco",
      location: "Pune",
      exp: "0 - 3 years",
      timing: "2 hours ago",
    },
    {
      title: "Mechanical Engineer",
      company: "Atlas Copco",
      location: "Pune",
      exp: "0 - 3 years",
      timing: "2 hours ago",
    },
    {
      title: "Mechanical Engineer",
      company: "Atlas Copco",
      location: "Pune",
      exp: "0 - 3 years",
      timing: "2 hours ago",
    },
    {
      title: "Mechanical Engineer",
      company: "Atlas Copco",
      location: "Pune",
      exp: "0 - 3 years",
      timing: "2 hours ago",
    },
    {
      title: "Mechanical Engineer",
      company: "Atlas Copco",
      location: "Pune",
      exp: "0 - 3 years",
      timing: "2 hours ago",
    },
  ];
  return (
    <div className="opp_bg p-10">
      <div className="w-[80%] mx-auto">
        <h1
          className={`text-[#00A5EC] text-center text-[32px] ${inter700.className}`}
        >
          Explore the Opportunities
        </h1>
        <p className={`text-center ${inter300.className} mt-4 mb-8`}>
          At Internshala, every idea has an exponential influence because when
          you work with us, you work for millions of users. Ready to create a
          difference? Apply now!
        </p>

        <div className="opp_area">
          {items.map((data, index) => (
            <div key={index} className="opp__card">
              <div className="flex justify-between">
                <div
                  className={`${inter400.className} text-[#0F7137] bg-[#E0F8EA] h-fit w-fit rounded-2xl text-[13px] py-1 px-3`}
                >
                  Full time
                </div>
                <div className="comp__circle">
                  <Image src={compImg} alt="compImg" />
                </div>
              </div>
              <h1 className={`text-[20px] ${inter700.className}`}>
                {data.title}
              </h1>
              <h5 className={`text-[#717B9E] ${inter700.className}`}>
                {data.company}
              </h5>
              <div className="text-[#717B9E] flex mt-3">
                <div className="flex">
                  <Image
                    src={locationIcon}
                    className="mr-1"
                    alt="locationIcon"
                  />
                  {data.location}
                </div>
                <div className="flex mx-1">
                  <Image
                    src={breifcaseIcon}
                    className="mx-1"
                    alt="breifcaseIcon"
                  />
                  {data.exp}
                </div>
                <div className="flex mx-1">
                  <Image src={clockIcon} className="mx-1" alt="clockIcon" />
                  {data.timing}
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="text-[#17A6E8] border-[1px] border-[#17A6E8] px-2 py-1 rounded-2xl text-[14px]">
                  View Details
                </button>{" "}
                <button className="px-3 py-1 text-white bg-[#17A6E8] rounded-2xl ml-2 text-[14px]">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}
