import React from "react";

const Ingredients = () => {
  return (
    <div>
      <div className="md:w-[850px] flex md:flex-row flex-col gap-3   mx-auto ">
        <div className="md:w-[300px] min-w-min bg-white p-1">
          <h2 className="text-xs text-cyan-800 font-bold">INGREDIENTS</h2>
          <h3 className="text-lg mt-1 text-cyan-800 font-bold">
            Better Ingredients
          </h3>
          <p className="text-xs text-gray-500 pt-3 ">
            Only the best when you choose products offered on our platform,high
            quality ingredients for high quality products
          </p>
        </div>
        {/* 2*/}
        <div className="md:w-[280px] min-w-min ">
          <div className="bg-vitaminc bg-cover md:h-44 p-5">
            <h3 className="text-md font-semibold">Vitamin C</h3>
            <p className="text-xs text-gray-600 pt-2">
              Vitamin C ascorbic acid
            </p>

            <button className=" border-w-2 pt-16 text-xs font-semibold text-green-950 border-b-2 border-slate-900">
              SEE MORE
            </button>
          </div>
        </div>
        {/* 3*/}
        <div className="md:w-[245px] min-w-min  bg-cyan-100 rounded-lg">
          <div className="bg-vitaminc bg-cover md:h-44 p-5">
            <h3 className="text-md font-semibold">Vitamin C</h3>
            <p className="text-xs text-gray-600 pt-2">
              Vitamin C ascorbic acid
            </p>

            <button className=" border-w-2 pt-16 text-xs font-semibold text-green-950 border-b-2 border-slate-900">
              SEE MORE
            </button>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="md:w-[850px]  flex md:flex-row flex-col gap-3 mx-auto pt-2">
        <div className="md:w-[235px] min-w-min bg-cyan-100 rounded-lg ">
          <div className="bg-vitaminc bg-cover md:h-44 p-5">
            <h3 className="text-md font-semibold">Vitamin C</h3>
            <p className="text-xs text-gray-600 pt-2">
              Vitamin C ascorbic acid
            </p>

            <button className=" border-w-2 pt-16 text-xs font-semibold text-green-950 border-b-2 border-slate-900">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="md:w-[235px] min-w-min bg-cyan-100 rounded-lg">
          <div className="bg-vitaminB3 bg-cover md:h-44 p-5">
            <h3 className="text-md font-semibold">Vitamin C</h3>
            <p className="text-xs text-gray-600 pt-2">
              Vitamin C ascorbic acid
            </p>

            <button className=" border-w-2 pt-16 text-xs font-semibold text-green-950 border-b-2 border-slate-900">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="md:w-[235px] min-w-min bg-cyan-100 rounded-lg">
          <div className="bg-lactobacillus bg-cover md:h-44 p-5">
            <h3 className="text-md font-semibold">Vitamin C</h3>
            <p className="text-xs text-gray-600 pt-2">
              Vitamin C ascorbic acid
            </p>

            <button className=" border-w-2 pt-16 text-xs font-semibold text-green-950 border-b-2 border-slate-900">
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
