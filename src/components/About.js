import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="md:w-[850px] bg-[#17414F]  md:mx-auto md:px-20 rounded-3xl">
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
                alt="image"
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
                alt="image"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2">Vegetarian Friendly</p>
              <p className="text-[#D9D9D9] text-xs tracking-tighter w-40">
                We have a wide selection of products to meet your needs
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
                alt="image"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2 ml-3">Made in India</p>
              <p className="text-white text-xs tracking-tighter w-40">
                Shop local and explore health products made right here in India
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
                alt="image"
                className="mx-auto pt-5"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2 ml-4">Free shipping</p>
              <p className="text-white text-xs tracking-tight w-40">
                We deliver to your door with no shipping costs on your orders
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
                alt="image"
                className="mx-auto pt-5"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2 ml-10">No Risk</p>
              <p className="text-white text-xs tracking-tight w-40">
                We ensure that all products are safe and within their use-by
                date
              </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="w-44  md:pr-12 md:-ml-2 h-40 ">
          <div className="flex flex-col">
            <div className="bg-white w-16 h-16  rounded-full  ml-8 ">
              <Image
                src="/images/Group-8116.svg.png"
                width={20}
                height={20}
                alt="image"
                className="mx-auto pt-5"
              />
            </div>
            <div className="mx-auto">
              <p className="text-white text-md py-2 ml-6">GMO free</p>
              <p className="text-white text-xs tracking-tighter w-40">
                Natural, no modified products and derivatives for those who need
                it
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
