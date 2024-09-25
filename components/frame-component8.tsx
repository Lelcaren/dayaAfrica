import type { NextPage } from "next";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[147px] pl-[167px] pr-[168px] box-border max-w-full text-center text-17xl text-white font-open-sans mq750:pl-[83px] mq750:pr-[84px] mq750:pb-24 mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex-1 rounded-21xl bg-midnightblue flex flex-col items-end justify-start pt-[69px] px-[87px] pb-[44.6px] box-border relative gap-[23px] max-w-full mq750:pl-[43px] mq750:pr-[43px] mq750:box-border mq450:pt-[45px] mq450:px-5 mq450:pb-[29px] mq450:box-border">
        <div className="w-[1105px] h-[403px] relative rounded-21xl bg-midnightblue hidden max-w-full z-[0]" />
        <div className="w-[495.2px] flex flex-row items-start justify-end py-0 px-[29px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full z-[1] mq750:text-10xl mq450:text-3xl">
            Play Games with the coins you earn!
          </h1>
        </div>
        <div className="w-[492.7px] flex flex-row items-start justify-center max-w-full">
          <img
            className="h-2 w-[314px] relative z-[1]"
            alt=""
            src="/divider-1.svg"
          />
        </div>
        <div className="w-[504px] flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full text-xl">
          <div className="flex-1 relative leading-[23.33px] inline-block min-h-[72px] max-w-full z-[1] mq450:text-base">
            Have fun with our bouquet of games, and earn additional coins and
            rewards while managing your finances.
          </div>
        </div>
        <div className="w-[502.5px] flex flex-row items-start justify-end py-0 px-[173px] box-border max-w-full mq750:pl-[86px] mq750:pr-[86px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <button className="cursor-pointer [border:none] pt-2.5 px-6 pb-[9.4px] bg-khaki flex-1 shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl flex flex-row items-start justify-start z-[1] hover:bg-darkkhaki">
            <div className="h-[43.4px] w-[155.7px] relative shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-khaki hidden" />
            <div className="flex-1 relative text-lg font-open-sans text-black text-center mix-blend-hard-light z-[1]">
              Play now!
            </div>
          </button>
        </div>
        <img
          className="w-[506px] h-[591.5px] absolute !m-[0] top-[-104px] left-[56px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/game@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent8;
