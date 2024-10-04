import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Landingpage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className=" w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className=" w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" w-[9vw] h-[5vw] bg-green-500 "
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5jSn_ij9xqKSq8-WW_thvCPIf-Hu-jwcJg&s"
                      className=" w-full h-full "
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className=" uppercase text-[7.5vw] font-['Founders_Grotesk_X-Condensed'] leading-[6vw] tracking-tighter font-medium ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For Public And Private Companies",
          "From First Pitch To Last Pitch In IPO",
        ].map((item, index) => {
          return (
            <p className=" font-light text-lg tracking-tighter leading-none">
              {item}
            </p>
          );
        })}
        <div className=" start flex items-center gap-5">
          <div className=" px-5 py-2 border-[1px] bg-zinc-500 rounded-full  font-light text-md uppercase ">
            Start The Project
          </div>
          <div className=" h-10 w-10 border-[1px] bg-zinc-500  items-center rounded-full py-2.5 px-2.5">
            <span>
              <FaArrowUpLong className=" rotate-45" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
