import React, { useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { delay, motion } from "framer-motion";
import { Power4 } from "gsap";

export const Featured = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [hover, sethover] = useState(false);
  const [hover1, sethover1] = useState(false);
  const fyde = () => {};
  return (
    <div className=" w-full py-20 ">
      <div className=" w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className=" text-7xl font-['Neue_Montreal'] tracking-tight ">
          Featured projects
        </h1>
      </div>
      <div className=" px-20 ">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
            className="cardcontainer relative w-1/2 h-[75vh]   bg-red-500 "
          >
            <h1 className=" absolute flex overflow-hidden text-[#CDEA68] left-full z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter ">
              {"Fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={hover ? { y: "0" } : { y: "100%" }}
                  transition={{
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.03,
                  }}
                  className="inline-block capitalize"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" overflow-hidden w-full h-full rounded-lg bg-green-500 ">
              <img
                className=" w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => sethover1(true)}
            onMouseLeave={() => sethover1(false)}
            className="cardcontainer relative w-1/2 h-[75vh]  rounded-lg bg-red-500 "
          >
            <div className=" overflow-hidden w-full h-full rounded-lg bg-green-500 ">
              <h1 className=" absolute flex text-[#CDEA68] right-full z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter overflow-hidden ">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hover1 ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.03,
                    }}
                    className="inline-block capitalize "
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className=" w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
