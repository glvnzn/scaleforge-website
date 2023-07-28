import Image from "next/image";

const MissionStatement = () => {
  return (
    <section
      id="mission-statement-section"
      className="flex justify-center items-center h-auto gap-[152px] min-h-[704px] bg-white text-black"
    >
      <div className="max-w-[520px]">
        <h3 className="font-rubik font-semibold text-[64px] leading-[76px] mb-[16px]">
          Our Mission
        </h3>
        <p className="font-sf-mono font-normal text-[24px] leading-[36px] mb-[32px]">
          At ScaleForge, our mission is to forge the future of ambitious
          software organizations by providing expert scalability solutions that
          empower expansion, magnifying their impact, and propelling them
          towards the next level of success
        </p>
        <button className="text-white font-rubik font-semibold	text-[20px] leading-[24px] rounded border py-[12px] px-[20px] bg-rosso-red border-none border-black">
          Learn more about us
        </button>
      </div>
      <div className="min-w-[614px]">
        <Image
          src="/feature-img-mission.webp"
          height={704}
          width={614}
          className="h-[704px] w-auto"
          alt="Our Mission Feature Image"
        />
      </div>
    </section>
  );
};

export default MissionStatement;
