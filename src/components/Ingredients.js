import React from "react";

const Ingredients = () => {
  return (
    <div>
      <div className="md:w-[850px] flex md:flex-row flex-col gap-3   mx-auto ">
        <div className="md:w-[340px] min-w-min bg-white p-1">
          <h2 className="text-xs text-cyan-800 font-bold">INGREDIENTS</h2>
          <h3 className="text-lg mt-1 text-cyan-800 font-bold">
            Better Ingredients
          </h3>
          <p className="text-xs text-gray-500 pt-3 ">
            Only the best when you choose products offered on our platform,high
            quality ingredients for high quality products
          </p>
        </div>
        <div className="md:w-[240px] min-w-min bg-cyan-100">
          <div className="bg-vitaminc bg-fixed md:h-40 ">
            <h3 className="text-md font-semibold">Vitamin C</h3>
            <p className="font-">Vitamin C ascorbic acid</p>

            <button className="border-blue-200 border-w-2">SEE MORE</button>
          </div>
        </div>
        <div className="md:w-[245px] min-w-min  bg-cyan-100">hello</div>
      </div>
      <div className="md:w-[850px] bg-slate-600 flex md:flex-row flex-col gap-3 mx-auto pt-2">
        <div className="md:w-[235px] min-w-min bg-cyan-100 ">hello</div>
        <div className="md:w-[235px] min-w-min bg-cyan-100">hello</div>
        <div className="md:w-[235px] min-w-min bg-cyan-100">hello</div>
        <div className="md:w-[108px] min-w-min bg-cyan-100">hello</div>
      </div>
    </div>
  );
};

export default Ingredients;
