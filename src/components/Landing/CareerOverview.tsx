import Image from "next/image";

const CareerOverview = () => {
  return (
    <section
      id="career-overview-section"
      className="relative min-h-auto py-[128px]"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-row justify-between mb-[80px]">
          <div className="flex flex-col">
            <h4 className="font-rubik font-medium text-[56px] leading-[66px] mb-[24px]">
              Join Our Dynamic Team
            </h4>
            <p className="font-sf-mono font-normal text-[20px] leading-[30px] max-w-[702px] opacity-80">
              Ready to take the next step? Join our dynamic team of passionate
              professionals, where innovation and collaboration combine to
              achieve extraordinary results.
            </p>
          </div>
          <div>
            <button className="text-white font-rubik font-semibold text-[20px] leading-[24px] rounded border py-[12px] px-[20px] bg-rosso-red border-none border-black">
              See all job positions
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-[32px] text-black">
          <div className="bg-white max-w-[352px] rounded-[12px] border-none p-[40px] flex flex-col">
            <Image
              src="/building-icon.svg"
              width={44}
              height={44}
              className="max-h-[44px] mb-[64px]"
              alt="Building Icon"
            />
            <p className="mb-[24px] font-sf-mono font-bold text-[28px] leading-[42px]">
              Senior Frontend Engineer
            </p>
            <p className="mb-[12px] font-sf-mono font-normal text-[20px] leading-[24px]">
              Senior Level
            </p>
            <div className="flex flex-row gap-4 mb-[24px]">
              <p className="font-sf-mono font-normal text-[14px] leading-[20px] opacity-60">
                Remote
              </p>
              <p className="font-sf-mono font-normal text-[14px] leading-[20px] opacity-60">
                Full-time
              </p>
            </div>
            <div>
              <button className="text-rosso-red font-rubik font-semibold text-[20px] leading-[24px]">
                See details
              </button>
            </div>
          </div>
          <div className="bg-white max-w-[352px] rounded-[12px] border-none p-[40px] flex flex-col">
            <Image
              src="/building-icon.svg"
              width={44}
              height={44}
              className="max-h-[44px] mb-[64px]"
              alt="Building Icon"
            />
            <p className="mb-[24px] font-sf-mono font-bold text-[28px] leading-[42px]">
              Backend Engineer
            </p>
            <p className="mb-[12px] font-sf-mono font-normal text-[20px] leading-[24px]">
              Senior Level
            </p>
            <div className="flex flex-row gap-4 mb-[24px]">
              <p className="font-sf-mono font-normal text-[14px] leading-[20px] opacity-60">
                Remote
              </p>
              <p className="font-sf-mono font-normal text-[14px] leading-[20px] opacity-60">
                Full-time
              </p>
            </div>
            <div>
              <button className="text-rosso-red font-rubik font-semibold text-[20px] leading-[24px]">
                See details
              </button>
            </div>
          </div>
          <div className="bg-white max-w-[352px] rounded-[12px] border-none p-[40px] flex flex-col">
            <Image
              src="/building-icon.svg"
              width={44}
              height={44}
              className="max-h-[44px] mb-[64px]"
              alt="Building Icon"
            />
            <p className="mb-[24px] font-sf-mono font-bold text-[28px] leading-[42px]">
              Project Manager
            </p>
            <p className="mb-[12px] font-sf-mono font-normal text-[20px] leading-[24px]">
              Senior Level
            </p>
            <div className="flex flex-row gap-4 mb-[24px]">
              <p className="font-sf-mono font-normal text-[14px] leading-[20px] opacity-60">
                Remote
              </p>
              <p className="font-sf-mono font-normal text-[14px] leading-[20px] opacity-60">
                Full-time
              </p>
            </div>
            <div>
              <button className="text-rosso-red font-rubik font-semibold text-[20px] leading-[24px]">
                See details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOverview;
