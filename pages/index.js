import Link from "next/link";
import DataOwnershipContent from "../components/data";
import Final from "../components/footer";

const HomePage = () => {
  return (
    <div className="w-full relative bg-white h-[3633px] overflow-hidden text-left text-lg text-black font-open-sans">
      <DataOwnershipContent />
      <div className="absolute top-[1505px] left-[219px] w-[190px] h-[201.8px] overflow-hidden flex flex-col items-center justify-center">
        <img
          className="w-[190px] relative h-[201.8px] object-cover"
          alt=""
          src="/7@2x.png"
        />
      </div>
      <div className="absolute top-[3246px] left-[37px] w-[1367px] h-[387px] overflow-hidden text-mini text-white">
        <Final
          emailSupportdayaafricaAlignSelf="unset"
          emailSupportdayaafricaFlex="unset"
        />
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
      <div className="absolute top-[2666px] left-[126px] w-[1267px] h-[471px] overflow-hidden text-xl">
        <div className="absolute top-[0px] left-[752px] rounded-[25px] bg-gray-100 w-[471px] h-[471px]" />
        <div className="absolute top-[295px] left-[1179px] rounded-11xl bg-cornflowerblue w-[88px] h-[82px]" />
        <div className="absolute top-[112px] left-[0px] text-11xl font-extrabold inline-block w-[488px] h-[74px]">
          Your data is valuable. Daya gives you data ownership and autonomy
        </div>
        <div className="absolute top-[196px] left-[0px] inline-block w-[492px] h-8">
          (and we can also show you how to mine your data safely for a profit
          😉)
        </div>
        <div className="absolute top-[253px] left-[1px] inline-block w-[465px] h-[45px]">
          Take control of your data with well-informed choices on what your data
          can be used for.
        </div>
        <div className="absolute top-[336px] left-[0px] w-[160.6px] h-[43.4px] overflow-hidden text-center text-lg text-white">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-cornflowerblue w-[160.6px] h-[43.4px]" />
          <div className="absolute top-[10px] left-[25.7px] font-extrabold inline-block w-[108.2px] h-6 mix-blend-hard-light">
            Learn More
          </div>
        </div>
        <img
          className="absolute top-[31px] left-[519px] rounded-[75px] w-[646px] h-[425.2px] object-cover"
          alt=""
          src="/data-mining@2x.png"
        />
      </div>
      <div className="absolute top-[1927px] left-[167px] w-[1105px] h-[591.5px] overflow-hidden text-center text-white">
        <div className="absolute top-[104px] left-[0px] rounded-21xl bg-midnightblue w-[1105px] h-[403px]" />
        <div className="absolute top-[419px] left-[688.2px] w-[155.7px] h-[43.4px] overflow-hidden text-black">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-khaki w-[155.7px] h-[43.4px]" />
          <div className="absolute top-[10px] left-[24.9px] inline-block w-[104.8px] h-6 mix-blend-hard-light">
            Play now!
          </div>
        </div>
        <div className="absolute top-[173px] left-[551.5px] text-[36px] inline-block w-[436.2px] h-[90px]">
          Play Games with the coins you earn!
        </div>
        <div className="absolute top-[318px] left-[513.7px] text-xl inline-block w-[504px] h-[72px]">
          Have fun with our bouquet of games, and earn additional coins and
          rewards while managing your finances.
        </div>
        <img
          className="absolute top-[287px] left-[614px] max-h-full w-[314px]"
          alt=""
          src="/divider.svg"
        />
        <img
          className="absolute top-[0px] left-[56px] w-[506px] h-[591.5px] object-cover"
          alt=""
          src="/game@2x.png"
        />
      </div>
      <div className="absolute top-[984px] left-[221px] w-[997px] h-[777px] overflow-hidden text-center text-[14px]">
        <div className="absolute top-[90px] left-[235px] rounded-[18px] bg-cornflowerblue w-[527px] h-2.5" />
        <div className="absolute top-[741px] left-[406px] w-[185px] h-9 overflow-hidden text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[37px] bg-steelblue w-[185px] h-9" />
          <div className="absolute top-[8px] left-[29px] flex items-center justify-center w-[125px] h-[21px]">
            Get started
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] text-[25px] inline-block w-[997px] h-32">
          <p className="m-0">Get personalised rewards;</p>
          <p className="m-0">
            Every day, every week, every month, and every year.
          </p>
        </div>
        <div className="absolute top-[664px] left-[214px] text-lg inline-block w-[567px] h-[53px]">
          When you transact on the Daya app, you stand a chance to win gift
          cards, shopping vouchers, and even an all-expense paid trip to your
          dream location on the continent!
        </div>
        <img
          className="absolute top-[127px] left-[203px] w-[592px] h-[508.8px] object-cover"
          alt=""
          src="/main@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[910px]">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#bfe9f7,_#fff)] w-[1440px] h-[261px]" />
        <div className="absolute top-[641px] left-[239px] w-[160.6px] h-[43.4px] text-center text-white">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-yellowgreen w-[160.6px] h-[43.4px]" />
          <div className="absolute top-[10px] left-[25.7px] font-extrabold inline-block w-[108.2px] h-6 mix-blend-hard-light">
            Sign up
          </div>
        </div>
        <div className="absolute top-[324px] left-[239px] text-21xl inline-block w-[526px] h-[73px]">
          Connecting Africa through travel, fun, and finance!
        </div>
        <img
          className="absolute top-[436px] left-[240px] max-h-full w-[314px]"
          alt=""
          src="/divider1.svg"
        />
        <div className="absolute top-[463px] left-[239px] text-5xl text-dimgray inline-block w-[468px] h-[63px]">
          Dive into the world where fun meets financial freedom. Get
          personalised rewards for all your transactions.
        </div>
        <div className="absolute top-[578px] left-[239px] text-[32px] inline-block w-[305px] h-[25px]">
          Pay. Play. Connect!
        </div>
        <div className="absolute top-[265px] left-[700px] w-[566.1px] h-[645px]">
          <img
            className="absolute top-[0px] left-[0px] w-[566.1px] h-[645px] object-cover"
            alt=""
            src="/map@2x.png"
          />
          <img
            className="absolute top-[3px] left-[57px] w-[407.6px] h-[493px] object-cover"
            alt=""
            src="/mobile@2x.png"
          />
          <img
            className="absolute top-[92.2px] left-[344.3px] w-[164.7px] h-[403.8px] object-cover"
            alt=""
            src="/plane@2x.png"
          />
          <img
            className="absolute top-[377px] left-[237px] w-[261px] h-10 object-cover"
            alt=""
            src="/logo@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[99px] left-[106px] w-[1229px] h-[61.9px]">
        <div className="absolute top-[21px] left-[341px] overflow-hidden flex flex-row items-start justify-center gap-[29px]">
          <div className="relative font-abeezee">Home</div>
          <Link
            className="cursor-pointer [text-decoration:none] relative font-abeezee text-[inherit]"
            href="/digital-ambassadors"
          >
            Digital Ambassadors
          </Link>
          <div className="relative">Games</div>
          <Link
            className="cursor-pointer [text-decoration:none] relative text-[inherit]"
            href="/about-us"
          >
            About Us
          </Link>
          <div className="relative">Blog</div>
        </div>
        <div className="absolute top-[10px] left-[957px] w-[272px] h-[43.4px] text-center text-white">
          <div className="absolute top-[0px] left-[122px] w-[150px] h-[43.4px] overflow-hidden">
            <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_35px_rgba(241,_165,_1,_0.15)] rounded-15xl bg-yellowgreen w-[150px] h-[43.4px]" />
            <div className="absolute top-[10px] left-[24px] font-extrabold inline-block w-[101px] h-6">
              Sign up
            </div>
          </div>
          <div className="absolute h-[46.08%] w-[16.91%] top-[27.65%] right-[83.09%] bottom-[26.27%] left-[0%]">
            <img
              className="absolute h-[32.5%] w-[28.26%] top-[17.5%] right-[0%] bottom-[50%] left-[71.74%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/vector.svg"
            />
            <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#218810,_#fffdfd)] w-7 h-5" />
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

export default HomePage;
