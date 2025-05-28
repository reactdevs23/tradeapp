import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import classes from "./BalanceOverview.module.css";
import { balanceCardImg, binanceOverviewImg, zarpSchedulerImg } from "@/images";
import clsx from "clsx";

const BalanceOverview = () => {
  const cards = [
    { cardImg: balanceCardImg, shedulerImg: zarpSchedulerImg },
    { cardImg: balanceCardImg, shedulerImg: zarpSchedulerImg },
    { cardImg: balanceCardImg, shedulerImg: zarpSchedulerImg },
    { cardImg: balanceCardImg, shedulerImg: zarpSchedulerImg },
    { cardImg: balanceCardImg, shedulerImg: zarpSchedulerImg },
  ];

  return (
    <div className={clsx(classes.sliderContainer, "space")}>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className={classes.swiper}
      >
        {cards.map(({ cardImg, shedulerImg }, index) => (
          <SwiperSlide key={index} className={classes.slide}>
            <div className={classes.imgContainer}>
              <img src={cardImg} alt="#" className={classes.img} />
              <img src={shedulerImg} alt="#" className={classes.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BalanceOverview;
