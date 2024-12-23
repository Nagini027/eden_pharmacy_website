import Image from "next/image";
import React from "react";
import About from "./About";

const Explore = () => {
  return (
    <div className="px-3">
      <div className="bg-[#b2e2f0] md:pl-44 md:pt-6 pt-4 h-3/5">
        <h1 className="md:text-9xl text-5xl tracking-tighter text-[#003569] ">
          Essential Vitamins
        </h1>
        <div className="flex md:flex-row flex-col pt-4 ">
          {/* explore  one div*/}
          <div className=" w-64 md:h-96 h-80 flex flex-col md:pt-20 pt-5">
            <div className="pl-6">
              <p className="text-xs text-gray-500 pb-2">
                Online Medical Supplies
              </p>
              <p className="text-md text-[#17414F] w-32 pb-2 ">
                Get Your Vitamins & Minerals
              </p>
              <button className="w-24 pl-1 pr-3 py-2 rounded-2xl bg-[#17414F] text-xs font-bold text-white">
                Explore
              </button>
            </div>

            <div className="flex flex-row gap-1 md:pt-10 pt-8 pl-1">
              <div className="bg-gray-400 w-4 h-4 mt-1 rounded-full"></div>
              <div className="bg-gray-400 w-4 h-4 mt-1 rounded-full"></div>
            </div>
          </div>
          {/* explore second div */}

          <div className=" w-56 h-48 md:pt-3 rounded-tl-[62px] bg-yellow-300 pl-6 rounded-br-[60px]">
            <div className="-mt-16 pt-1 ">
              <Image
                src="/images/capsule.png"
                width={300}
                height={120}
                alt="image"
                priority
              />
            </div>
          </div>

          {/* explore third div */}

          <div className=" w-72 h-56 pt-2 md:pt-1 pl-10 mt-9">
            <div className="flex flex-col gap-3 ">
              <div className="flex gap-2 ">
                <div className="bg-cyan-950 w-10 h-10 mt-1 rounded-full">
                  <Image
                    src="/images/Frame-8365.png.png"
                    width={40}
                    height={40}
                    alt="image"
                  />
                </div>

                <div className="pl-2">
                  <h1 className="text-bold text-sm text-cyan-950">Vitamins</h1>
                  <p className="tracking-tight text-xs text-gray-500">
                    Increased Vitamins and
                  </p>
                  <p className="tracking-tight text-xs text-gray-500">
                    minerals in your diet
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex gap-2 ">
                <div className="bg-cyan-950 w-10 h-10 mt-1 rounded-full">
                  <Image
                    src="/images/Frame-8364.png.png"
                    width={40}
                    height={40}
                    alt="image"
                  />
                </div>

                <div className="pl-2">
                  <h1 className="text-bold text-xs text-cyan-950">
                    Weight Loss
                  </h1>
                  <p className="tracking-tight text-xs text-gray-500 pt-1">
                    Weight Loss
                  </p>
                  <p className="tracking-tight text-xs text-gray-500">
                    Find scientifically proven solutions
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex gap-2 ">
                <div className="bg-cyan-950 w-10 h-10 mt-1 rounded-full">
                  <Image
                    src="/images/Frame-8365.png.png"
                    width={40}
                    height={40}
                    alt="image"
                  />
                </div>

                <div className="pl-2">
                  <h1 className="text-bold text-xs text-cyan-950">
                    Functional Foods
                  </h1>
                  <p className="tracking-tight text-xs text-gray-500 pt-1">
                    Functional Foods
                  </p>
                  <p className="tracking-tighter text-xs text-gray-500">
                    From protein powers to baby formula
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Explore;
