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
    <div>
      {data.page.blocks?.map((block) => {
        switch (block?.__typename) {
          case "PageBlocksWelcomeHero": {
            return <Hero key={block?.__typename} {...block} />;
          }
          case "PageBlocksOurMission": {
            return <MissionStatement key={block?.__typename} {...block} />;
          }
          case "PageBlocksCareersOverview": {
            return <CareerOverview key={block?.__typename} {...block} />;
          }
          case "PageBlocksContactCta": {
            return <ContactCta key={block?.__typename} {...block} />;
          }
        }
      })}
    </div>
  );
};

export default LandingPage;
