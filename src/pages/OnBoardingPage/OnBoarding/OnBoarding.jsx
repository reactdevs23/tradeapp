import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import classes from "./OnBoarding.module.css";
import { onboarding1, onboarding2, onboarding3, onboarding4 } from "@/images";
import clsx from "clsx";
const onBoardings = [
  { img: onboarding1, overlayPosition: "bottom" },
  {
    img: onboarding2,

    overlayPosition: "bottom",
  },
  { img: onboarding3, overlayPosition: "bottom" },
  {
    img: onboarding4,

    overlayPosition: "top",
  },
];
const OnBoarding = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressRefs = useRef([]);
  const swiperRef = useRef(null);

  const handleAutoplayProgress = (_, time, progress) => {
    progressRefs.current.forEach((bar, index) => {
      if (bar) {
        if (index === activeIndex) {
          bar.style.transform = `scaleX(${1 - progress})`;
        } else {
          bar.style.transform = `scaleX(0)`;
        }
      }
    });
  };

  return (
    <div className={clsx(classes.sliderContainer, "space")}>
      <div className={classes.progressWrapper}>
        {onBoardings?.map((_, i) => (
          <div
            key={i}
            className={classes.progressBar}
            onClick={() => swiperRef.current?.slideToLoop(i)}
          >
            <div
              className={clsx(classes.fill, {
                [classes.activeFill]: i === activeIndex,
              })}
              ref={(el) => (progressRefs.current[i] = el)}
            />
          </div>
        ))}
      </div>

      <div className={classes.swiperWrapper}>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onAutoplayTimeLeft={handleAutoplayProgress}
          modules={[Autoplay]}
          className={classes.swiper}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {onBoardings.map(({ img, overlayPosition }, index) => (
            <SwiperSlide key={index} className={classes.slide}>
              <div className={classes.imgContainer}>
                <img
                  src={img}
                  alt={`wallet-${index}`}
                  className={classes.img}
                />
                <div
                  className={clsx(classes.overlay, {
                    [classes.ovelayTop]: overlayPosition === "top",
                    [classes.ovelayBottom]: overlayPosition === "bottom",
                  })}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OnBoarding;
