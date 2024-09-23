import { useMemo } from "react";
import PropTypes from "prop-types";

const Final = ({
  className = "",
  emailSupportdayaafricaAlignSelf,
  emailSupportdayaafricaFlex,
  dayaLogoLight,
}) => {
  const finalStyle = useMemo(() => {
    return {
      alignSelf: emailSupportdayaafricaAlignSelf,
      flex: emailSupportdayaafricaFlex,
    };
  }, [emailSupportdayaafricaAlignSelf, emailSupportdayaafricaFlex]);

  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1367px] h-[387px] overflow-hidden text-left text-mini text-white font-open-sans ${className}`}
      style={finalStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-t-11xl rounded-b-none bg-gray-200 w-[1367px] h-[387px]" />
      <div className="absolute top-[308px] left-[977px] leading-[160%] opacity-[0.8]">{`Terms & Conditions`}</div>
      <div className="absolute top-[310px] left-[148px] tracking-[-0.2px] font-dm-sans opacity-[0.5] mix-blend-normal">
        Copyright © 2024
      </div>
      <div className="absolute top-[308px] left-[1158px] leading-[160%] opacity-[0.8]">
        Privacy Policy
      </div>
    </div>
  );
};

Final.propTypes = {
  className: PropTypes.string,
  dayaLogoLight: PropTypes.string,

  /** Style props */
  emailSupportdayaafricaAlignSelf: PropTypes.any,
  emailSupportdayaafricaFlex: PropTypes.any,
};

export default Final;

