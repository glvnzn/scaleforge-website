"use client";

import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../../tina/__generated__/types";
import CareerOverview from "./CareerOverview";
import ContactCta from "./ContactCta";
import Hero from "./Hero";
import MissionStatement from "./MissionStatement";

const LandingPage = (props: {
  data: PageQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}) => {
  const { data } = useTina(props);

  return (
    <div className="mt-[104px]">
      {data.page.blocks?.map((block) => {
        switch (block?.__typename) {
          case "PageBlocksWelcomeHero": {
            return <Hero {...block} />;
          }
          case "PageBlocksOurMission": {
            return <MissionStatement {...block} />;
          }
        }
      })}
      <CareerOverview />
      <ContactCta />
    </div>
  );
};

export default LandingPage;
