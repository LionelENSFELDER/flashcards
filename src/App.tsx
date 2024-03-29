import { useState } from "react";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import contryCapitals from "./data/country-capitals.json";
import AliceCarousel from "react-alice-carousel";
import { Box, Button, Container } from "@mui/material";
import Card from "./components/card";
import "react-alice-carousel/lib/alice-carousel.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import defaultTheme from "./themes/theme-default";
import backgroundImage from "./assets/img/background3.jpg";

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
  const handleDragStart = (e: Event) => e.preventDefault();
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
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundBlendMode: "blur",
        }}
      >
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
