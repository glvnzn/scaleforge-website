import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksAboutUsHero } from "../../../tina/__generated__/types";

const AboutUs = (props: PageBlocksAboutUsHero) => {
  return (
    <section
      id="about-us-hero-section"
      className="py-[64px] md:py-[80px] lg:py-[128px] border-b-[1px] border-b-[#ffffff33]"
    >
      <div
        className="flex flex-col text-center items-center max-w-[1106px] mx-auto"
        data-tina-field={tinaField(props, "message")}
      >
        <TinaMarkdown
          content={props.message}
          components={{
            h1: (props) => (
              <h1
                className="font-rubik font-semibold	text-[56px] leading-[66px] md:text-[80px] md:leading-[88px] mb-[48px]"
                {...props}
              />
            ),
            p: (props) => (
              <p
                className="font-sf-mono font-normal text-[16px] leading-[24px] md:text-[24px] md:leading-[36px]"
                {...props}
              />
            ),
          }}
        />
      </div>
    </section>
  );
};

export default AboutUs;
