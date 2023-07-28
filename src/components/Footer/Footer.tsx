import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-[64px]">
      <div className="flex justify-between max-w-[1120px] mx-auto mb-[80px]">
        <div className="flex flex-col">
          <Image
            src="/sf-logo-white.svg"
            width={234.48}
            height={37}
            className="max-h-[37px] mb-[24px]"
            alt="ScaleForge Logo"
          />
          <p className="font-sf-mono font-normal text-[20px] leading-[30px] mb-[20px]">
            support@scaleforge.tech
          </p>
          <div className="flex flex-row gap-4">
            <Image
              src="/fb-logo-white.svg"
              width={24}
              height={24}
              className="max-h-[24px]"
              alt="ScaleForge Logo"
            />
            <Image
              src="/ig-logo-white.svg"
              width={24}
              height={24}
              className="max-h-[24px]"
              alt="ScaleForge Logo"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-x-[24px] gap-y-[24px]">
          <p className="font-rubik font-semibold text-[20px] leading-[24px]">
            About us
          </p>
          <p className="font-rubik font-semibold text-[20px] leading-[24px]">
            Terms and Conditions
          </p>
          <p className="font-rubik font-semibold text-[20px] leading-[24px]">
            Careers
          </p>
          <p className="font-rubik font-semibold text-[20px] leading-[24px]">
            Privacy Policy
          </p>
          <p className="font-rubik font-semibold text-[20px] leading-[24px]">
            Contact Us
          </p>
        </div>
      </div>
      <div className="mt-[32px] mb-[36px] text-center">
        <p className="font-sf-mono font-normal text-[20px] leading-[30px]">
          Copyright © 2023 ScaleForge. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
