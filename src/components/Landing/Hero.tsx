import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksWelcomeHero } from "../../../tina/__generated__/types";

const Hero = (props: PageBlocksWelcomeHero) => {
  return (
    <section id="hero-section">
      <div
        className="flex flex-col text-center items-center max-w-[994px] mx-auto py-[128px]"
        data-tina-field={tinaField(props, "message")}
      >
        <TinaMarkdown
          content={props.message}
          components={{
            h1: (props) => (
              <h1
                className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[16px]"
                {...props}
              />
            ),
            bold: (props) => <span className="text-gradient" {...props} />,
            p: (props) => (
              <p
                className="font-sf-mono font-normal text-[28px] leading-[42px] mb-[32px]"
                {...props}
              />
            ),
          }}
        />
        <Link href="/contact-us">
          <button
            data-tina-field={tinaField(props, "action")}
            className="font-rubik font-semibold	text-[20px] leading-[24px] rounded border py-[12px] px-[20px] bg-rosso-red border-none border-black"
          >
            {props.action}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
