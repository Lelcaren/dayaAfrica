import type { NextPage } from "next";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[116px] pl-5 pr-[45px] box-border max-w-full text-center text-5xl text-black font-open-sans mq1050:pb-[75px] mq1050:box-border mq1225:pr-[22px] mq1225:box-border mq450:pb-[49px] mq450:box-border ${className}`}
    >
      <div className="w-[1105px] flex flex-col items-end justify-start gap-[81px] max-w-full mq1225:gap-10 mq750:gap-5">
        <div className="w-[1023px] flex flex-row items-start justify-end py-0 px-20 box-border max-w-full mq1050:pl-10 mq1050:pr-10 mq1050:box-border">
          <h2 className="m-0 h-[281px] flex-1 relative text-inherit leading-[150%] font-normal font-inherit flex items-center max-w-full mq450:text-lgi mq450:leading-[29px]">
            <span>
              <p className="[margin-block-start:0] [margin-block-end:30px]">{`Are you a tech-savvy, socially connected individual looking for an exciting opportunity to impact your community while building a sustainable passive income stream? `}</p>
              <p className="m-0">
                Daya is seeking enthusiastic Digital Ambassadors to join us on
                the journey to financial freedom for all. This is your chance to
                be at the forefront of financial innovation, promote sustainable
                social inclusion, and earn perpetual residual income.
              </p>
            </span>
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-11xl">
          <img
            className="h-[501.4px] w-[490px] absolute !m-[0] top-[-58px] right-[22px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/1@2x.png"
          />
          <div className="flex-1 rounded-21xl bg-palegoldenrod flex flex-col items-start justify-start pt-14 px-[65px] pb-20 box-border gap-[30px] max-w-full mq450:pt-9 mq450:pb-[52px] mq450:box-border mq750:gap-[15px] mq750:pl-8 mq750:pr-8 mq750:box-border">
            <div className="w-[1105px] h-[403px] relative rounded-21xl bg-palegoldenrod hidden max-w-full" />
            <div className="w-[512px] flex flex-row items-start justify-start py-0 pl-3 pr-[11px] box-border max-w-full">
              <h1 className="m-0 flex-1 relative text-inherit leading-[34.44px] font-normal font-inherit inline-block min-h-[74px] max-w-full z-[1] mq450:text-lg mq750:text-5xl">
                Benefits of joining the Daya Squad?
              </h1>
            </div>
            <div className="w-[465px] h-[163px] relative text-xl inline-block shrink-0 max-w-full z-[1] mq450:text-base">
              <ul className="m-0 font-inherit text-inherit pl-[27px]">
                <li className="mb-0">
                  Empower Your Community: Be a financial hero and help others
                  use Daya.
                </li>
                <li className="mb-0">{`Flexible & Rewarding: Work your way and earn big bucks.`}</li>
                <li>
                  Be Part of the Future: Join the financial revolution with
                  Daya's innovative features.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
