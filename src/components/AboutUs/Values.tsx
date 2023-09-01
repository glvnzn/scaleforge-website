import { tinaField } from "tinacms/dist/react";
import { PageBlocksCoreValues } from "../../../tina/__generated__/types";
import Image from "next/image";

const Values = (props: PageBlocksCoreValues) => {
  return (
    <section
      id="about-us-values-section"
      className="py-[64px] md:py-[80px] lg:py-[128px]"
    >
      <div className="relative md:max-w-[1120px] md:mx-auto">
        <div className="flex flex-col text-center items-center min-w-[1106px] mx-auto">
          <h1
            className="font-rubik font-semibold	text-[40px] leading-[48px] md:text-[64px] md:leading-[76px] mb-[48px]"
            data-tina-field={tinaField(props, "title")}
          >
            {props.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-x-[24px] gap-y-[32px]">
            {props.values?.map((value, key) => {
              if (value) {
                return (
                  <div
                    key={value?.label}
                    className="rounded-[12px] w-[352px] md:w-[304px] lg:w-[352px] min-h-[78px] bg-white text-black"
                    data-tina-field={tinaField(value)}
                  >
                    <div className="p-[24px] rounded-t-[12px] w-[352px] md:w-[304px] lg:w-[352px] min-h-[78px] bg-gradient-to-r from-[#D70D01] to-[#FD5303]">
                      <p className="text-left font-sf-mono font-bold text-[20px] leading-[30px] text-white">
                        {value?.label}
                      </p>
                    </div>
                    <p className="font-sf-mono font-normal text-[14px] leading-[20px] p-[24px] text-left">
                      {value?.description}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="absolute top-[25%] left-[50%] hidden md:block flex-none z-[-1]">
          <Image
            src={"/sf-icon.svg"}
            height={702}
            width={848}
            alt="Overlay logo"
            className="opacity-20 max-w-[848px] max-h-[702px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
