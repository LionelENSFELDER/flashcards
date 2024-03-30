import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import contryCapitals from "./data/country-capitals.json";
import AliceCarousel from "react-alice-carousel";
import { Box, Button, Container, Typography } from "@mui/material";
import Card from "./components/card";
import "react-alice-carousel/lib/alice-carousel.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import defaultTheme from "./themes/theme-default";
import backgroundImage from "./assets/img/background4.jpg";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

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
  const [cards, setCards] = useState<singleCard[]>(contryCapitals.cards);
  const [score, setScore] = useState<number>(0);
  const maxScore: number = cards.length;
  // const handleDragStart = (e: Event) => e.preventDefault();
  const title = contryCapitals.title;

  const items = cards.map((card: singleCard, index: number) => (
    <Card
      key={index}
      title={title}
      question={card.question}
      answer={card.answer}
    />
  ));

  const renderPrevNextButton = (direction: string) => {
    if (direction === "prev") {
      return (
        <Button
          variant="outlined"
          sx={{
            color: "text.secondary",
            bgcolor: "secondary.main",
            border: 4,
            borderColor: "primary.secondary",
            borderRadius: "10px",
          }}
          size="large"
          startIcon={<NavigateBeforeIcon />}
        >
          Previous
        </Button>
      );
    } else if (direction === "next") {
      return (
        <Button
          variant="outlined"
          sx={{
            color: "text.secondary",
            bgcolor: "secondary.main",
            border: 4,
            borderColor: "primary.secondary",
            borderRadius: "10px",
          }}
          size="large"
          endIcon={<NavigateNextIcon />}
        >
          Next
        </Button>
      );
    }
  };

  const Gallery = () => (
    <AliceCarousel
      mouseTracking
      autoWidth
      autoHeight
      items={items}
      renderPrevButton={() => renderPrevNextButton("prev")}
      renderNextButton={() => renderPrevNextButton("next")}
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
            bgcolor: "#FFDF79",
            fontWeight: "bold",
            mb: 3,
            borderRadius: "20px",
            p: 1,
            px: 3,
          }}
        >
          <SportsScoreIcon fontSize="large" />
          Score : {score} / {maxScore}
        </Typography>
        <Container
          sx={{
            width: 500,
            height: 400,
          }}
        >
          <Gallery />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
