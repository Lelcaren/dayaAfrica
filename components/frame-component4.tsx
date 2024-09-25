import type { NextPage } from "next";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[138px] pl-[155px] pr-[180px] box-border max-w-full text-left text-11xl text-black font-open-sans mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[77px] mq750:pr-[90px] mq750:pb-[90px] mq750:box-border ${className}`}
    >
      <div className="flex-1 rounded-21xl bg-lightblue flex flex-col items-start justify-start pt-[43px] pb-[35px] pl-[594px] pr-[11px] box-border relative gap-[33px] max-w-full mq1225:pl-[297px] mq1225:box-border mq450:pl-5 mq450:pt-7 mq450:pb-[23px] mq450:box-border mq750:gap-4 mq750:pl-[148px] mq750:box-border">
        <div className="w-[1105px] h-[427px] relative rounded-21xl bg-lightblue hidden max-w-full z-[0]" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-0 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full z-[1] mq450:text-lg mq750:text-5xl">
              What You will be doing?
            </h1>
          </div>
          <div className="w-[465px] relative text-xl inline-block max-w-full z-[1] mq450:text-base">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li className="mb-0">
                Promote Daya: Spread the word about Daya's awesomeness.
              </li>
              <li>Provide Support: Be a financial guru for your community.</li>
            </ul>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-0 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full z-[1] mq450:text-lg mq750:text-5xl">
              Earn Residual Income by:
            </h1>
          </div>
          <div className="w-[465px] relative text-xl inline-block max-w-full z-[1] mq450:text-base">
            <ul className="m-0 font-inherit text-inherit pl-[27px]">
              <li className="mb-0">
                Referral Rewards: Get paid for every friend who joins and
                transacts on Daya.
              </li>
              <li className="mb-0">
                Tiered Incentives: Level up and earn even more.
              </li>
              <li>
                Crypto Bonuses: Be a crypto champion and earn extra rewards.
              </li>
            </ul>
          </div>
        </div>
        <img
          className="w-[496px] h-[515.4px] absolute !m-[0] bottom-[-54.4px] left-[34px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/2@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
