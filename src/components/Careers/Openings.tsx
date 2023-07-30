const Openings = () => {
  return (
    <section id="careers-openings-section" className="bg-black text-white">
      <div className="flex flex-col text-center items-center max-w-[994px] mx-auto py-[128px]">
        <h1 className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[32px]">
          Open Positions
        </h1>
        <p className="font-sf-mono font-normal text-[24px] leading-[36px] max-w-[792px]">
          We are actively seeking talented individuals who share our passion for
          technology and innovation.
        </p>
        <br />
        <p className="font-sf-mono font-normal text-[24px] leading-[36px] mb-[80px]">
          Explore our current openings below:
        </p>
        <div className="w-[1120px] text-black">
          <div className="flex flex-col gap-y-[40px]">
            <div className="bg-white rounded-[12px] p-[40px] justify-left text-left">
              <h6 className="font-rubik font-medium text-[40px] leading-[48px]">
                Backend Engineer
              </h6>
              <p className="font-sf-mono font-normal text-[24px] leading-[36px] mb-[44px]">
                Junior Level
              </p>
              <div className="flex flex-row gap-4 mb-[24px]">
                <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                  Remote
                </p>
                <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                  Full-time
                </p>
              </div>
            </div>
            {/* Second Job */}
            <div className="bg-white rounded-[12px] p-[40px] justify-left text-left">
              <h6 className="font-rubik font-medium text-[40px] leading-[48px]">
                Senior Frontend Engineer
              </h6>
              <p className="font-sf-mono font-normal text-[24px] leading-[36px] mb-[44px]">
                Senior Level
              </p>
              <div className="flex flex-row gap-4 mb-[24px]">
                <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                  Remote
                </p>
                <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                  Full-time
                </p>
              </div>
            </div>
            {/*  */}
            <div className="bg-white rounded-[12px] p-[40px] justify-left text-left">
              <h6 className="font-rubik font-medium text-[40px] leading-[48px]">
                Project Manager
              </h6>
              <p className="font-sf-mono font-normal text-[24px] leading-[36px] mb-[44px]">
                Junior Level
              </p>
              <div className="flex flex-row gap-4 mb-[24px]">
                <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                  Remote
                </p>
                <p className="font-sf-mono font-normal text-[16px] leading-[24px] opacity-60">
                  Full-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Openings;
