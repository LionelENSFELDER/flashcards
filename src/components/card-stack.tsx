import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination, Keyboard, Navigation } from "swiper/modules";
import { CardStackType } from "../types";

const CardStack = ({ cards }: CardStackType) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      className="mySwiper"
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectCards, Keyboard, Pagination, Navigation]}
    >
      {cards.map((card, index) => {
        return <SwiperSlide key={index}>{card}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default CardStack;
