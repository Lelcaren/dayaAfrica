import PropTypes from "prop-types";

const MainContent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[207px] pl-5 pr-[23px] box-border max-w-full text-left text-21xl text-black font-open-sans mq450:pb-[57px] mq450:box-border mq1050:pb-[88px] mq1050:box-border mq1225:pb-[135px] mq1225:box-border ${className}`}
    >
      <div className="w-[999px] flex flex-col items-start justify-start gap-[301.5px] max-w-full mq750:gap-[75px] mq1050:gap-[151px]">
        <div className="w-[566px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[38px] max-w-full mq750:gap-[19px]">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[39px] max-w-full mq750:gap-[19px]">
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <h1 className="m-0 h-[73px] flex-1 relative text-inherit font-normal font-inherit inline-block max-w-full mq750:text-13xl mq450:text-5xl">
                  Connecting Africa through travel, fun, and finance!
                </h1>
                <div className="w-[566.1px] !m-[0] absolute right-[-501.1px] bottom-[-513px] flex flex-row items-start justify-start pt-[3px] px-[57px] pb-[149px] box-border bg-[url('/map@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                  <img
                    className="h-[645px] w-[566.1px] relative object-cover hidden max-w-full"
                    alt=""
                    src="/map@2x.png"
                  />
                  <div className="h-[493px] flex-1 relative max-w-full">
                    <img
                      className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[407.6px] object-cover z-[1]"
                      alt=""
                      src="/mobile@2x.png"
                    />
                    <img
                      className="absolute top-[89.2px] left-[287.3px] w-[164.7px] h-[403.8px] object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/plane@2x.png"
                    />
                    <img
                      className="absolute top-[374px] left-[180px] w-[261px] h-10 object-cover z-[3]"
                      alt=""
                      src="/logo@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[468px] flex flex-col items-start justify-start gap-[19px] max-w-full text-5xl text-dimgray">
                <div className="flex flex-row items-start justify-start py-0 px-px">
                  <img
                    className="h-2 flex-1 relative max-w-full overflow-hidden"
                    loading="lazy"
                    alt=""
                    src="/divider.svg"
                  />
                </div>
                <h2 className="m-0 self-stretch h-[63px] relative text-inherit font-normal font-inherit inline-block shrink-0 mq450:text-lgi">
                  Dive into the world where fun meets financial freedom. Get
                  personalised rewards for all your transactions.
                </h2>
              </div>
            </div>
            <h1 className="m-0 w-[306px] h-[25px] relative text-13xl font-normal font-inherit inline-block shrink-0 mq750:text-7xl mq450:text-lgi">
              Pay. Play. Connect!
            </h1>
            <button className="cursor-pointer [border:none] pt-2.5 px-[25px] pb-[9.4px] bg-yellowgreen w-[160.6px] shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl flex flex-row items-start justify-start box-border hover:bg-olivedrab">
              <div className="h-[43.4px] w-[160.6px] relative shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-yellowgreen hidden" />
              <div className="flex-1 relative text-lg font-extrabold font-open-sans text-white text-center mix-blend-hard-light z-[1]">
                Sign up
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full text-center text-6xl">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[29.9px] max-w-full">
              <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit z-[1] mq450:text-xl">
                <p className="m-0">Get personalised rewards;</p>
                <p className="m-0">
                  Every day, every week, every month, and every year.
                </p>
              </h2>
              <div className="self-stretch h-2.5 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="self-stretch w-[527px] relative rounded-lg bg-cornflowerblue max-w-full" />
              </div>
            </div>
          </div>
          <div className="w-[797px] flex flex-row items-end justify-center flex-wrap content-end gap-[15px] max-w-full text-lg">
            <div className="h-64 flex flex-col items-start justify-start">
              <img
                className="self-stretch h-[201.8px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/7@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[28.2px] min-w-[385px] max-w-full mq750:min-w-full">
              <img
                className="self-stretch h-[508.8px] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/main@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[11px] pr-3.5 box-border max-w-full">
                <div className="flex-1 flex flex-col items-end justify-start gap-6 max-w-full">
                  <div className="self-stretch h-[53px] relative leading-[21.11px] inline-block shrink-0">
                    When you transact on the Daya app, you stand a chance to win
                    gift cards, shopping vouchers, and even an all-expense paid
                    trip to your dream location on the continent!
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-48 pr-[190px] mq750:pl-24 mq750:pr-[95px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <button className="cursor-pointer [border:none] pt-2 px-[29px] pb-[7px] bg-steelblue-200 flex-1 rounded-18xl flex flex-row items-start justify-start hover:bg-steelblue-100">
                      <div className="h-9 w-[185px] relative rounded-18xl bg-steelblue-200 hidden" />
                      <div className="flex-1 relative text-sm font-open-sans text-white text-center z-[1]">
                        Get started
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
