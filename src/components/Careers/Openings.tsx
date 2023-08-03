import Image from "next/image";
import { JobConnectionQuery } from "../../../tina/__generated__/types";

const Openings = (props: { jobs: JobConnectionQuery["jobConnection"] }) => {
  return (
    <section id="careers-openings-section" className="bg-black text-white">
      <div className="flex flex-col text-center items-center max-w-[994px] mx-auto py-[128px]">
        <h1 className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[32px]">
          Open Positions
        </h1>
        <p className="font-sf-mono font-normal text-[24px] leading-[36px] max-w-[792px]">
          We are actively seeking talented individuals who share our passion for
          technology and innovation.
        </p>
        <br />
        <p className="font-sf-mono font-normal text-[24px] leading-[36px] mb-[80px]">
          Explore our current openings below:
        </p>
        <div className="w-[1120px] text-black">
          <div className="flex flex-col gap-y-[40px]">
            {props.jobs.edges?.map((job) => {
              return (
                <div
                  key={job?.node?.id}
                  className="bg-white rounded-[12px] p-[40px] justify-left text-left"
                >
                  <div className="flex flex-row justify-between">
                    <div>
                      <h6 className="font-rubik font-medium text-[40px] leading-[48px]">
                        {job?.node?.title}
                      </h6>
                      <p className="font-sf-mono font-normal text-[24px] leading-[36px] mb-[44px]">
                        {job?.node?.level}
                      </p>
                      <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-[8px]">
                          <Image
                            src={`/marker-pin-icon.svg`}
                            height={20}
                            width={16}
                            alt="Marker Pin Icon"
                          />
                          <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                            {job?.node?.location}
                          </p>
                        </div>
                        <div className="flex flex-row gap-[8px]">
                          <Image
                            src={`/clock-icon.svg`}
                            height={20}
                            width={20}
                            alt="Clock Icon"
                          />
                          <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                            {job?.node?.type}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="my-auto">
                      <Image
                        src={`/chevron-right-icon.svg`}
                        height={20}
                        width={10}
                        alt="Chevron Right Icon"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Openings;
