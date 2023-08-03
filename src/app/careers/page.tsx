import Careers from "@/components/Careers";
import { client } from "../../../tina/__generated__/client";

const CareersPage = async () => {
  const pages = await client.queries.page({ relativePath: "careers.md" });
  const jobs = await client.queries.jobConnection();

  return (
    <div>
      <Careers pages={pages} jobs={jobs} />
    </div>
  );
};

export default CareersPage;
