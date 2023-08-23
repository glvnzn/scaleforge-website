import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { EmployeeConnectionQuery } from "../../../tina/__generated__/types";

const Employees = (props: EmployeeConnectionQuery) => {
  return (
    <section
      id="our-team-section"
      className="pb-[128px] border-b-[1px] border-b-[#ffffff33]"
    >
      <div className="flex flex-wrap justify-center gap-x-[32px] gap-y-[32px] md:gap-y-[40px] lg:gap-y-[80px] max-w-[1120px] mx-auto my-[80px]">
        {props.employeeConnection.edges?.map((item) => {
          if (item) {
            return (
              <div
                key={item.node?.name}
                className="w-[343px] md:w-[220px] lg:w-[256px]"
                data-tina-field={item.node && tinaField(item.node, "name")}
              >
                <Image
                  unoptimized
                  src={`${item.node?.image}`}
                  width={256}
                  height={296}
                  className="h-[296px] w-[343px] md:w-[220px] lg:w-[256px] mb-[32px] object-cover"
                  alt={`${item.node?.name}`}
                />
                <p className="font-sf-mono font-bold text-[28px] leading-[42px]">
                  {item.node?.name}
                </p>
                <p className="font-sf-mono font-normal text-[20px] leading-[30px] text-gradient">
                  {item.node?.position}
                </p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Employees;
