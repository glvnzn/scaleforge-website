import AboutUs from "@/components/AboutUs";
import { client } from "../../../tina/__generated__/client";

const AboutPage = async () => {
  const page = await client.queries.page({ relativePath: "about-us.md" });

  return (
    <div>
      <AboutUs {...page} />
    </div>
  );
};

export default AboutPage;
