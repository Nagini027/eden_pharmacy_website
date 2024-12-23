import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="md:w-[850px] bg-cyan-950  md:mx-auto md:px-20 rounded-3xl">
      {/* first */}
      <div className="flex md:flex-row flex-col md:gap-20 gap-6  ">
        {/* 1 */}
        <div className="w-44  md:pr-12 md:-ml-2 ">
          <div className="flex flex-col">
            <div className="bg-white w-16 h-16  rounded-full ml-8 -mt-6">
              <Image
                src="/images/Group-8111.svg.png"
                width={20}
                height={20}
                className="mx-auto pt-5"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2">Clinically studied</p>
              <p className="text-white text-xs tracking-tight w-40">
                All products that we offer have undergone lab and safety tests
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-44  md:pr-12 md:-ml-2 ">
          <div className="flex flex-col">
            <div className="bg-white w-16 h-16  rounded-full  ml-8 -mt-6">
              <Image
                src="/images/Group-8110.svg.png"
                width={20}
                height={20}
                className="mx-auto pt-5"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2">Clinically studied</p>
              <p className="text-white text-xs tracking-tight w-40">
                All products that we offer have undergone lab and safety tests
              </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="w-44  md:pr-12 md:-ml-2 ">
          <div className="flex flex-col">
            <div className="bg-white w-16 h-16  rounded-full  ml-8 -mt-6">
              <Image
                src="/images/Group-8117.svg.png"
                width={20}
                height={20}
                className="mx-auto pt-5"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2">Clinically studied</p>
              <p className="text-white text-xs tracking-tight w-40">
                All products that we offer have undergone lab and safety tests
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*second  */}
      <div className="flex md:flex-row flex-col md:gap-20 gap-6 mt-6 ">
        {/* 1 */}
        <div className="w-44  md:pr-12 md:-ml-2 h-40 ">
          <div className="flex flex-col">
            <div className="bg-white w-16 h-16  rounded-full  ml-8 ">
              <Image
                src="/images/Group-8114.svg.png"
                width={20}
                height={20}
                className="mx-auto pt-5"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2">Clinically studied</p>
              <p className="text-white text-xs tracking-tight w-40">
                All products that we offer have undergone lab and safety tests
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="w-44  md:pr-12 md:-ml-2 h-40 ">
          <div className="flex flex-col">
            <div className="bg-white w-16 h-16  rounded-full  ml-8">
              <Image
                src="/images/Group-8115.svg.png"
                width={20}
                height={20}
                className="mx-auto pt-5"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2">Clinically studied</p>
              <p className="text-white text-xs tracking-tight w-40">
                All products that we offer have undergone lab and safety tests
              </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="w-44  md:pr-12 md:-ml-2 h-40 ">
          <div className="flex flex-col">
            <div className="bg-white w-16 h-16  rounded-full  ml-8 ">
              <Image
                src="/images/Group-8111.svg.png"
                width={20}
                height={20}
                className="mx-auto pt-5"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2">Clinically studied</p>
              <p className="text-white text-xs tracking-tight w-40">
                All products that we offer have undergone lab and safety tests
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default About;
