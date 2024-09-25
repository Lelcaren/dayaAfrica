import type { NextPage } from "next";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-26xl text-black font-open-sans ${className}`}
    >
      <div className="w-[960px] flex flex-col items-start justify-start gap-[11px] max-w-full">
        <div className="w-[890px] flex flex-row items-start justify-start py-0 pl-[201px] pr-[200px] box-border max-w-full mq1050:pl-[100px] mq1050:pr-[100px] mq1050:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
          <h1 className="m-0 h-[74px] flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-8xl mq750:text-17xl">
            How to get started?
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-11xl mq1050:flex-wrap mq1050:justify-center">
          <div className="h-[375.2px] w-[216px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border mq1050:flex-1">
            <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[60.2px]">
              <img
                className="w-[201px] flex-1 relative max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/3@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[3px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[11.7px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[27px] pr-[26px]">
                    <h1 className="m-0 flex-1 relative text-inherit font-normal font-inherit mq450:text-lg mq750:text-5xl">
                      Sign Up
                    </h1>
                  </div>
                  <h2 className="m-0 self-stretch relative text-5xl font-normal font-inherit z-[1] mq450:text-lgi">
                    Join the squad in a few clicks
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[619px] flex flex-row items-start justify-start gap-[85px] max-w-full mq1050:flex-1 mq450:gap-[21px] mq750:gap-[42px] mq750:flex-wrap mq750:min-w-full">
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 mq750:flex-1">
              <div className="flex flex-col items-end justify-start gap-[57.1px]">
                <div className="flex flex-row items-start justify-end py-0 pl-0 pr-[7px]">
                  <img
                    className="h-[212.9px] w-[214px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/4@2x.png"
                  />
                </div>
                <div className="w-[213px] flex flex-col items-start justify-start gap-[7px]">
                  <div className="w-[199px] flex flex-row items-start justify-start py-0 pl-5 pr-[19px] box-border">
                    <h1 className="m-0 h-[74px] flex-1 relative text-inherit font-normal font-inherit inline-block mq450:text-lg mq750:text-5xl">
                      Get Trained
                    </h1>
                  </div>
                  <h2 className="m-0 relative text-5xl font-normal font-inherit mq450:text-lgi">
                    Learn the ropes from our experts.
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-end justify-start gap-[39.8px] min-w-[203px] mq450:gap-5">
              <img
                className="self-stretch h-[221.2px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/5@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[51px] pr-[49px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[27px] pr-[26px]">
                    <h1 className="m-0 relative text-inherit leading-[34.44px] font-normal font-inherit inline-block min-h-[74px] mq450:text-lg mq750:text-5xl">
                      Start Earning
                    </h1>
                  </div>
                  <h2 className="m-0 relative text-5xl font-normal font-inherit z-[1] mq450:text-lgi">
                    Make money by promoting Daya and helping others.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
