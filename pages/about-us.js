import Link from "next/link"; // Import Next.js Link
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[633px] leading-[normal] tracking-[normal] text-left text-lg text-black font-abeezee mq450:gap-[158px] mq750:gap-[316px]">
      <div className="self-stretch h-[707px] relative [background:linear-gradient(180deg,_#bfe9f7,_#fff)] max-w-full">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#bfe9f7,_#fff)] w-full h-full hidden" />
        <div className="absolute top-[108px] left-[447px] w-[717px] flex flex-col items-start justify-start min-h-[357px] max-w-full">
          <div className="w-[527px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[113.2px] max-w-full">
            <div className="flex flex-row items-start justify-start gap-[29px] max-w-full">
              <Link href="/" className="[text-decoration:none] relative text-[inherit] z-[1]">
                Home
              </Link>
              <Link href="/digital-ambassadors" className="[text-decoration:none] relative text-[inherit] z-[1]">
                Digital Ambassadors
              </Link>
              <span className="[text-decoration:none] relative font-open-sans text-[inherit] inline-block min-w-[77px] z-[1]">
                About Us
              </span>
              <a className="[text-decoration:none] relative font-open-sans text-[inherit] inline-block min-w-[39px] z-[1]">
                Blog
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[39px] pr-0 box-border max-w-full text-center text-21xl font-open-sans">
              <div className="flex-1 flex flex-col items-end justify-start gap-[45px] max-w-full">
                <div className="w-[451px] flex flex-row items-start justify-end py-0 pl-[53px] pr-[54px] box-border max-w-full">
                  <h1 className="m-0 h-[78.2px] flex-1 relative text-inherit leading-[46.67px] font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq450:text-5xl mq750:text-13xl">
                    The story of Daya in Africa
                  </h1>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[23px] shrink-0 text-5xl text-dimgray">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[77px]">
                    <img
                      className="h-2 flex-1 relative max-w-full overflow-hidden z-[1]"
                      loading="lazy"
                      alt=""
                      src="/divider1.svg"
                    />
                  </div>
                  <h2 className="m-0 h-[67.5px] relative text-inherit font-normal font-inherit inline-block shrink-0 z-[1] mq450:text-lgi">
                    We are transforming the way you transact while giving you
                    rewards, fun and data protection.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end mt-[-356.9px] font-open-sans">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[39px] z-[1]">
              Help
            </a>
          </div>
        </div>
        <FrameComponent1 dayaMainLogo="/daya-main-logo@2x.png" />
      </div>
      <main className="w-full h-[1227.8px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
        <section className="absolute top-[520.87px] left-[-3px] [background:linear-gradient(180deg,_#fbfdff_26.57%,_#92c557_96.91%)] w-[1450px] h-[706.9px] [transform:_rotate(-0.2deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[0px] left-[505px] w-[430px] h-[524.8px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/map@2x.png"
        />
        {/* Adding the new paragraph split into two parts */}
        <p className="absolute top-[600px] left-[300px] w-[1000px] text-lg text-black font-open-sans z-[1]">
          At Daya, we believe finance should be fun and accessible for the young and vibrant African population. By combining gamification frameworks with robust fintech solutions, we empower users to manage their money effortlessly while having a blast.
        </p>
        <p className="absolute top-[700px] left-[300px] w-[700px] text-lg text-black font-open-sans z-[1] mt-5">
          Whether you’re sending money, paying your bills, topping up your airtime, or mining your data, we’ve got you covered!
        </p>
      </main>
      <div className="relative font-open-sans hidden z-[2]">Games</div>
      <FrameComponent2 dayaLogoLight="/daya-logo-light@2x.png" />
    </div>
  );
};

export default AboutUs;

