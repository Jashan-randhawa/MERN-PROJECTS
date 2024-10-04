import React from "react";

export const Footer = () => {
  return (
    <div className=" flex gap-5 w-full h-screen p-20 bg-zinc-900 ">
      <div className=" w-1/2 h-full flex flex-col justify-between  font-['Founders_Grotesk_X-Condensed'] ">
        <div className=" heading ">
          <h1 className=" text-[8vw] font-semibold uppercase leading-none -mb-5 ">
            Eye-
          </h1>
          <h1 className=" text-[8vw] font-semibold uppercase leading-none -mb-10 ">
            Opening
          </h1>
        </div>
        <h3>Ochi.</h3>
      </div>
      <div className=" w-1/2 font-['Founders_Grotesk_X-Condensed'] ">
        <h1 className=" text-[5vw] font-semibold uppercase leading-none -mb-10 ">
          Presentations
        </h1>
        <div className="dets font-['Neue_Montreal'] mt-20">
          <a className=" block text-xl font-light " href="#">
            Facebook
          </a>
          <a className=" block text-xl font-light " href="#">
            Intagram
          </a>
          <a className=" block text-xl font-light " href="#">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
