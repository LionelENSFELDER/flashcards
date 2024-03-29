import { useState } from "react";
import contryCapitals from "./data/country-capitals.json";
import AliceCarousel from "react-alice-carousel";
import { Box } from "@mui/material";
import Card from "./components/card";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";

type singleCard = {
  question: string;
  answer: string;
};

type cardsData = {
  title: string;
  mode: string;
  cards: singleCard[];
};

function App() {
  const [cards, setCards] = useState<singleCard[]>(contryCapitals.cards);
  const handleDragStart = (e) => e.preventDefault();
  const title = contryCapitals.title;

  const items = cards.map((card: singleCard, index: number) => (
    <Card
      key={index}
      title={title}
      question={card.question}
      answer={card.answer}
    />
  ));

  const Gallery = () => (
    <AliceCarousel mouseTracking autoWidth autoHeight items={items} />
  );

  return (
    <Box
      sx={{
        width: "475px",
        height: "200px",
      }}
    >
      <Gallery />
    </Box>
  );
}

export default App;
