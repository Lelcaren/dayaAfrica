import Link from "next/link";
import Frame from "../components/frame";
import Final from "../components/footer";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-white h-[1532px] overflow-hidden text-left text-mini text-black font-open-sans">
      <Frame />
      <div className="absolute top-[1183px] left-[39px] w-[1327px] h-[348px] overflow-hidden text-white">
        <Final />
        <div className="absolute top-[85px] left-[486px] w-[168px] h-[181px] overflow-hidden">
          <div className="absolute w-[126.31%] top-[calc(50%_-_90.5px)] left-[0%] text-mid tracking-[-0.23px] font-dm-sans text-yellowgreen inline-block">
            Digital Ambassadors Program.
          </div>
          <div className="absolute w-full top-[calc(50%_-_30.5px)] left-[0%] leading-[160%] inline-block opacity-[0.8]">
            Join our Community.
          </div>
          <div className="absolute w-[73.63%] top-[calc(50%_+_9.5px)] left-[0%] leading-[160%] inline-block opacity-[0.8]">
            About us
          </div>
          <div className="absolute w-[57.26%] top-[calc(50%_+_45.5px)] left-[0%] leading-[160%] inline-block opacity-[0.8]">
            Careers
          </div>
        </div>
        <div className="absolute top-[82px] left-[761px] w-[133px] h-[146px] overflow-hidden">
          <div className="absolute top-[calc(50%_-_73px)] left-[0%] text-mid tracking-[-0.23px] font-dm-sans text-yellowgreen">
            Follow Us
          </div>
          <div className="absolute top-[calc(50%_-_31px)] left-[23.31%] leading-[160%] opacity-[0.8]">
            Facebook
          </div>
          <img
            className="absolute h-[13.56%] w-[7.44%] top-[28.08%] right-[88.8%] bottom-[58.36%] left-[3.76%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/001facebook.svg"
          />
          <div className="absolute top-[calc(50%_+_9px)] left-[23.31%] leading-[160%] opacity-[0.8]">
            Twitter
          </div>
          <img
            className="absolute h-[10.89%] w-[14.74%] top-[58.22%] right-[85.26%] bottom-[30.89%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/003twitter.svg"
          />
          <div className="absolute top-[calc(50%_+_49px)] left-[23.31%] leading-[160%] opacity-[0.8]">
            Instagram
          </div>
          <img
            className="absolute h-[13.7%] w-[15.04%] top-[83.56%] right-[84.21%] bottom-[2.74%] left-[0.75%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/004instagram@2x.png"
          />
        </div>
        <div className="absolute top-[82px] left-[977px] w-[285px] overflow-hidden flex flex-col items-start justify-start pt-1 px-0 pb-[75px] box-border gap-1 text-mid text-yellowgreen font-dm-sans">
          <div className="w-[285px] relative tracking-[-0.23px] inline-block">
            Need a hand? Connect with us!
          </div>
          <div className="w-[220px] relative text-mini leading-[160%] font-open-sans text-white inline-block opacity-[0.8]">
            <p className="m-0">
              {`Email: `}
              <a
                className="text-[inherit]"
                href="mailto:support@daya.africa"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  support@daya.africa
                </span>
              </a>
            </p>
            <p className="m-0">Phone: +[Your Contact Number]</p>
          </div>
        </div>
        <div className="absolute top-[82px] left-[152px] w-[293px] h-[146px] overflow-hidden">
          <div className="absolute w-[83.62%] top-[calc(50%_-_9px)] left-[0%] leading-[160%] inline-block opacity-[0.8]">
            Connecting Africa through travel, fun, and finance!
          </div>
          <div className="absolute w-[83.62%] top-[calc(50%_+_43px)] left-[0%] text-xs leading-[160%] inline-block opacity-[0.8]">
            Subscribe to our newsletter to find out more.
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[141px] h-[44.4px] object-cover"
            alt=""
            src="/daya-logo-light@2x.png"
          />
        </div>
        <div className="absolute top-[227px] left-[152px] w-[108.3px] h-[31.8px] overflow-hidden text-center text-xs text-black">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-yellowgreen w-[108.3px] h-[31.8px]" />
          <div className="absolute top-[7.3px] left-[17.3px] font-extrabold inline-block w-[72.9px] h-[17.6px]">
            Subscribe
          </div>
        </div>
      </div>
      <div className="absolute top-[982px] left-[158px] w-[982px] h-[175px] overflow-hidden flex flex-row items-center justify-center text-center text-5xl">
        <div className="w-[982px] relative leading-[0%] flex items-center shrink-0">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:30px]">{`At Daya, we believe finance should be fun and accessible for the young and vibrant African population. By combining gamification frameworks with robust fintech solutions, we empower users to manage their money effortlessly while having a blast. `}</p>
            <p className="m-0 whitespace-pre-wrap">
              Whether you’re sending money, paying your bills, topping up your
              airtime or mining your data, we’ve got you covered!
            </p>
          </span>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1405px] h-[935px] overflow-hidden text-center text-21xl">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#bfe9f7,_#fff)] w-[1440px] h-[660px]" />
        <div className="absolute top-[227px] left-[557px] inline-block w-[343px] h-[73px]">
          The story of Daya in Africa
        </div>
        <img
          className="absolute top-[342px] left-[563px] max-h-full w-[314px]"
          alt=""
          src="/divider1.svg"
        />
        <div className="absolute top-[371px] left-[486px] text-5xl text-dimgray inline-block w-[468px] h-[63px]">
          We are transforming the way you transact while giving you rewards, fun
          and data protection.
        </div>
        <img
          className="absolute top-[466px] left-[505px] w-[430px] h-[489.9px] object-cover"
          alt=""
          src="/map1@2x.png"
        />
      </div>
      <div className="absolute top-[87px] left-[106px] w-[1229px] h-[61.9px] text-lg">
        <div className="absolute top-[21px] left-[341px] overflow-hidden flex flex-row items-start justify-center gap-[29px]">
          <Link
            className="cursor-pointer [text-decoration:none] relative font-abeezee text-[inherit]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative font-abeezee text-[inherit]"
            href="/digital-ambassadors"
          >
            Digital Ambassadors
          </Link>
          <div className="relative">Games</div>
          <div className="relative">About Us</div>
          <div className="relative">Blog</div>
        </div>
        <div className="absolute top-[10px] left-[957px] w-[272px] h-[43.4px] overflow-hidden text-center text-white">
          <div className="absolute top-[0px] left-[122px] w-[150px] h-[43.4px] overflow-hidden">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-yellowgreen w-[150px] h-[43.4px]" />
            <div className="absolute top-[10px] left-[24px] font-extrabold inline-block w-[101px] h-6">
              Sign up
            </div>
          </div>
          <div className="absolute h-[58.29%] w-[45.99%] top-[15.44%] right-[54.01%] bottom-[26.27%] left-[0%]">
            <img
              className="absolute h-[11.07%] w-[28.3%] top-[0%] right-[-0.08%] bottom-[88.93%] left-[71.78%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/vector1.svg"
            />
            <div className="absolute top-[5.3px] left-[0px] [background:linear-gradient(180deg,_#218810,_#fffdfd)] w-7 h-5" />
          </div>
          <div className="absolute top-[11px] left-[63px] text-black text-left">
            Help
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-52 h-[61.9px] object-cover"
          alt=""
          src="/daya-main-logo@2x.png"
        />
      </div>
    </div>
  );
};

export default AboutUs;
