import useSocialLogo from "@/app/hooks/useSocialLogo";
import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksContactCta } from "../../../tina/__generated__/types";

const ContactCta = (props: {
  block: PageBlocksContactCta;
  socials?: Array<{
    __typename: "GlobalSocial";
    name?: string | null;
    link?: string | null;
  } | null> | null;
}) => {
  const { getImgUrlByName } = useSocialLogo();

  return (
    <section
      id="contact-cta-section"
      className="py-[64px] md:py-[128px] overflow-hidden px-6"
    >
      <div className="flex flex-row gap-[0px] items-center md:max-w-[1120px] md:mx-auto">
        <div
          className="flex-1 md:flex-none"
          data-tina-field={tinaField(props.block, "message")}
        >
          <TinaMarkdown
            content={props.block.message}
            components={{
              h1: (props) => (
                <h1
                  className="font-rubik font-semibold	text-[48px] leading-[56px] md:text-[80px] md:leading-[88px]"
                  {...props}
                />
              ),
              bold: (props) => <span className="text-gradient" {...props} />,
              p: (props) => (
                <p
                  className="font-sf-mono font-normal text-[16px] leading-[24px] md:text-[32px] md:leading-[48px] max-w-[649px] mb-[32px]"
                  {...props}
                />
              ),
            }}
          />
          <Link href="/contact-us">
            <button
              data-tina-field={tinaField(props.block, "action")}
              className="w-full md:w-[unset] font-semibold text-[20px] leading-[24px] rounded py-[12px] px-[20px] mb-[40px] bg-rosso-red border-[1px] border-rosso-red hover:bg-[rgba(215,13,1,.8)] hover:border-[1px] hover:border-[rgba(215,13,1,.8)] focus:bg-rosso-red focus:border-[2px] focus:border-[rgba(255,255,255,.6)]"
            >
              {props.block.action}
            </button>
          </Link>
          <div data-tina-field={tinaField(props.block, "subMessage")}>
            <TinaMarkdown
              content={props.block.subMessage}
              components={{
                p: (props) => (
                  <p
                    className="font-sf-mono font-normal text-[14px] leading-[20px] md:text-[20px] md:leading-[30px] max-w-[606px] mb-[24px] "
                    {...props}
                  />
                ),
              }}
            />
          </div>
          <div className="flex flex-row gap-4">
            {props.socials?.map((soc) => {
              if (soc) {
                return (
                  <Link key={soc.name} href={`${soc.link}`} target="_blank">
                    <Image
                      data-tina-field={tinaField(soc)}
                      src={`${getImgUrlByName(`${soc.name}`)}`}
                      width={40}
                      height={40}
                      className="max-h-[40px]"
                      alt="Facebook Logo"
                    />
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div
          className="hidden md:block flex-none w-[760px]"
          data-tina-field={tinaField(props.block, "imgSrc")}
        >
          <Image
            src={`${props.block.imgSrc}`}
            height={702}
            width={760}
            alt="Overlay logo"
            className="opacity-20 w-[760px] h-[702]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
