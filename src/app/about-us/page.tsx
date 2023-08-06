import AboutUs from "@/components/AboutUs";
import { client } from "../../../tina/__generated__/client";

const AboutPage = async () => {
  const pages = await client.queries.page({ relativePath: "about-us.md" });

  return (
    <div>
      <AboutUs {...pages} />
    </div>
  );
};

export default AboutPage;
