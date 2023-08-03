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
  page: {
    data: PageQuery;
    variables: {
      relativePath: string;
    };
    query: string;
  };
  employees: {
    data: EmployeeConnectionQuery;
    variables: {
      before?: InputMaybe<string> | undefined;
      after?: InputMaybe<string> | undefined;
      first?: any;
      last?: any;
      sort?: any;
      filter?: any;
    };
    query: string;
  };
}) => {
  const { data } = useTina(props.page);
  const { data: empData } = useTina(props.employees);

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
                employees={empData.employeeConnection}
              />
            );
          }
        }
      })}
    </div>
  );
};

export default AboutUsPage;
