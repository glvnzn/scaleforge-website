import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { JobQuery } from "../../../tina/__generated__/types";

const JobHero = (props: JobQuery) => {
  return (
    <section id="careers-hero-section" className="my-[128px]">
      <div className="flex flex-col text-center items-center max-w-[1106px] mx-auto mb-[100px]">
        <h1
          className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[24px]"
          data-tina-field={tinaField(props.job, "title")}
        >
          {props.job.title}
        </h1>
        <div className="flex flex-row justify-between items-center mb-[64px]">
          <div className="flex flex-row gap-[24px]">
            <div
              className="flex flex-row gap-[8px]"
              data-tina-field={tinaField(props.job, "company")}
            >
              <Image
                src={`/building-1-icon.svg`}
                height={20}
                width={20}
                className="w-[20px] h-[20px]"
                alt="Building Icon"
              />
              <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                {props.job.company}
              </p>
            </div>
            <div
              className="flex flex-row gap-[8px]"
              data-tina-field={tinaField(props.job, "level")}
            >
              <Image
                src={`/bar-chart-icon.svg`}
                height={20}
                width={20}
                className="w-[20px] h-[20px]"
                alt="Bar Chart Icon"
              />
              <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                {props.job.level}
              </p>
            </div>
            <div
              className="flex flex-row gap-[8px]"
              data-tina-field={tinaField(props.job, "location")}
            >
              <Image
                src={`/marker-pin-icon.svg`}
                height={20}
                width={20}
                className="w-[20px] h-[20px]"
                alt="Marker Pin Icon"
              />
              <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                {props.job.location}
              </p>
              &nbsp; -&nbsp;
              <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                {props.job.type}
              </p>
            </div>
          </div>
        </div>
        <p
          className="font-sf-mono font-normal text-[24px] leading-[36px]"
          data-tina-field={tinaField(props.job, "description")}
        >
          {props.job.description}
        </p>
      </div>
    </section>
  );
};

export default JobHero;
