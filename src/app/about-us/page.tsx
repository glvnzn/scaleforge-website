import AboutUs from "@/components/AboutUs";
import { client } from "../../../tina/__generated__/client";

const AboutPage = async () => {
  const result = await client.queries.page({ relativePath: "about-us.md" });

  return (
    <div>
      <AboutUs {...result} />
    </div>
  );
};

export default AboutPage;
