import type { NextPage } from "next";
import FrameComponent7 from "../components/frame-component7";
import MainContent from "../components/main-content";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent9 from "../components/frame-component9";

const HomePage: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[63px] leading-[normal] tracking-[normal] text-left text-lg text-black font-open-sans mq750:gap-[31px] mq450:gap-4">
      <FrameComponent7 />
      <MainContent />
      <FrameComponent8 />
      <div className="relative hidden">Games</div>
      <FrameComponent9 />
    </div>
  );
};

export default HomePage;
