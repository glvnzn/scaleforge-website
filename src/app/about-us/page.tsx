import AboutUs from "@/components/AboutUs";
import { client } from "../../../tina/__generated__/client";

const AboutPage = async () => {
  const pages = await client.queries.page({ relativePath: "about-us.md" });
  const employees = await client.queries.employeeConnection();

  return (
    <div>
      <AboutUs page={pages} employees={employees} />
    </div>
  );
};

export default AboutPage;
