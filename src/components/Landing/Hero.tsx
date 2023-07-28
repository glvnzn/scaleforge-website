const Hero = () => {
  return (
    <section id="hero-section" className="relative min-h-[742px] mt-[104px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[994px] text-center">
        <h1 className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[16px]">
          Empower Your Business With Our&nbsp;
          <span className="text-gradient">Expert Scalability Solutions</span>
        </h1>
        <p className="font-sf-mono font-normal text-[28px] leading-[42px] mb-[32px]">
          Unlock the full potential of your business by leveraging our expert
          scalability solutions to drive growth and adaptability.
        </p>
        <button className="font-rubik font-semibold	text-[20px] leading-[24px] rounded border py-[20px] px-[20px] bg-rosso-red border-none border-black">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
