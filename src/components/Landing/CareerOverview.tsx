import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksCareersOverview } from "../../../tina/__generated__/types";

const CareerOverview = (props: PageBlocksCareersOverview) => {
  return (
    <section
      id="career-overview-section"
      className="relative min-h-auto py-[128px]"
    >
      <div
        className="max-w-[1120px] mx-auto"
        data-tina-field={tinaField(props)}
      >
        <div className="flex flex-row justify-between mb-[80px]">
          <div className="flex flex-col">
            <h4
              data-tina-field={tinaField(props, "title")}
              className="font-rubik font-medium text-[56px] leading-[66px] mb-[24px]"
            >
              {props.title}
            </h4>
            <p
              data-tina-field={tinaField(props, "description")}
              className="font-sf-mono font-normal text-[20px] leading-[30px] max-w-[702px] opacity-80"
            >
              {props.description}
            </p>
          </div>
          <div>
            <Link href="/careers">
              <button
                data-tina-field={tinaField(props, "action")}
                className="text-white font-rubik font-semibold text-[20px] leading-[24px] rounded py-[12px] px-[20px]  bg-rosso-red border-[1px] border-rosso-red hover:bg-[rgba(215,13,1,.8)] hover:border-[1px] hover:border-[rgba(215,13,1,.8)] focus:bg-rosso-red focus:border-[2px] focus:border-[rgba(255,255,255,.6)]"
              >
                {props.action}
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-[32px] text-black">
          {props.featuredJobs?.map((jobInfo) => {
            if (jobInfo) {
              return (
                <div
                  key={jobInfo.job?.title}
                  className="bg-white max-w-[352px] rounded-[12px] border-none p-[40px] flex flex-col"
                >
                  <Image
                    src="/building-icon.svg"
                    width={44}
                    height={44}
                    className="max-h-[44px] mb-[64px]"
                    alt="Building Icon"
                  />
                  <p
                    className="mb-[24px] font-sf-mono font-bold text-[28px] leading-[42px]"
                    data-tina-field={
                      jobInfo.job && tinaField(jobInfo.job, "title")
                    }
                  >
                    {jobInfo.job?.title}
                  </p>
                  <p
                    className="mb-[12px] font-sf-mono font-normal text-[20px] leading-[24px]"
                    data-tina-field={
                      jobInfo.job && tinaField(jobInfo.job, "level")
                    }
                  >
                    {jobInfo.job?.level}
                  </p>

                  <div className="flex flex-row gap-[8px] mb-[24px]">
                    <div
                      className="flex flex-row gap-[4px]"
                      data-tina-field={
                        jobInfo.job && tinaField(jobInfo.job, "location")
                      }
                    >
                      <Image
                        src={`/marker-pin-grey-icon.svg`}
                        height={20}
                        width={16}
                        alt="Marker Pin Icon"
                      />
                      <p className="font-sf-mono font-normal text-[14px] leading-[20px] opacity-60">
                        {jobInfo.job?.location}
                      </p>
                    </div>
                    <div
                      className="flex flex-row gap-[4px]"
                      data-tina-field={
                        jobInfo.job && tinaField(jobInfo.job, "type")
                      }
                    >
                      <Image
                        src={`/clock-grey-icon.svg`}
                        height={20}
                        width={20}
                        alt="Clock Icon"
                      />
                      <p className="font-sf-mono font-normal text-[14px] leading-[20px] opacity-60">
                        {jobInfo.job?.type}
                      </p>
                    </div>
                  </div>
                  <div>
                    <Link
                      href={`/careers/${jobInfo.job?._sys.breadcrumbs.join(
                        "/"
                      )}`}
                    >
                      <button className="text-rosso-red font-rubik font-semibold text-[20px] leading-[24px]">
                        See details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerOverview;
