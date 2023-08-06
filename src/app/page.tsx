import LandingPage from "@/components/Landing";
import { client } from "../../tina/__generated__/client";

export default async function Home() {
  const page = await client.queries.page({ relativePath: "home.md" });
  const globals = await client.queries.global({ relativePath: "global.md" });

  return (
    <main>
      <LandingPage page={page} globals={globals} />
    </main>
  );
}
