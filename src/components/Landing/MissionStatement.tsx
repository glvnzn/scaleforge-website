import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksOurMission } from "../../../tina/__generated__/types";

const MissionStatement = (props: PageBlocksOurMission) => {
  return (
    <section
      id="mission-statement-section"
      className="flex justify-center items-center h-auto gap-[152px] min-h-[704px] bg-white text-black"
    >
      <div
        className="max-w-[520px]"
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
        <button
          data-tina-field={tinaField(props, "action")}
          className="text-white font-rubik font-semibold	text-[20px] leading-[24px] rounded border py-[12px] px-[20px] bg-rosso-red border-none border-black"
        >
          {props.action}
        </button>
      </div>
      <div
        className="min-w-[614px]"
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
    </section>
  );
};

export default MissionStatement;
