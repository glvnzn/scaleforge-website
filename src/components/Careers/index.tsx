import CareerHero from "./CareerHero";
import Openings from "./Openings";
import Testimonials from "./Testimonials";

const CareersPage = () => {
  return (
    <div className="pt-[104px]">
      <CareerHero />
      <Testimonials />
      <Openings />
    </div>
  );
};

export default CareersPage;
