import React from "react";
import { Navbar } from "./componets/NAvbar";
import { Landingpage } from "./componets/Landingpage";
import { Marquee } from "./componets/Marquee";
import { About } from "./componets/About";
import { Eyes } from "./componets/Eyes";
import { Featured } from "./componets/featured";
import { Cards } from "./componets/Cards";
import { Footer } from "./componets/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=" w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
