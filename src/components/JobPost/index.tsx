"use client";

import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { JobQuery } from "../../../tina/__generated__/types";
import JobHero from "./JobHero";

const JobPost = (props: {
  data: JobQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) => {
  const { data } = useTina(props);

  return (
    <div>
      <JobHero {...data} />
      <section className="flex flex-col items-center prose bg-white text-black py-[128px]">
        <div
          className="max-w-[1120px] mx-auto mb-[80px]"
          data-tina-field={tinaField(data.job, "body")}
        >
          <TinaMarkdown
            content={data.job.body}
            components={{
              h1: (props) => (
                <h1
                  className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[48px]"
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  className="font-sf-mono font-normal text-[24px] leading-[36px]"
                  {...props}
                />
              ),
            }}
          />
        </div>
        <button className="text-white font-rubik font-semibold	text-[20px] leading-[24px] rounded border py-[12px] px-[20px] bg-rosso-red border-none border-black">
          Apply now
        </button>
      </section>
    </div>
  );
};

export default JobPost;
