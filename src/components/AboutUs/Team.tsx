import Image from "next/image";
import data from "./team.json";

const Team = () => {
  return (
    <section id="about-us-team-section" className="my-[128px]">
      <div className="flex flex-col text-center items-center max-w-[956px] mx-auto ">
        <h1 className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[48px]">
          Our Team
        </h1>
        <p className="font-sf-mono font-normal text-[24px] leading-[36px]">
          Meet our dedicated team of experienced professionals who will bring
          deep expertise and a passion for excellence to every project. We take
          pride in our commitment to continuous learning and staying at the
          forefront of industry trends.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-[32px] gap-y-[80px] max-w-[1120px] mx-auto mt-[80px]">
        {data.team.map((item) => {
          return (
            <div key={item.name} className="w-[256px]">
              <Image
                src={item.image}
                width={256}
                height={296}
                className="h-[296px] w-[256px] mb-[32px]"
                alt="Roger Madjos"
              />
              <p className="font-sf-mono font-bold text-[28px] leading-[42px]">
                {item.name}
              </p>
              <p className="font-sf-mono font-normal text-[20px] leading-[30px] text-gradient">
                {item.position}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
