import { useCallback, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import FlashCard from "./components/flash-card";
import { StateEnum, DataCardType } from "./types";
import colorsDefault from "./colors/colors-default";
import CardStack from "./components/card-stack";
import SwipeIcon from "@mui/icons-material/Swipe";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import NavigationTip from "./components/navigation-tip";
import ThemeSelect from "./components/theme-select";
import { getTheme } from "./theme/get-theme";
import "./index.css";
import MaxCardsSelect from "./components/max-cards-select";
import useAppStore from "./stores/app-store";

function App() {
  const maxCards = useAppStore((state) => state.maxCards);
  const score = useAppStore((state) => state.score);
  const updateScore = useAppStore((state) => state.updateScore);
  const currentTheme = useAppStore((state) => state.currentTheme);
  const randomizer = useCallback((cards: DataCardType[]): DataCardType[] => {
    return cards.sort(() => 0.5 - Math.random());
  }, []);

  const shuffledArray = useMemo(
    () => randomizer(getTheme(currentTheme).cards),
    [currentTheme, randomizer]
  );
  const shuffleCards = shuffledArray.slice(0, maxCards);
  const maxScore: number = shuffleCards.length;
  const mainTitle = getTheme(currentTheme).themeQuestion;
  const flashCardsMode: string = getTheme(currentTheme).mode;

  const flashCards = shuffleCards.map((card: DataCardType, index: number) => (
    <FlashCard
      mode={flashCardsMode}
      key={index}
      index={index}
      question={card.question}
      answer={card.answer}
      state={StateEnum.Unviewed}
      callback={() => updateScore()}
    />
  ));
  // const getScore = (flashCards[]]): number => {
  //   const score = items.filter((item) => item.state === 1);
  //   return score.length;
  // };

  return (
    <ThemeProvider theme={colorsDefault}>
      <Container maxWidth="sm" sx={{ p: 4, pr: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "row", mb: 3 }}>
          <ThemeSelect />
          <MaxCardsSelect />
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
          {mainTitle} - {score} / {maxScore}
        </Typography>
        <CardStack cards={flashCards} />
        <Box sx={{ pt: 4, color: "text.primary" }}>
          Navigation :
          <NavigationTip icon={WestIcon} /> ,
          <NavigationTip icon={EastIcon} /> or
          <NavigationTip icon={SwipeIcon} />
        </Box>
        <Typography>{maxCards}</Typography>
      </Container>
    </ThemeProvider>
  );
}

export default App;
