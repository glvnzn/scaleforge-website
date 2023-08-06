"use client";

import CareerHero from "./CareerHero";
import Openings from "./Openings";
import Testimonials from "./Testimonials";

import { useTina } from "tinacms/dist/react";
import {
  Exact,
  InputMaybe,
  JobConnectionQuery,
  PageQuery,
} from "../../../tina/__generated__/types";

const CareersPage = (props: {
  page: {
    data: PageQuery;
    variables: {
      relativePath: string;
    };
    query: string;
  };
  jobs: {
    data: JobConnectionQuery;
    variables: Exact<{
      before?: InputMaybe<string> | undefined;
      after?: InputMaybe<string> | undefined;
      first?: any | undefined;
      last?: any | undefined;
      sort?: any | undefined;
      filter?: any | undefined;
    }>;
    query: string;
  };
}) => {
  const { data } = useTina(props.page);
  const { data: jobsData } = useTina(props.jobs);

  return (
    <div>
      {data.page.blocks?.map((block) => {
        switch (block?.__typename) {
          case "PageBlocksCareersHero": {
            return <CareerHero key={block?.__typename} {...block} />;
          }
          case "PageBlocksStories": {
            // @ts-ignore
            return <Testimonials key={block?.__typename} {...block} />;
          }
        }
      })}
      <Openings jobs={jobsData.jobConnection} />
    </div>
  );
};

export default CareersPage;
