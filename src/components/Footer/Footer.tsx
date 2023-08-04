"use client";

import useSocialLogo from "@/app/hooks/useSocialLogo";
import Image from "next/image";
import Link from "next/link";
import { tinaField, useTina } from "tinacms/dist/react";
import { GlobalQuery } from "../../../tina/__generated__/types";

const Footer = (props: {
  data: GlobalQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) => {
  const { data } = useTina(props);
  const { getImgUrlLightByName } = useSocialLogo();

  return (
    <footer className="mt-[64px]">
      <div className="flex justify-between max-w-[1120px] mx-auto mb-[80px]">
        <div className="flex flex-col">
          <Image
            data-tina-field={
              data.global.header && tinaField(data.global.header, "imgSrc")
            }
            src={`${data.global.header?.imgSrc}`}
            width={234.48}
            height={37}
            className="max-h-[37px] mb-[24px]"
            alt="ScaleForge Logo"
          />
          <p
            className="font-sf-mono font-normal text-[20px] leading-[30px] mb-[20px]"
            data-tina-field={
              data.global.footer && tinaField(data.global.footer, "email")
            }
          >
            {data.global.footer?.email}
          </p>
          <div className="flex flex-row gap-4">
            {data.global.social?.map((soc) => {
              if (soc) {
                return (
                  <Link key={soc.name} href={`${soc.link}`} target="_blank">
                    <Image
                      data-tina-field={tinaField(soc)}
                      src={`${getImgUrlLightByName(`${soc?.name}`)}`}
                      width={24}
                      height={24}
                      className="max-h-[24px]"
                      alt="Facebook Light Logo"
                    />
                  </Link>
                );
              }
            })}
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
      <div
        className="mt-[32px] mb-[36px] text-center"
        data-tina-field={
          data.global.footer && tinaField(data.global.footer, "note")
        }
      >
        <p className="font-sf-mono font-normal text-[20px] leading-[30px]">
          {data.global.footer?.note}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
