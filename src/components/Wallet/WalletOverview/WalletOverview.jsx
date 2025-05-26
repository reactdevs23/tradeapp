import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import classes from "./WalletOverview.module.css";
import { binanceOverviewImg } from "@/images";
import clsx from "clsx";

const WalletOverview = () => {
  const wallets = [
    binanceOverviewImg,
    binanceOverviewImg,
    binanceOverviewImg,
    binanceOverviewImg,
    binanceOverviewImg,
  ];

  return (
    <div className={clsx(classes.sliderContainer)}>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className={classes.swiper}
      >
        {wallets.map((img, index) => (
          <SwiperSlide key={index} className={classes.slide}>
            <img src={img} alt="#" className={classes.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WalletOverview;
