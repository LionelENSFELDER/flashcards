import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import contryCapitals from "./data/country-capitals.json";
import { Container, Typography } from "@mui/material";
import FlashCard from "./components/flash-card";
import { StateEnum, DataCardType } from "./types";
import defaultTheme from "./themes/theme-default";
import CardStack from "./components/card-stack";
import AppContainer from "./components/app-container";

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
      question={card.question}
      answer={card.answer}
      state={StateEnum.Unviewed}
      callback={(point: number) => addOneOnScore(point)}
    />
  ));

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
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
          <CardStack cards={items} />
        </Container>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
