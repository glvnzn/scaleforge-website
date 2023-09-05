import ContactForm from "./ContactForm";

const ContactHero = () => {
  return (
    <section
      id="contact-hero-section"
      className="py-[128px] border-b-[1px] border-b-[#ffffff33]"
    >
      <div className="flex flex-col text-center items-center max-w-[847px] mx-auto mb-[100px]">
        <h1 className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[32px]">
          Connect with Our Expert Team
        </h1>
        <p className="font-sf-mono font-normal text-[24px] leading-[36px]">
          Inquire, collaborate, and discover the future of technology solutions
          with us.
        </p>
      </div>
      <ContactForm recaptchaSiteKey={`${process.env.RECAPTCHA_SITE_KEY}`} />
    </section>
  );
};

export default ContactHero;
