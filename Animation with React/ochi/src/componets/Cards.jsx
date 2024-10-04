import React from "react";

export const Cards = () => {
  return (
    <div className=" w-full h-screen bg-zinc-900 items-center px-32 flex gap-5 ">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className=" card relative rounded-xl w-full h-full  bg-[#004D43] flex items-center justify-center ">
          <img
            className=" w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className=" absolute px-5 py-3 border-2 rounded-full left-5 bottom-5 text-xs ">
            &copy;2019-2024
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className=" card relative flex items-center justify-center w-1/2 rounded-xl h-full  bg-[#192826] ">
          <img
            className=" w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className=" absolute px-5 py-3 border-2 rounded-full left-5 bottom-5 text-xs ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className=" card flex relative items-center justify-center w-1/2 h-full rounded-xl  bg-[#192826] ">
          <img
            className=" w-32 "
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className=" absolute px-5 py-3 border-2 rounded-full left-5 bottom-5 text-xs ">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
};
