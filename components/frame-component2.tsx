import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  className?: string;
  dayaLogoLight?: string;

  /** Style props */
  socialNamesMarginTop?: CSSProperties["marginTop"];
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  className = "",
  socialNamesMarginTop,
  dayaLogoLight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: socialNamesMarginTop,
    };
  }, [socialNamesMarginTop]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-[37px] pr-9 box-border max-w-full ${className}`}
      style={frameDivStyle}
    >
      <footer className="flex-1 rounded-t-11xl rounded-b-none bg-gray-200 flex flex-row items-start justify-between pt-[82px] pb-[55px] pl-[148px] pr-[105px] box-border max-w-full gap-5 z-[1] text-left text-mini text-gray-400 font-open-sans mq450:pt-[53px] mq450:pb-9 mq450:box-border mq750:pl-[37px] mq750:pr-[26px] mq750:box-border mq1225:flex-wrap mq1225:pl-[74px] mq1225:pr-[52px] mq1225:box-border">
        <div className="h-[387px] w-[1367px] relative rounded-t-11xl rounded-b-none bg-gray-200 hidden max-w-full" />
        <div className="w-[249px] flex flex-col items-start justify-start gap-[51.2px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1 pr-0">
            <div className="flex-1 flex flex-col items-start justify-start gap-2.5">
              <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[9.6px]">
                <img
                  className="h-[44.4px] w-[141px] relative object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src={dayaLogoLight}
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="relative leading-[160%] z-[2]">
                  Connecting Africa through travel, fun, and finance!
                </div>
                <div className="self-stretch relative text-xs leading-[160%] z-[2]">
                  Subscribe to our newsletter to find out more.
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[7.3px] px-[17px] pb-[6.9px] bg-yellowgreen w-[108.3px] shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl flex flex-row items-start justify-start box-border z-[2] hover:bg-olivedrab">
                <div className="h-[31.8px] w-[108.3px] relative shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-yellowgreen hidden" />
                <div className="flex-1 relative text-xs font-extrabold font-open-sans text-black text-center z-[1]">
                  Subscribe
                </div>
              </button>
            </div>
          </div>
          <div className="relative tracking-[-0.2px] font-dm-sans text-gray-300 mix-blend-normal z-[1]">
            Copyright © 2024
          </div>
        </div>
        <div className="w-[186px] flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-[18px] box-border">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[21px] gap-4 z-[2]">
            <div className="w-[212.2px] relative text-mid tracking-[-0.23px] font-dm-sans text-yellowgreen inline-block">
              Digital Ambassadors Program.
            </div>
            <div className="self-stretch relative leading-[160%]">
              Join our Community.
            </div>
            <div className="w-[123.7px] flex flex-col items-start justify-start gap-3">
              <div className="self-stretch relative leading-[160%]">
                About us
              </div>
              <div className="w-[97.2px] relative leading-[160%] inline-block">
                Careers
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[26px] gap-[19px] text-mid text-yellowgreen font-dm-sans">
          <div className="relative tracking-[-0.23px] inline-block min-w-[73px] z-[2]">
            Follow Us
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-2.5 text-mini text-gray-400 font-open-sans">
            <div className="flex flex-col items-start justify-start gap-[22.6px]">
              <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-1.5">
                <img
                  className="h-[19.8px] w-[9.9px] relative z-[2]"
                  loading="lazy"
                  alt=""
                  src="/001facebook.svg"
                />
              </div>
              <img
                className="w-[19.6px] h-[15.9px] relative z-[2]"
                loading="lazy"
                alt=""
                src="/003twitter.svg"
              />
              <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
                <img
                  className="h-5 w-5 relative object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/004instagram@2x.png"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="self-stretch flex flex-col items-start justify-start gap-4">
                <div className="relative leading-[160%] inline-block min-w-[71px] z-[2]">
                  Facebook
                </div>
                <div className="relative leading-[160%] inline-block min-w-[48px] z-[2]">
                  Twitter
                </div>
                <div className="relative leading-[160%] inline-block min-w-[71px] z-[2]">
                  Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[285px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-mid text-yellowgreen font-dm-sans">
          <div className="self-stretch flex flex-col items-start justify-start gap-[148px] mq450:gap-[74px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-1">
              <div className="self-stretch relative tracking-[-0.23px] z-[2]">
                Need a hand? Connect with us!
              </div>
              <div className="w-[220px] relative text-mini leading-[160%] font-open-sans text-gray-400 inline-block z-[2]">
                <p className="m-0">
                  {`Email: `}
                  <a
                    className="text-[inherit]"
                    href="mailto:support@daya.africa"
                    target="_blank"
                  >
                    <span className="[text-decoration:underline]">
                      support@daya.africa
                    </span>
                  </a>
                </p>
                <p className="m-0">Phone: +[Your Contact Number]</p>
              </div>
            </div>
            <div className="w-[275px] flex flex-row items-start justify-between gap-5 text-mini text-gray-400 font-open-sans">
              <div className="relative leading-[160%] z-[1]">{`Terms & Conditions`}</div>
              <div className="relative leading-[160%] inline-block min-w-[95px] z-[1]">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrameComponent2;
