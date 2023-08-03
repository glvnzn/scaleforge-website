"use client";

import { useTina } from "tinacms/dist/react";
import {
  EmployeeConnectionQuery,
  PageQuery,
} from "../../../tina/__generated__/types";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Values from "./Values";

const AboutUsPage = (props: {
  page: {
    data: PageQuery;
    variables: {
      relativePath: string;
    };
    query: string;
  };
  employees: EmployeeConnectionQuery["employeeConnection"];
}) => {
  const { data } = useTina(props.page);

  return (
    <div>
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
                teamBlock={block}
                employees={props.employees}
              />
            );
          }
        }
      })}
    </div>
  );
};

export default AboutUsPage;
