import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import {
  EmployeeConnectionQuery,
  PageBlocksAboutUsTeam,
} from "../../../tina/__generated__/types";
import Link from "next/link";

const Team = (props: { teamBlock: PageBlocksAboutUsTeam }) => {
  return (
    <section
      id="about-us-team-section"
      className="my-[64px] md:my-[80px] lg:my-[128px]"
    >
      <div className="flex flex-col text-center items-center max-w-[956px] mx-auto ">
        <h1
          className="font-rubik font-semibold	text-[64px] leading-[76px] md:text-[80px] md:leading-[88px] mb-[48px]"
          data-tina-field={tinaField(props.teamBlock, "title")}
        >
          {props.teamBlock.title}
        </h1>
        <p
          className="font-sf-mono font-normal text-[16px] leading-[24px] md:text-[24px] md:leading-[36px]"
          data-tina-field={tinaField(props.teamBlock, "description")}
        >
          {props.teamBlock.description}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-[32px] gap-y-[32px] md:gap-y-[80px] max-w-[1120px] mx-auto my-[64px] md:my-[80px]">
        {props.teamBlock.featuredEmployees?.map((item) => {
          if (item) {
            return (
              <div
                key={item.employee?.name}
                className="w-[343px] md:w-[220px] lg:w-[256px]"
                data-tina-field={
                  item.employee && tinaField(item.employee, "name")
                }
              >
                <Image
                  src={`${item.employee?.image}`}
                  width={256}
                  height={296}
                  className="h-[296px] w-[343px] md:w-[256px] mb-[32px] object-cover"
                  alt={`${item.employee?.name}`}
                />
                <p className="font-sf-mono font-bold text-[28px] leading-[42px]">
                  {item.employee?.name}
                </p>
                <p className="font-sf-mono font-normal text-[20px] leading-[30px] text-gradient">
                  {item.employee?.position}
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-center">
        <Link href="/our-team">
          <button className=" text-white font-rubik font-semibold text-[20px] leading-[24px] md:text-[20px] rounded py-[12px] px-[20px]  bg-rosso-red border-[1px] border-rosso-red hover:bg-[rgba(215,13,1,.8)] hover:border-[1px] hover:border-[rgba(215,13,1,.8)] focus:bg-rosso-red focus:border-[2px] focus:border-[rgba(255,255,255,.6)]">
            View all
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Team;
