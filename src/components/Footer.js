import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-green-950 cursor-pointer ">
      <div className=" md:flex-row  flex-col gap-5 flex md:w-[850px] mx-auto p-2">
        {/* 1 */}
        <div className="w-60 h-12 flex bg-cyan-950  gap-2 rounded-lg">
          <div className="bg-cyan-950 w-9 h-9 mt-2 pl-4">
            <Image
              src="/images/Component-2.svg.png"
              width={30}
              alt="image"
              height={30}
            />
          </div>

          <div className="pl-2 pt-1">
            <h1 className="text-bold text-xs text-gray-500">Phone Number</h1>
            <p className="tracking-tight text-xs text-gray-500">
              +974 3118 1843
            </p>
          </div>
        </div>
        {/*  */}

        {/* 2 */}
        <div className="w-60 h-11 flex bg-cyan-950 rounded-lg  gap-2">
          <div className="bg-cyan-950 w-9 h-9 mt-2 pl-4">
            <Image
              src="/images/Component-2-1.svg.png"
              width={30}
              alt="image"
              height={30}
            />
          </div>

          <div className="pl-2 pt-1">
            <h1 className="text-bold text-xs text-gray-500">Email Address</h1>
            <p className="tracking-tight text-xs text-gray-500">
              Elbrithcqhr@gmail.com
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="w-60 h-11 flex bg-cyan-950 rounded-lg  gap-2">
          <div className="bg-cyan-950 w-9 h-9 mt-1 pl-2">
            <Image
              src="/images/Component-2-2.svg.png"
              width={30}
              alt="image"
              height={30}
            />
          </div>

          <div className="pl-2 pt-1">
            <h1 className="text-bold text-xs text-gray-500">Office Location</h1>
            <p className="tracking-tight text-xs text-gray-500">
              {" "}
              Ambassador Street, Zone 61,
            </p>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className=" md:flex-row flex-col gap-11 flex  p-2 md:px-48">
        {/* 1 */}
        <div className="flex flex-col">
          <div className="w-44 h-11    gap-2">
            <Image
              src="/images/image (1).png"
              alt="Logo"
              width={200}
              height={64}
            />
          </div>
          <div>
            <p className="pt-7 text-white text-xs tracking-wide">
              Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
              400051
            </p>
          </div>
        </div>

        <div className="w-60 h-11  ">
          <div className="pl-2">
            <p className="tracking-tight text-xs text-gray-400">
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Footer;
