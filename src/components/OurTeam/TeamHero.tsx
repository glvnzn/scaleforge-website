import React from "react";
import { PageBlocksOurTeamHero } from "../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const TeamHero = (props: PageBlocksOurTeamHero) => {
  return (
    <section id="our-team-section" className="mt-[128px] mb-[80px]">
      <div
        className="flex flex-col text-center items-center max-w-[956px] mx-auto"
        data-tina-field={tinaField(props, "message")}
      >
        <TinaMarkdown
          content={props.message}
          components={{
            h1: (props) => (
              <h1
                className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[48px]"
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
