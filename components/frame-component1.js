import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "", dayaMainLogo }) => {
  return (
    <header
      className={`absolute top-[87px] left-[106px] w-[1229px] h-[61.9px] ${className}`}
    >
      <img
        className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-52 object-cover z-[1]"
        loading="lazy"
        alt=""
        src={dayaMainLogo}
      />
      <button className="cursor-pointer [border:none] pt-2.5 px-6 pb-[9.4px] bg-yellowgreen absolute top-[10px] left-[1079px] shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl w-[150px] flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-olivedrab">
        <div className="h-[43.4px] w-[150px] relative shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-yellowgreen hidden" />
        <a className="[text-decoration:none] flex-1 relative text-lg font-extrabold font-open-sans text-white text-center z-[1]">
          Sign up
        </a>
      </button>
      <div className="absolute top-[22px] left-[957px] w-[46px] h-5">
        <img
          className="absolute top-[3.5px] left-[33px] w-[13px] h-[6.5px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#218810,_#fffdfd)] w-7 h-5 z-[1]" />
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  dayaMainLogo: PropTypes.string,
};

export default FrameComponent1;
