import Link from 'next/link'; // Import Link from Next.js
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch [background:linear-gradient(180deg,_#bfe9f7,_#fff)] flex flex-row items-end justify-center pt-[99px] pb-[100.1px] pl-[41px] pr-5 box-border gap-[133px] top-[0] z-[99] sticky max-w-full text-left text-lg text-black font-open-sans mq750:gap-[33px] mq450:gap-[17px] mq1225:gap-[66px] ${className}`}
    >
      <div className="h-[261px] w-[1440px] relative [background:linear-gradient(180deg,_#bfe9f7,_#fff)] hidden max-w-full" />
      <img
        className="h-[61.9px] w-52 relative object-cover z-[1]"
        loading="lazy"
        alt="Daya Main Logo"
        src="/daya-main-logo@2x.png"
      />
      <nav className="m-0 w-[483px] flex flex-col items-start justify-end pt-0 px-0 pb-[18.9px] box-border max-w-full mq450:w-[55px] mq1050:hidden">
        <nav className="m-0 flex flex-row items-start justify-start gap-[29px] max-w-full text-left text-lg text-black font-abeezee mq450:hidden">
          {/* Use Link for navigation */}
          <Link href="/" className="[text-decoration:none] relative text-[inherit] z-[1]">
            Home
          </Link>
          <Link href="/digital-ambassadors" className="[text-decoration:none] relative text-[inherit] z-[1]">
            Digital Ambassadors
          </Link>
          <div className="h-[22px] w-[143px] relative font-open-sans">
            <Link href="/about-us" className="[text-decoration:none] absolute top-[0px] left-[0px] text-[inherit] inline-block w-[77px] h-[22px] min-w-[77px] whitespace-nowrap z-[1]">
              About Us
            </Link>
            <Link href="/blog" className="[text-decoration:none] absolute top-[0px] left-[105px] text-[inherit] inline-block w-[39px] h-[22px] min-w-[39px] z-[1]">
              Blog
            </Link>
          </div>
        </nav>
      </nav>
      <div className="w-[272px] flex flex-col items-start justify-end pt-0 px-0 pb-[8.5px] box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[19px]">
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="w-[46px] h-5 relative">
              <img
                className="absolute top-[3.5px] left-[33px] w-[13px] h-[6.5px] object-contain z-[1]"
                loading="lazy"
                alt="Vector"
                src="/vector.svg"
              />
              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#218810,_#fffdfd)] w-7 h-5 z-[1]" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <Link href="/help" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[39px] z-[1]">
              Help
            </Link>
          </div>
          <button className="cursor-pointer [border:none] pt-2.5 px-6 pb-[9.4px] bg-yellowgreen flex-1 shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl flex flex-row items-start justify-start z-[1] hover:bg-olivedrab">
            <div className="h-[43.4px] w-[150px] relative shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-yellowgreen hidden" />
            <Link href="/signup" className="[text-decoration:none] flex-1 relative text-lg font-extrabold font-open-sans text-white text-center z-[1]">
              Sign up
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;





