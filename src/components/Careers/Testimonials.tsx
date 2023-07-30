"use client";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section id="careers-testimonials-section" className="bg-white text-black">
      <div className="flex flex-col text-center items-center max-w-[788px] mx-auto py-[128px]">
        <h1 className="font-rubik font-semibold	text-[80px] leading-[88px] mb-[32px]">
          <span className="text-gradient">Success</span> Stories
        </h1>
        <p className="font-sf-mono font-normal text-[24px] leading-[36px] mb-[80px]">
          Hear from our team members about their rewarding experiences working
          with us.
        </p>
        <div>
          <Swiper
            navigation
            centeredSlides
            modules={[Navigation]}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="max-w-[1120px]"
          >
            <SwiperSlide>
              <div className="min-h-[424px] w-[880px] bg-[rgba(0,0,0,.1)] mx-auto rounded-[12px] p-[40px]">
                <p className="font-sf-mono font-normal text-[20px] leading-[30px] mb-[40px]">
                  “With Scaleforge, the emphasis on learning has allowed me to
                  continuously improve my skills and stay updated with the
                  latest advancements in the software testing field.
                  Scaleforge&apos;s commitment to providing various learning
                  resources, such as workshops, and training sessions, has
                  empowered me to enhance my knowledge and bring innovative
                  testing approaches to the table. This not only benefits my
                  personal growth but also positively impacts the quality of the
                  software we deliver to our clients.”
                </p>
                <div className="flex flex-row gap-[16px] justify-center items-center">
                  <Image
                    src="/team/pew.png"
                    height={64}
                    width={64}
                    alt="Pew Image Icon"
                    className="rounded-full"
                  />
                  <div className="flex justify-left text-left flex-col">
                    <p className="font-sf-mono font-bold text-[20px] leading-[30px]">
                      Carmella Joy Ventanilla
                    </p>
                    <p className="font-sf-mono font-normal text-[16px] leading-[24px]">
                      Software QA Engineer
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
