import Image from "next/image";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { JobConnectionQuery } from "../../../tina/__generated__/types";
import RightChevIcon from "./RightChevIcon";

const Openings = (props: { jobs: JobConnectionQuery["jobConnection"] }) => {
  return (
    <section
      id="careers-openings-section"
      className="bg-black text-whiteborder-b-[1px] border-b-[#ffffff33]"
    >
      <div className="flex flex-col text-center items-center max-w-[994px] mx-auto py-[128px]">
        <h1 className="font-rubik font-semibold	text-[48px] leading-[56px] md:text-[80px] md:leading-[88px] mb-[32px]">
          Open Positions
        </h1>
        <p className="font-sf-mono font-normal text-[16px] leading-[24px] md:text-[24px] md:leading-[36px] max-w-[792px]">
          We are actively seeking talented individuals who share our passion for
          technology and innovation.
        </p>
        <br />
        <p className="font-sf-mono font-normal text-[16px] leading-[24px] md:text-[24px] md:leading-[36px] mb-[64px] md:mb-[80px]">
          Explore our current openings below:
        </p>
        <div className="w-[100%] md:min-w-[426px] md:max-w-[1023px] lg:min-w-[1024px] lg:max-w-[1120px] text-black px-4 ">
          <div className="flex flex-col gap-y-[40px]">
            {props.jobs.edges?.map((job) => {
              if (job) {
                return (
                  <div
                    key={job.node?.id}
                    className="bg-white rounded-[12px] p-[40px] justify-left text-left"
                  >
                    <div className="flex flex-row justify-between">
                      <div
                        data-tina-field={
                          job.node && tinaField(job.node, "title")
                        }
                      >
                        <h6 className="font-rubik font-medium text-[32px] leading-[40px] md:text-[40px] md:leading-[48px]">
                          {job.node?.title}
                        </h6>
                        <p className="font-sf-mono font-normal text-[16px] leading-[24px] md:text-[24px] md:leading-[36px] mb-[44px] opacity-80">
                          {job.node?.level}
                        </p>
                        <div className="flex flex-row gap-4">
                          <div className="flex flex-row gap-[8px]">
                            <Image
                              src={`/marker-pin-icon.svg`}
                              height={20}
                              width={16}
                              alt="Marker Pin Icon"
                              className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
                            />
                            <p className="font-sf-mono font-normal text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] opacity-60">
                              {job.node?.location}
                            </p>
                          </div>
                          <div className="flex flex-row gap-[8px]">
                            <Image
                              src={`/clock-icon.svg`}
                              height={20}
                              width={20}
                              alt="Clock Icon"
                              className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
                            />
                            <p className="font-sf-mono font-normal text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] opacity-60">
                              {job.node?.type}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="my-auto">
                        <Link
                          href={`/careers/${job.node?._sys.breadcrumbs.join(
                            "/"
                          )}`}
                          className="h-[40px] w-[40px]"
                        >
                          <RightChevIcon className="stroke-2 md:stroke-[4]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Openings;
