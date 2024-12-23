import React from "react";
import Image from "next/image";
const blog = () => {
  return (
    <div className="md:w-[850px] mx-auto  ">
      <div flex flex-col>
        <center>
          <h1 className="text-[#003569] text-xs pt-4">Our Blog</h1>
          <h2 className="text-[#17414F] text-lg pb-4">Latest News</h2>
        </center>
      </div>
      <div className="grid md:grid-rows-3 md:grid-flow-col gap-3 grid-flow-row">
        {/* 1 */}
        <div className="md:row-span-2  w-52 ">
          {/* <div className="bg-bg5 bg-cover md:h-72 p-5"> */}
          {/* <button className=" border-w-2  text-xs font-semibold text-green-950 border-b-2 border-slate-900">
              SEE MORE
            </button> */}
          {/* </div> */}
          <Image
            src="/images/div.item-post-inner.png"
            width={200}
            height={200}
            alt="image"
            className="w-full h-full"
          />
        </div>
        {/* 2 */}
        <div className="col-span-1   w-52 h-32 ">
          <Image
            src="/images/div.post-thumb (1).png"
            width={200}
            height={250}
            alt="image"
            className="w-full h-full"
          />
        </div>
        {/* 3 */}
        <div className="col-span-1">
          <Image
            src="/images/div.item-post-inner (1).png"
            width={200}
            alt="image"
            height={200}
            className=""
          />
        </div>
        {/* 4 */}
        <div className="row-span-2 w-52 ">
          <Image
            src="/images/div.item-post-inner (2).png"
            width={250}
            alt="image"
            height={200}
            className="w-full h-full"
          />
        </div>
        {/* 5 */}
        <div className="row-span-2 ">
          <Image
            src="/images/div.item-post-inner.png"
            width={200}
            height={200}
            alt="image"
            className="md:w-full md:h-full"
          />
        </div>
        {/* 6 */}
        <div className="col-span-1 ">
          <Image
            src="/images/div.post-thumb (1).png"
            width={200}
            height={200}
            alt="image"
            className="md:w-full md:h-full"
          />
        </div>
        {/* 7 */}
        <div className="col-span-1">
          <Image
            src="/images/div.item-post-inner (1).png"
            width={200}
            height={200}
            alt="image"
          />
        </div>
        {/* 8 */}
        <div className="row-span-2 ">
          <Image
            src="/images/div.item-post-inner (2).png"
            width={200}
            height={200}
            alt="image"
            className="md:w-full md:h-full"
          />
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default blog;
