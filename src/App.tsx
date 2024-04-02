// import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import contryCapitals from "./data/country-capitals.json";
import AliceCarousel from "react-alice-carousel";
import { Box, Container, Typography } from "@mui/material";
import Card from "./components/card";
import "react-alice-carousel/lib/alice-carousel.css";
import defaultTheme from "./themes/theme-default";
import backgroundImage from "./assets/img/background4.jpg";
import GalleryNavButtons from "./components/gallery-nav-buttons";

type singleCard = {
  question: string;
  answer: string;
};

// type cardsData = {
//   title: string;
//   mode: string;
//   cards: singleCard[];
// };

function App() {
  // const [cards, setCards] = useState<singleCard[]>(contryCapitals.cards);
  // const [score, setScore] = useState<number>(0);
  // const addOneOnScore = () => {
  //   setScore(score + 1);
  // };
  const cards: singleCard[] = contryCapitals.cards;
  const score: number = 0;
  const maxScore: number = cards.length;
  const themeQuestion = contryCapitals.themeQuestion;
  const items = cards.map((card: singleCard, index: number) => (
    <Card
      key={index}
      question={card.question}
      answer={card.answer}
      // updateScore={() => addOneOnScore()}
    />
  ));

  const Gallery = () => (
    <AliceCarousel
      mouseTracking
      autoWidth
      autoHeight
      items={items}
      renderPrevButton={() => GalleryNavButtons("prev")}
      renderNextButton={() => GalleryNavButtons("next")}
    />
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          margin: 0,
          padding: 0,
          pt: 20,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "text.primary",
            bgcolor: "#ffe079",
            fontWeight: "bold",
            mb: 3,
            borderRadius: "20px",
            p: 1,
            px: 3,
          }}
        >
          {themeQuestion} - Score : {score} / {maxScore}
        </Typography>
        <Container sx={{ width: 500, height: 400 }}>
          <Gallery />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
