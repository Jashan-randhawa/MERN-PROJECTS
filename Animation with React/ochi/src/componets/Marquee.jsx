import React from "react";
import { motion } from "framer-motion";

export const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.2"
      className=" w-full bg-[#004D43] py-20 rounded-tl-3xl rounded-tr-3xl "
    >
      <div className=" text border-t-2 border-b-2 flex  border-zinc-300 whitespace-nowrap overflow-hidden  ">
        <motion.h1
          initial={{ x: " 0 " }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className=" text-[17vw] leading-none font-['Founders_Grotesk_X-Condensed'] pr-10 mb-[1vw] pt-1 uppercase  font-bold "
        >
          We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: " 0 " }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className=" text-[17vw] leading-none font-['Founders_Grotesk_X-Condensed'] mb-[1vw] pt-1 uppercase  font-bold "
        >
          We Are Ochi
        </motion.h1>
      </div>
    </div>
  );
};
