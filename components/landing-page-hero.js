import PropTypes from "prop-types";
import Link from 'next/link'; // Import Link from Next.js
import FrameComponent1 from "./frame-component1";

const LandingPageHero = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[127px] box-border max-w-full text-left text-lg text-black font-abeezee mq1050:pb-[83px] mq1050:box-border mq450:pb-[54px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[645px] w-[602.1px] !m-[0] absolute right-[416.9px] bottom-[-422px] flex flex-col items-start justify-start py-[7px] px-[219px] box-border max-w-full z-[2]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[36px] max-h-full w-[566.1px] object-cover"
              loading="lazy"
              alt=""
              src="/map@2x.png"
            />
            <img
              className="absolute top-[98px] left-[0px] w-[599px] h-[541.9px] object-cover z-[1]"
              alt=""
              src="/people@2x.png"
            />
          </div>
        </div>
        <div className="h-[660px] flex-1 relative [background:linear-gradient(180deg,_#bfe9f7,_#fff)] max-w-full">
          <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#bfe9f7,_#fff)] w-full h-full hidden" />
          <div className="absolute top-[110px] left-[447px] w-[717px] flex flex-col items-start justify-start min-h-[324px] max-w-full">
            <div className="w-[556px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[93px] max-w-full">
              <div className="flex flex-row items-start justify-start gap-[29px] max-w-full">
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <Link href="/" className="[text-decoration:none] relative text-[inherit] z-[1]">
                    Home
                  </Link>
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <Link href="/digital-ambassadors" className="[text-decoration:none] relative text-[inherit] z-[1]">
                    Digital Ambassadors
                  </Link>
                </div>
                <Link href="/about-us" className="[text-decoration:none] relative font-open-sans text-[inherit] inline-block min-w-[77px] z-[1]">
                  About Us
                </Link>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 font-open-sans">
                  <Link href="/blog" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[39px] z-[1]">
                    Blog
                  </Link>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border max-w-full text-center text-21xl font-open-sans">
                <div className="flex-1 flex flex-col items-start justify-start gap-[43px] max-w-full">
                  <h1 className="m-0 self-stretch h-[73px] relative text-inherit leading-[46.67px] font-normal font-inherit inline-block shrink-0 z-[1] mq450:text-5xl mq750:text-13xl">
                    Join the Daya Squad and Make a Difference.
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full text-5xl text-dimgray">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[77px]">
                        <img
                          className="h-2 flex-1 relative max-w-full overflow-hidden z-[1]"
                          loading="lazy"
                          alt=""
                          src="/divider.svg"
                        />
                      </div>
                      <h2 className="m-0 self-stretch h-[63px] relative text-inherit font-normal font-inherit inline-block shrink-0 z-[1] mq450:text-lgi">
                        Earn cool cash while helping your community.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end mt-[-323px] font-open-sans">
              <Link href="/help" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[39px] z-[1]">
                Help
              </Link>
            </div>
          </div>
          <FrameComponent1 dayaMainLogo="/daya-main-logo@2x.png" />
        </div>
      </div>
    </section>
  );
};

LandingPageHero.propTypes = {
  className: PropTypes.string,
};

export default LandingPageHero;

