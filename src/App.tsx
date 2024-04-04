import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import contryCapitals from "./data/country-capitals.json";
import { Box, Container, Typography } from "@mui/material";
import FlashCard from "./components/flash-card";
import { StateEnum, DataCardType } from "./types";
import defaultTheme from "./themes/theme-default";
import CardStack from "./components/card-stack";
import SwipeIcon from "@mui/icons-material/Swipe";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import NavigationTip from "./components/navigation-tip";
import "./index.css";

function App() {
  const [score, setScore] = useState<number>(0);
  const addOneOnScore = (point: number) => {
    const nextScore = score + point;
    setScore(nextScore);
  };
  const cards: DataCardType[] = contryCapitals.cards;
  const maxScore: number = cards.length;
  const themeQuestion = contryCapitals.themeQuestion;
  const items = cards.map((card: DataCardType, index: number) => (
    <FlashCard
      key={index}
      index={index}
      question={card.question}
      answer={card.answer}
      state={StateEnum.Unviewed}
      callback={(point: number) => addOneOnScore(point)}
    />
  ));

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="sm" sx={{ p: 4, pr: 5 }}>
        <Typography
          variant="h4"
          sx={{
            color: "#ffe079",
            bgcolor: "primary.main",
            fontWeight: "bold",
            mb: 3,
            borderRadius: "20px",
            p: 1,
            px: 3,
          }}
        >
          {themeQuestion} - {score} / {maxScore}
        </Typography>
        <CardStack cards={items} />
        <Box sx={{ pt: 4, color: "text.primary" }}>
          Navigation :
          <NavigationTip icon={WestIcon} /> ,
          <NavigationTip icon={EastIcon} /> or
          <NavigationTip icon={SwipeIcon} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
