import placementImg from "@/assets/staticons/placement.svg";
import buildingImg from "@/assets/staticons/building.svg";
import studiesImg from "@/assets/staticons/studies.svg";
import clipboardImg from "@/assets/staticons/clipboard.svg";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter700 = Inter({ subsets: ["latin"], weight: "600" });
const inter300 = Inter({ subsets: ["latin"], weight: "300" });

export default function Stats() {
  const items = [
    { icon: placementImg, title: "10k+", desc: "Student Placed" },
    { icon: buildingImg, title: "100k+", desc: "Companies hiring" },
    { icon: studiesImg, title: "200k+", desc: "Active students" },
    { icon: clipboardImg, title: "10k+", desc: "Openings everyday" },
  ];
  return (
    <div className="stats_bg">
      <div className="w-[80%] mx-auto">
        <div className="stat_area">
          {items.map((data, index) => (
            <div key={index} className="stat__card">
              <Image width={60} height={60} src={data.icon} alt="compImg" />
              <div className="ml-3">
                <h1
                  className={`leading-0 text-[#16A6EC] text-[30px] ${inter700.className}`}
                >
                  {data.title}
                </h1>
                <p className={`text-[17px] leading-0 ${inter300.className}`}>
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
