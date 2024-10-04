import React from "react";

export const About = () => {
  return (
    <div className=" w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className=" font-['Neue_Montreal'] text-[4.5vw]  leading-[4vw] tracking-tight  ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className=" flex gap-5 w-full border-t-[1px] pt-10 border-[#2c3312] mt-20 ">
        <div className=" w-1/2 ">
          <h1 className="text-7xl ">Our approach:</h1>
          <button className=" flex  gap-10 items-center mt-10 px-10 py-6 bg-zinc-900 uppercase rounded-full text-white ">
            Read More
            <div className=" w-2 h-2 text-3xl bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className=" w-1/2 h-[70vh] rounded-3xl bg-[#718721]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            className=" w-full h-full "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
