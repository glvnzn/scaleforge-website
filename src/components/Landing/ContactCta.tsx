import Image from "next/image";

const ContactCta = () => {
  return (
    <section id="contact-cta-section" className="min-h-[910px] py-[128px]">
      <div className="flex flex-row gap-[0px] justify-end">
        <div className="relative">
          <h1 className="font-rubik font-semibold	text-[80px] leading-[88px]">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="font-sf-mono font-normal text-[32px] leading-[48px] max-w-[649px] mb-[32px]">
            Have a question or need more information? Contact us today, and our
            friendly team will be happy to assist you.
          </p>
          <button className="font-semibold text-[20px] leading-[24px] rounded py-[12px] px-[20px] bg-rosso-red border-none border-black mb-[64px]">
            Contact us
          </button>
          <p className="font-sf-mono font-normal text-[20px] leading-[30px] max-w-[606px] mb-[24px] ">
            Stay updated with the latest news, industry insights, and company
            updates by following us on our social media channels. Join the
            conversation and connect with us today.
          </p>
          <div className="flex flex-row gap-4">
            <Image
              src="/fb-logo.svg"
              width={40}
              height={40}
              className="max-h-[40px]"
              alt="Facebook Logo"
            />
            <Image
              src="/ig-logo.svg"
              width={40}
              height={40}
              className="max-h-[40px]"
              alt="Instagram Logo"
            />
          </div>
        </div>
        <div className="flex-none w-[760px]">
          <Image
            src="/sf-icon.svg"
            height={702}
            width={760}
            alt="Overlay logo"
            className="opacity-20"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
