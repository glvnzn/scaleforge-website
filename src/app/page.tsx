import LandingPage from "@/components/Landing";
import { client } from "../../tina/__generated__/client";

export default async function Home() {
  const result = await client.queries.page({ relativePath: "home.md" });

  return (
    <main>
      <LandingPage {...result} />
    </main>
  );
}
