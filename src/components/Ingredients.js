import React from "react";

const Ingredients = () => {
  return (
    <div>
      <div className="md:w-[850px] flex md:flex-row flex-col gap-3   mx-auto ">
        <div className="md:w-[300px] min-w-min bg-white p-1">
          <h2 className="text-xs text-cyan-800 font-bold cursor-pointer hover:text-sky-700">
            INGREDIENTS
          </h2>
          <h3 className="text-lg cursor-pointer hover:text-sky-700 mt-1 text-[#17414F] font-bold">
            Better Ingredients
          </h3>
          <p className="text-xs text-[#727272] pt-3 cursor-pointer hover:text-sky-700 ">
            Only the best when you choose products offered on our platform,high
            quality ingredients for high quality products
          </p>
        </div>
        {/* 2*/}
        <div className="md:w-[280px] min-w-min ">
          <div className="bg-vitaminc bg-cover md:h-44 p-5">
            <h3 className="text-md font-semibold cursor-pointer hover:text-sky-700">
              Vitamin C
            </h3>
            <p className="text-xs text-[#727272] cursor-pointer hover:text-sky-700 pt-2">
              Vitamin C ascorbic acid
            </p>

            <button className=" border-w-2 pt-16 text-xs font-semibold  hover:border-sky-700 text-[#003569] border-b-2 border-slate-900">
              SEE MORE
            </button>
          </div>
        </div>
        {/* 3*/}
        <div className="md:w-[245px] min-w-min cursor-pointer hover:bg-sky-700 bg-cyan-100 rounded-lg">
          <div className="bg-vitaminc bg-cover md:h-44 p-5">
            <h3 className="text-md font-semibold cursor-pointer hover:text-sky-700">
              Vitamin B3
            </h3>
            <p className="text-xs text-gray-600 cursor-pointer hover:text-sky-700 pt-2">
              Niacin for healthy gut and skin
            </p>

            <button className=" border-w-2 pt-16 text-xs cursor-pointer hover:border-sky-700 font-semibold text-green-950 border-b-2 border-slate-900">
              SEE MORE
            </button>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="md:w-[850px]  flex md:flex-row flex-col gap-3 mx-auto pt-2">
        <div className="md:w-[235px] min-w-min bg-cyan-100 rounded-lg ">
          <div className="bg-vitaminc bg-cover md:h-44 p-5">
            <h3 className="text-md font-semibold cursor-pointer hover:text-sky-700">
              Magnesium
            </h3>
            <p className="text-xs text-gray-600 pt-2 cursor-pointer hover:text-sky-700">
              Boost energy and support muscle function
            </p>

            <button className=" border-w-2 pt-16 text-xs font-semibold hover:border-sky-700 text-green-950 border-b-2 border-slate-900">
              SEE MORE
            </button>
          </div>
        </div>
        {/*  */}
        <div className="md:w-[235px] min-w-min bg-cyan-100 cursor-pointer hover:bg-sky-700 rounded-lg">
          <div className="bg-vitaminB3 bg-cover md:h-44 p-5">
            <h3 className="text-md font-semibold cursor-pointer hover:text-sky-700">
              {" "}
              Hyaluronic Acid
            </h3>
            <p className="text-xs text-gray-600 pt-2 cursor-pointer hover:text-sky-700">
              For smooth, supple and soft skin!
            </p>

            <button className=" border-w-2 pt-16 text-xs font-semibold hover:border-sky-700 text-green-950 border-b-2 border-slate-900">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="md:w-[235px] min-w-min bg-cyan-100 rounded-lg">
          <div className="bg-lactobacillus bg-cover md:h-44 p-5">
            <h3 className="text-md font-semibold cursor-pointer hover:text-sky-700">
              Lactobacillus{" "}
            </h3>
            <p className="text-xs text-gray-600 pt-2 cursor-pointer hover:text-sky-700">
              Invigorate your gut microbiome
            </p>

            <button className=" border-w-2 pt-16 text-xs font-semibold  hover:border-sky-700 text-green-950 border-b-2 border-slate-900">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="md:w-[108px] min-w-min bg-bg4 md:h-44 bg-cover"></div>
      </div>
    </div>
  );
};

export default Ingredients;
