import React from "react";
import client from "../../../tina/__generated__/client";
import OurTeam from "@/components/OurTeam";

const OurTeamPage = async () => {
  const page = await client.queries.page({ relativePath: "our-team.md" });
  const employees = await client.queries.employeeConnection();

  return (
    <div>
      <OurTeam page={page} employees={employees} />
    </div>
  );
};

export default OurTeamPage;
