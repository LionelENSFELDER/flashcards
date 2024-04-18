import { useState, useCallback, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import FlashCard from "./components/flash-card";
import { ThemeType, StateEnum, DataCardType } from "./types";
import colorsDefault from "./colors/colors-default";
import CardStack from "./components/card-stack";
import SwipeIcon from "@mui/icons-material/Swipe";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import NavigationTip from "./components/navigation-tip";
import ThemeSelect from "./components/theme-select";
import { getTheme, getThemeList } from "./theme/get-theme";
import "./index.css";
import MaxCardsSelect from "./components/max-cards-select";

function App() {
  const [score, setScore] = useState<number>(0);
  const [maxCards, setMaxCards] = useState<number>(10);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(getTheme());
  const randomizer = useCallback((cards: DataCardType[]): DataCardType[] => {
    return cards.sort(() => 0.5 - Math.random());
  }, []);

  const shuffledArray = useMemo(
    () => randomizer(currentTheme.cards),
    [currentTheme, maxCards, randomizer]
  );
  const displayedCards = shuffledArray.slice(0, maxCards);
  const maxScore: number = displayedCards.length;
  const themeQuestion = currentTheme.themeQuestion;
  const mode: string = currentTheme.mode;

  const updateMaxCard = (maxCards: number) => {
    setMaxCards(maxCards);
  };

  const items = displayedCards.map((card: DataCardType, index: number) => (
    <FlashCard
      mode={mode}
      key={index}
      index={index}
      question={card.question}
      answer={card.answer}
      state={StateEnum.Unviewed}
      callback={(point: number) => updateScore(point)}
    />
  ));
  const updateCurrentTheme = (name: string) => {
    const newTheme: ThemeType = getTheme(name);
    setCurrentTheme(newTheme);
  };

  const updateScore = (point: number) => {
    const nextScore = score + point;
    setScore(nextScore);
  };

  return (
    <ThemeProvider theme={colorsDefault}>
      <Container maxWidth="sm" sx={{ p: 4, pr: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "row", mb: 3 }}>
          <ThemeSelect
            themesList={getThemeList()}
            callback={updateCurrentTheme}
          />
          <MaxCardsSelect callback={updateMaxCard} />
        </Box>
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
