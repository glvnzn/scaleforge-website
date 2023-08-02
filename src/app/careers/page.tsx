import Careers from "@/components/Careers";
import { client } from "../../../tina/__generated__/client";

const CareersPage = async () => {
  const result = await client.queries.page({ relativePath: "careers.md" });

  return (
    <div>
      <Careers {...result} />
    </div>
  );
};

export default CareersPage;
