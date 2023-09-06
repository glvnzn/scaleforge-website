"use client";

import { useTina } from "tinacms/dist/react";
import {
  EmployeeConnectionQuery,
  InputMaybe,
  PageQuery,
} from "../../../tina/__generated__/types";
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
    <div className="px-4">
      {data.page.blocks?.map((block) => {
        switch (block?.__typename) {
          case "PageBlocksAboutUsHero": {
            return <AboutUs key={block?.__typename} {...block} />;
          }
          case "PageBlocksCoreValues": {
            return <Values key={block?.__typename} {...block} />;
          }
          case "PageBlocksAboutUsTeam": {
            return (
              <Team
                key={block?.__typename}
                // @ts-ignore
                teamBlock={block}
              />
            );
          }
        }
      })}
    </div>
  );
};

export default AboutUsPage;
