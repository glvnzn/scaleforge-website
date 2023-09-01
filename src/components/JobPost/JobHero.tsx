import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { JobQuery } from "../../../tina/__generated__/types";

const JobHero = (props: { jobData: JobQuery; viewApplyForm: boolean }) => {
  return (
    <section
      id="careers-hero-section"
      className="mt-[64px] mb-[32px] md:mb-[80px] lg:mb-[128px] md:mt-[80px] lg:mt-[128px] px-6"
    >
      <div className="flex flex-col text-center items-center max-w-[1106px] mx-auto">
        <h1
          className="font-rubik font-semibold	text-[40px] leading-[48px] md:text-[80px] md:leading-[88px] mb-[24px]"
          data-tina-field={tinaField(props.jobData.job, "title")}
        >
          {props.jobData.job.title}
        </h1>
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-row gap-[24px]">
            <div
              className="flex flex-row gap-[8px]"
              data-tina-field={tinaField(props.jobData.job, "company")}
            >
              <Image
                src={`/building-1-icon.svg`}
                height={20}
                width={20}
                className="w-[20px] h-[20px]"
                alt="Building Icon"
              />
              <p className="font-sf-mono font-normal text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] opacity-60">
                {props.jobData.job.company}
              </p>
            </div>
            <div
              className="flex flex-row gap-[8px]"
              data-tina-field={tinaField(props.jobData.job, "level")}
            >
              <Image
                src={`/bar-chart-icon.svg`}
                height={20}
                width={20}
                className="w-[20px] h-[20px]"
                alt="Bar Chart Icon"
              />
              <p className="font-sf-mono font-normal text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] opacity-60">
                {props.jobData.job.level}
              </p>
            </div>
            <div
              className="flex flex-row gap-[8px]"
              data-tina-field={tinaField(props.jobData.job, "location")}
            >
              <Image
                src={`/marker-pin-icon.svg`}
                height={20}
                width={20}
                className="w-[20px] h-[20px]"
                alt="Marker Pin Icon"
              />
              <p className="font-sf-mono font-normal text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] opacity-60">
                {props.jobData.job.location}
              </p>
              &nbsp; -&nbsp;
              <p className="font-sf-mono font-normal text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] opacity-60">
                {props.jobData.job.type}
              </p>
            </div>
          </div>
        </div>
        {!props.viewApplyForm && (
          <p
            className="font-sf-mono font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] mt-[64px] max-w-[924px] "
            data-tina-field={tinaField(props.jobData.job, "description")}
          >
            {props.jobData.job.description}
          </p>
        )}
      </div>
    </section>
  );
};

export default JobHero;
