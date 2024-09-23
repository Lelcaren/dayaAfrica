import FrameComponent2 from "./frame-component2";
import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start max-w-full text-left text-11xl text-black font-open-sans ${className}`}
    >
      <div className="self-stretch [background:linear-gradient(180deg,_#fbfdff,_#92c557)] flex flex-row items-end justify-start pt-[22px] pb-[494px] pl-[126px] pr-[47px] box-border gap-[27px] max-w-full mq750:pl-[63px] mq750:pr-[23px] mq750:pb-[209px] mq750:box-border mq450:pl-5 mq450:box-border mq1050:pt-5 mq1050:pb-[321px] mq1050:box-border mq1225:flex-wrap">
        <div className="h-[987px] w-[1440px] relative [background:linear-gradient(180deg,_#fbfdff,_#92c557)] hidden max-w-full" />
        <div className="w-[492px] flex flex-col items-start justify-start pt-0 px-0 pb-[92px] box-border max-w-full mq750:min-w-full mq450:pb-[60px] mq450:box-border mq1225:flex-1">
          <div className="self-stretch h-[267.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[81.4px] box-border gap-[38px] max-w-full mq750:gap-[19px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[25px] shrink-0 max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
                <h1 className="m-0 relative text-inherit font-extrabold font-inherit z-[1] mq750:text-5xl mq450:text-lg">
                  Your data is valuable. Daya gives you data ownership and
                  autonomy
                </h1>
                <div className="self-stretch h-8 relative text-xl inline-block shrink-0 z-[1] mq450:text-base">
                  (and we can also show you how to mine your data safely for a
                  profit 😉)
                </div>
              </div>
              <div className="w-[467px] flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-xl">
                <div className="flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
                  Take control of your data with well-informed choices on what
                  your data can be used for.
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-2.5 px-[25px] pb-[9.4px] bg-cornflowerblue w-[160.6px] shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl flex flex-row items-start justify-start box-border z-[1] hover:bg-mediumpurple">
              <div className="h-[43.4px] w-[160.6px] relative shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-cornflowerblue hidden" />
              <a className="[text-decoration:none] flex-1 relative text-lg font-extrabold font-open-sans text-white text-center mix-blend-hard-light z-[1]">
                Learn More
              </a>
            </button>
          </div>
        </div>
        <div className="h-[471px] flex-1 relative min-w-[486px] max-w-full mq750:min-w-full">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[233px] rounded-6xl bg-gray-100 w-[471px] z-[1]" />
          <div className="absolute top-[295px] left-[660px] rounded-11xl bg-cornflowerblue w-[88px] h-[82px] z-[2]" />
          <img
            className="absolute top-[31px] left-[0px] rounded-56xl w-[646px] h-[425.2px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/data-mining@2x.png"
          />
        </div>
      </div>
      <FrameComponent2
        socialNamesMarginTop="-385px"
        dayaLogoLight="/daya-logo-light@2x.png"
      />
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
