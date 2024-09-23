import PropTypes from "prop-types";

const Frame = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[740px] left-[0px] w-[1440px] h-[987px] overflow-hidden flex flex-row items-center justify-center ${className}`}
    >
      <div className="w-[1440px] relative [background:linear-gradient(180deg,_#fbfdff_26.57%,_#92c557_96.91%)] h-[597px]" />
    </div>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;
