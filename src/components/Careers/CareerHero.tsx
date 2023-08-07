import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksCareersHero } from "../../../tina/__generated__/types";

const CareerHero = (props: PageBlocksCareersHero) => {
  return (
    <section
      id="careers-hero-section"
      className="my-[64px] md:my-[80px] lg:my-[128px] px-6"
    >
      <div
        data-tina-field={tinaField(props, "message")}
        className="flex flex-col text-center items-center max-w-[1106px] mx-auto mb-[40px] md:mb-[64px] lg:mb-[100px]"
      >
        <TinaMarkdown
          content={props.message}
          components={{
            h1: (props) => (
              <h1
                className="font-rubik font-semibold	text-[48px] leading-[56px] md:text-[80px] md:leading-[88px] mb-[48px]"
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
      <div className="flex flex-col text-center items-center md:max-w-[1136px] mx-auto ">
        <h5 className="font-rubik font-medium	text-[40px] leading-[48px] md:text-[48px] md:leading-[56px] mb-[64px]">
          Why Work With Us?
        </h5>

        <div className="flex flex-wrap justify-center md:gap-x-[32px] lg:gap-x-[40px] gap-y-[32px]">
          {props.reasons?.map((reason) => {
            if (reason) {
              return (
                <div
                  key={reason.label}
                  className="rounded-[12px] md:w-[304px] lg:w-[352px] min-h-[180px] bg-transparent text-white"
                >
                  <Image
                    data-tina-field={tinaField(reason, "image")}
                    src={`${reason.image}`}
                    height={40}
                    width={40}
                    className="mx-auto mb-[16px]"
                    alt="Lightbulb Icon"
                  />
                  <p
                    data-tina-field={tinaField(reason, "label")}
                    className="font-sf-mono font-bold text-[28px] leading-[42px] mb-[12px]"
                  >
                    {reason.label}
                  </p>
                  <p
                    data-tina-field={tinaField(reason, "description")}
                    className="font-sf-mono font-normal text-[24px] leading-[36px]"
                  >
                    {reason.description}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
