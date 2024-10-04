import React, { useEffect, useState } from "react";

import LocomotiveScroll from "locomotive-scroll";

export const Eyes = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mousex = e.clientX;
      const mousey = e.clientY;

      let deltax = mousex - window.innerWidth / 2;
      let deltay = mousey - window.innerHeight / 2;

      var angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setrotate(angle - 180);
    });
  });

  return (
    <div className=" eyes w-full h-screen overflow-hidden  ">
      <div
        data-scroll
        data-scroll-speed="-0.3"
        className=' relative w-full bg-center h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'
      >
        <div className=" flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10 ">
          <div className=" flex w-[15vw] justify-center items-center h-[15vw] rounded-full bg-zinc-100  ">
            <div className=" relative w-2/3 rounded-full h-2/3 bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 "
              >
                <div className=" w-10 h-10 rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
          <div className=" flex w-[15vw] justify-center items-center h-[15vw] rounded-full bg-zinc-100  ">
            <div className=" relative w-2/3 rounded-full h-2/3 bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 "
              >
                <div className=" w-10 h-10 rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
