"use client";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksStories } from "../../../tina/__generated__/types";

const Testimonials = (props: PageBlocksStories) => {
  return (
    <section id="careers-testimonials-section" className="bg-white text-black">
      <div className="flex flex-col text-center items-center max-w-[788px] md:mx-auto py-[64px] md:py-[80px] lg:py-[128px] ">
        <div data-tina-field={tinaField(props, "heading")} className="prose">
          <TinaMarkdown
            content={props.heading}
            components={{
              h1: (props) => (
                <h1
                  className="font-rubik font-semibold	text-[40px] leading-[48px] md:text-[80px] md:leading-[88px] mb-[32px]"
                  {...props}
                />
              ),
              bold: (props) => <span className="text-gradient" {...props} />,
              p: (props) => (
                <p
                  className="font-sf-mono font-normal text-[16px] leading-[24px] md:text-[24px] md:leading-[36px] mb-[40px] md:mb-[80px]"
                  {...props}
                />
              ),
            }}
          />
        </div>
        <div>
          <Swiper
            autoplay={{ delay: 5000 }}
            autoHeight
            navigation
            centeredSlides
            modules={[Navigation]}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="max-w-[1120px]"
          >
            {Boolean(props.stories) &&
              props.stories?.map((story, i) => {
                return (
                  <SwiperSlide key={`${i}-${story?.author}`}>
                    <div
                      className="w-[343px] md:w-[880px] bg-[rgba(0,0,0,.1)] mx-auto rounded-[12px] p-[40px]"
                      data-tina-field={story && tinaField(story)}
                    >
                      <p
                        className="font-sf-mono font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] mb-[40px]"
                        data-tina-field={story && tinaField(story, "body")}
                      >
                        {story?.body}
                      </p>
                      <div
                        className="flex flex-row gap-[16px] justify-center items-center "
                        data-tina-field={story && tinaField(story, "author")}
                      >
                        <Image
                          src={`${story?.author?.image}`}
                          height={64}
                          width={64}
                          alt={`${story?.author?.name} Photo`}
                          className="rounded-full"
                        />
                        <div className="flex justify-left text-left flex-col">
                          <p className="font-sf-mono font-bold text-[16px] leading-[24px] md:text-[20px] md:leading-[30px]">
                            {story?.author?.name}
                          </p>
                          <p className="font-sf-mono font-normal text-[14px] leading-[20px] md:text-[16px] md:leading-[24px]">
                            {story?.author?.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
