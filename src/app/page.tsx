import {
  CareerOverview,
  ContactCta,
  Hero,
  MissionStatement,
} from "@/components/Landing";

export default function Home() {
  return (
    <main>
      <Hero />
      <MissionStatement />
      <CareerOverview />
      <ContactCta />
    </main>
  );
}
