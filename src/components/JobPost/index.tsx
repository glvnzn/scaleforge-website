"use client";

import { useState } from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { JobQuery } from "../../../tina/__generated__/types";
import ApplyForm from "./ApplyForm";
import JobHero from "./JobHero";
import { animateScroll as scroll } from "react-scroll";

const JobPost = (props: {
  data: JobQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) => {
  const { data } = useTina(props);
  const [viewApplyForm, setViewApplyForm] = useState(false);

  return (
    <div>
      <JobHero jobData={data} viewApplyForm={viewApplyForm} />
      {viewApplyForm && <ApplyForm jobTitle={`${data.job.title}`} />}
      {!viewApplyForm && (
        <section className="flex flex-col items-center bg-white text-black py-[64px] md:py-[80px] lg:py-[128px]">
          <div
            className="px-6 whitespace-normal overflow-ellipsis overflow-clip w-full md:max-w-[1120px] mx-auto mb-[64px] md:mb-[80px] prose font-sf-mono text-[20px] leading-[30px] text-[rgba(13,13,13, .8)]"
            data-tina-field={tinaField(data.job, "body")}
          >
            <TinaMarkdown
              content={data.job.body}
              components={{
                h1: (props) => (
                  <h1
                    className="font-rubik font-semibold	text-[80px] leading-[88px]"
                    {...props}
                  />
                ),
                h2: (props) => (
                  <h2
                    className="font-rubik font-semibold	text-[72px] leading-[84px]"
                    {...props}
                  />
                ),
                h3: (props) => (
                  <h3
                    className="font-rubik font-semibold	text-[64px] leading-[76px]"
                    {...props}
                  />
                ),
                h4: (props) => (
                  <h4
                    className="font-rubik font-medium	text-[56px] leading-[66px]"
                    {...props}
                  />
                ),
                h5: (props) => (
                  <h5
                    className="font-rubik font-medium	text-[48px] leading-[56px]"
                    {...props}
                  />
                ),
                h6: (props) => (
                  <h6
                    className="font-rubik font-semibold	text-[40px] leading-[48px]"
                    {...props}
                  />
                ),
                p: (props) => (
                  <p
                    className="font-sf-mono font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[30px]"
                    {...props}
                  />
                ),
              }}
            />
          </div>
          <button
            type="button"
            className="text-white font-rubik font-semibold	text-[20px] leading-[24px] rounded py-[12px] px-[20px]  bg-rosso-red border-[1px] border-rosso-red hover:bg-[rgba(215,13,1,.8)] hover:border-[1px] hover:border-[rgba(215,13,1,.8)] focus:bg-rosso-red focus:border-[2px] focus:border-[rgba(255,255,255,.6)]"
            onClick={() => {
              setViewApplyForm(true);
              scroll.scrollTo(100);
            }}
          >
            Apply now
          </button>
        </section>
      )}
    </div>
  );
};

export default JobPost;
