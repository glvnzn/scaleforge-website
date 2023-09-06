import React from "react";
import { PageBlocksOurTeamHero } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const TeamHero = (props: PageBlocksOurTeamHero) => {
  return (
    <section id="our-team-section" className="mt-[128px]">
      <div
        className="flex flex-col text-center items-center max-w-[956px] mx-auto"
        data-tina-field={tinaField(props, "message")}
      >
        <TinaMarkdown
          content={props.message}
          components={{
            h1: (props) => (
              <h1
                className="font-rubik font-semibold	text-[44px] leading-[48px] md:text-[80px] md:leading-[88px]"
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="font-rubik font-semibold	text-[32px] leading-[36px] md:text-[72px] md:leading-[84px]"
                {...props}
              />
            ),
            h3: (props) => (
              <h3
                className="font-rubik font-semibold	text-[24px] leading-[28px] md:text-[64px] md:leading-[76px]"
                {...props}
              />
            ),
            h4: (props) => (
              <h4
                className="font-rubik font-semibold	text-[20px] leading-[24px] md:text-[56px] md:leading-[66px]"
                {...props}
              />
            ),
            h5: (props) => (
              <h5
                className="font-rubik font-semibold	text-[16px] leading-[20px] md:text-[48px] md:leading-[56px]"
                {...props}
              />
            ),
            h6: (props) => (
              <h6
                className="font-rubik font-semibold	text-[12px] leading-[14px] md:text-[40px] md:leading-[48px]"
                {...props}
              />
            ),
            bold: (props) => <span className="text-gradient" {...props} />,
            p: (props) => (
              <p
                className="font-sf-mono font-normal text-[24px] leading-[36px]"
                {...props}
              />
            ),
          }}
        />
      </div>
    </section>
  );
};

export default TeamHero;
