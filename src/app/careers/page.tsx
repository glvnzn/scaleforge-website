import Careers from "@/components/Careers";
import { client } from "../../../tina/__generated__/client";

const CareersPage = async () => {
  const page = await client.queries.page({ relativePath: "careers.md" });
  const jobs = await client.queries.jobConnection();

  return (
    <div>
      <Careers page={page} jobs={jobs} />
    </div>
  );
};

export default CareersPage;
