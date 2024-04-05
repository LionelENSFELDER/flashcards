import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import worldCapitals from "./data/world-capitals.json";
import worldCurrencies from "./data/world-currencies.json";
import { Box, Container, Typography } from "@mui/material";
import FlashCard from "./components/flash-card";
import { StateEnum, DataCardType } from "./types";
import colorsDefault from "./colors/colors-default";
import CardStack from "./components/card-stack";
import SwipeIcon from "@mui/icons-material/Swipe";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import NavigationTip from "./components/navigation-tip";
import "./index.css";
function App() {
  const availableCardsThemes: string[] = ["world-capitals", "world-currencies"];
  const getCardsTheme = (name: string): string | undefined => {
    const themeIndex: number | undefined = availableCardsThemes.findIndex(
      (element) => element === name
    );
    if (themeIndex !== undefined) {
      return "./data/" + availableCardsThemes[themeIndex] + ".json";
    }
    return undefined;
  };
  const [score, setScore] = useState<number>(0);
  const addOneOnScore = (point: number) => {
    const nextScore = score + point;
    setScore(nextScore);
  };

  const modules = import.meta.glob("./data/*.json");
  const ThemesList: string[] = [];
  const getThemesList = () => {
    for (const path in modules) {
      modules[path]().then((mod: any) => {
        ThemesList.push(mod.default.theme);
      });
    }
  };
  getThemesList();
  console.log(ThemesList);

  const allThemes: { name: string; cards: any }[] = [];
  const getAllThemes = () => {
    for (const path in modules) {
      modules[path]().then((mod: any) => {
        const obj: any = {};
        obj.name = mod.default.theme;
        obj.cards = mod.default.cards;
        allThemes.push(obj);
      });
      console.log(allThemes);
    }
  };
  getAllThemes();
  console.log(allThemes.find((element) => element.name === "world-capitals"));
  // for (const path in modules) {
  //   modules[path]().then((mod: any) => {
  //     cardThemeSelectList.push(mod.default.theme);
  //     const obj: any = {};
  //     // obj.name = mod.default.theme;
  //     obj[mod.default.theme] = mod.default.cards;
  //     allCardsThemes.push(obj);
  //     // console.log(obj);
  //   });
  //   // console.log(allCardsThemes);
  // }
  // console.log(allCardsThemes[0]);
  // const [cardsTheme, setCardsTheme] = useState<any>(
  //   getCardsTheme("world-capitals")
  // );
  // console.log("cardTheme", cardsTheme);

  const cards: DataCardType[] = worldCapitals.cards;
  const maxScore: number = cards.length;
  const themeQuestion = worldCapitals.themeQuestion;
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
    <ThemeProvider theme={colorsDefault}>
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
