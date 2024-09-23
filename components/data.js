import PropTypes from "prop-types";

const DataOwnershipContent = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2644px] left-[0px] w-[1440px] h-[987px] overflow-hidden flex flex-row items-center justify-center ${className}`}
    >
      <div className="w-[1440px] relative [background:linear-gradient(180deg,_#fbfdff,_#92c557)] h-[987px]" />
    </div>
  );
};

DataOwnershipContent.propTypes = {
  className: PropTypes.string,
};

export default DataOwnershipContent;
