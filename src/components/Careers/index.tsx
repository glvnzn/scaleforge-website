"use client";

import CareerHero from "./CareerHero";
import Openings from "./Openings";
import Testimonials from "./Testimonials";

import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../../tina/__generated__/types";

const CareersPage = (props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) => {
  const { data } = useTina(props);

  return (
    <div>
      {data.page.blocks?.map((block) => {
        switch (block?.__typename) {
          case "PageBlocksCareersHero": {
            return <CareerHero {...block} />;
          }
        }
      })}
      <Testimonials />
      <Openings />
    </div>
  );
};

export default CareersPage;
