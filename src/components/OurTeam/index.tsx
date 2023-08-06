"use client";

import React from "react";
import {
  EmployeeConnectionQuery,
  InputMaybe,
  PageQuery,
} from "../../../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import TeamHero from "./TeamHero";
import Employees from "./Employees";

const OurTeam = (props: {
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
          case "PageBlocksOurTeamHero": {
            return <TeamHero key={block?.__typename} {...block} />;
          }
        }
      })}
      <Employees {...empData} />
    </div>
  );
};

export default OurTeam;
