"use client";

import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../../tina/__generated__/types";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Values from "./Values";

const AboutUsPage = (props: {
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
          case "PageBlocksAboutUsHero": {
            return <AboutUs {...block} />;
          }
          case "PageBlocksCoreValues": {
            return <Values {...block} />;
          }
        }
      })}
      <Team />
    </div>
  );
};

export default AboutUsPage;
