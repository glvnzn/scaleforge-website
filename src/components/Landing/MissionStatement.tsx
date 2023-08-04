import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksOurMission } from "../../../tina/__generated__/types";

const MissionStatement = (props: PageBlocksOurMission) => {
  return (
    <section
      id="mission-statement-section"
      className="min-h-[704px] bg-white text-black"
    >
      <div className="flex flex-row gap-[152px] items-center max-w-[1120px] mx-auto">
        <div
          className="flex-none max-w-[520px]"
          data-tina-field={tinaField(props, "message")}
        >
          <TinaMarkdown
            content={props.message}
            components={{
              h3: (props) => (
                <h3
                  className="font-rubik font-semibold text-[64px] leading-[76px] mb-[16px]"
                  {...props}
                />
              ),
              bold: (props) => <span className="text-gradient" {...props} />,
              p: (props) => (
                <p
                  className="font-sf-mono font-normal text-[24px] leading-[36px] mb-[32px]"
                  {...props}
                />
              ),
            }}
          />
          <Link href="/about-us">
            <button
              data-tina-field={tinaField(props, "action")}
              className="text-white font-rubik font-semibold	text-[20px] leading-[24px] rounded py-[12px] px-[20px]  bg-rosso-red border-[1px] border-rosso-red hover:bg-[rgba(215,13,1,.8)] hover:border-[1px] hover:border-[rgba(215,13,1,.8)] focus:bg-rosso-red focus:border-[2px] focus:border-[rgba(255,255,255,.6)]"
            >
              {props.action}
            </button>
          </Link>
        </div>
        <div
          className="flex-none w-[614px]"
          data-tina-field={tinaField(props, "imgSrc")}
        >
          <Image
            src={`${props.imgSrc}`}
            height={704}
            width={614}
            className="h-[704px] w-auto"
            alt="Our Mission Feature Image"
          />
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
