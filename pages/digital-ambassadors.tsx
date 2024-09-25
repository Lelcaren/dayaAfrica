import type { NextPage } from "next";
import LandingPageHero from "../components/landing-page-hero";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent6 from "../components/frame-component6";

const DigitalAmbassadors: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal] text-left text-lg text-black font-open-sans">
      <LandingPageHero />
      <div className="w-[610px] flex flex-row items-start justify-center pt-0 px-5 pb-[124.2px] box-border max-w-full">
        <img
          className="h-[201.8px] w-[190px] relative object-cover"
          loading="lazy"
          alt=""
          src="/7@2x.png"
        />
      </div>
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <div className="relative hidden">Games</div>
      <FrameComponent6 />
    </div>
  );
};

export default DigitalAmbassadors;
