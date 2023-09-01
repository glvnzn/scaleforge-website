"use client";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageBlocksStories } from "../../../tina/__generated__/types";
import { useRef, useCallback } from "react";

const Testimonials = (props: PageBlocksStories) => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section id="careers-testimonials-section" className="bg-white text-black">
      <div className="flex flex-col text-center items-center max-w-[788px] md:mx-auto pt-[64px] md:pt-[80px] lg:pt-[128px] ">
        <div data-tina-field={tinaField(props, "heading")}>
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
      </div>
      <div className="pb-[64px] md:pb-[80px] lg:pb-[128px]">
        <Swiper
          ref={sliderRef}
          autoplay={{ delay: 5000 }}
          autoHeight
          navigation
          centeredSlides
          modules={[Navigation]}
          slidesPerView={1}
          className="w-[100%] md:min-w-[426px] md:max-w-[1024px]"
          loop
        >
          {Boolean(props.stories) &&
            props.stories?.map((story, i) => {
              return (
                <SwiperSlide key={`${i}-${story?.author}`}>
                  <div
                    className="w-[100%] max-w-[343px] md:min-w-[426px] md:max-w-[880px] bg-[rgba(0,0,0,.1)] mx-auto rounded-[12px] p-[40px]"
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
        <div className="md:hidden flex gap-[16px] justify-center items-center mt-[24px]">
          <button
            onClick={handlePrev}
            className="h-[40px] w-[40px] px-[10px] py-[10px]"
          >
            <Image
              src={`/left-arrow.png`}
              height={20}
              width={10}
              className="w-[10px] h-[20px] md:w-[auto] md:h-[auto]"
              alt="Chevron Right Icon"
            />
          </button>
          <button
            onClick={handleNext}
            className="h-[40px] w-[40px] px-[10px] py-[10px]"
          >
            <Image
              src={`/right-arrow.png`}
              height={20}
              width={10}
              className="w-[10px] h-[20px] md:w-[auto] md:h-[auto]"
              alt="Chevron Right Icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
