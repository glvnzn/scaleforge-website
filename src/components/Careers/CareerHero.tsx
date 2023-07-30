import Image from "next/image";

const CareerHero = () => {
  return (
    <section id="about-us-hero-section" className="my-[128px]">
      <div className="flex flex-col text-center items-center max-w-[1106px] mx-auto mb-[100px]">
        <h1 className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[48px]">
          Join Our Team
        </h1>
        <p className="font-sf-mono font-normal text-[24px] leading-[36px]">
          At ScaleForge, we are passionate about transforming businesses through
          innovative technology solutions. We believe that our success is built
          upon the collective brilliance and dedication of our diverse team.
        </p>
        <br />
        <p className="font-sf-mono font-normal text-[24px] leading-[36px]">
          If you are driven by the desire to create meaningful impact, we invite
          you to explore exciting career opportunities with us.
        </p>
      </div>
      <div className="flex flex-col text-center items-center max-w-[1136px] mx-auto ">
        <h5 className="font-rubik font-medium	text-[48px] leading-[56px] mb-[64px]">
          Why Work With Us?
        </h5>

        <div className="flex flex-wrap justify-center gap-x-[40px] gap-y-[32px]">
          <div className="rounded-[12px] w-[352px] min-h-[180px] bg-transparent text-white">
            <Image
              src="./lightbulb-icon.svg"
              height={40}
              width={40}
              className="mx-auto mb-[16px]"
              alt="Lightbulb Icon"
            />
            <p className="font-sf-mono font-bold text-[28px] leading-[42px] mb-[12px]">
              Innovative Projects
            </p>
            <p className="font-sf-mono font-normal text-[24px] leading-[36px]">
              Be part of cutting-edge projects that push the boundaries of
              technology and solve complex business challenges.
            </p>
          </div>
          <div className="rounded-[12px] w-[352px] min-h-[180px] bg-transparent text-white">
            <Image
              src="./trophy-icon.svg"
              height={40}
              width={40}
              className="mx-auto mb-[16px]"
              alt="Trophy Icon"
            />
            <p className="font-sf-mono font-bold text-[28px] leading-[42px] mb-[12px]">
              Professional Growth
            </p>
            <p className="font-sf-mono font-normal text-[24px] leading-[36px]">
              Continuously enhance your skills and knowledge through training
              programs, mentorship, and challenging assignments.
            </p>
          </div>
          <div className="rounded-[12px] w-[352px] min-h-[180px] bg-transparent text-white">
            <Image
              src="./face-smile-icon.svg"
              height={40}
              width={40}
              className="mx-auto mb-[16px]"
              alt="Face Smile Icon"
            />
            <p className="font-sf-mono font-bold text-[28px] leading-[42px] mb-[12px]">
              Work-Life Balance
            </p>
            <p className="font-sf-mono font-normal text-[24px] leading-[36px]">
              We value work-life balance and prioritize the well-being of our
              employees, promoting a healthy and fulfilling lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
