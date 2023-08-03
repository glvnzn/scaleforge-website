import JobPost from "@/components/JobPost";
import { client } from "../../../../tina/__generated__/client";

const JobDetail = async ({ params }: { params: { slug: string } }) => {
  const result = await client.queries.job({
    relativePath: `${params.slug}.md`,
  });

  return (
    <div>
      <JobPost {...result} />
    </div>
  );
};

export default JobDetail;
