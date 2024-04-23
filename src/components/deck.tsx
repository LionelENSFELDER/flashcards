import { Swiper, SwiperSlide } from "swiper/react";
import FlashCard from "./flash-card";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination, Keyboard, Navigation } from "swiper/modules";
import { DataCardType } from "../types";
type DeckProps = {
  cards: DataCardType[];
  mode: string;
};
const Deck = ({ cards, mode }: DeckProps) => {
  const flashCards = cards.map((card: DataCardType, index: number) => (
    <FlashCard
      mode={mode}
      index={index}
      question={card.question}
      answer={card.answer}
    />
  ));

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
      {/* {<SwiperSlide key={1}>{flashCards[0]}</SwiperSlide>} */}
      {flashCards.map((card, index) => {
        console.log(card.props.question);
        return <SwiperSlide key={index}>{card}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default Deck;
