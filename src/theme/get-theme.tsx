import worldCapital from "../data/world-capitals.json";
import worldCurrencies from "../data/world-currencies.json";
import worldLanguages from "../data/world-laguages.json";
import babyWords from "../data/baby-words.json";

export const getThemeList = (): string[] => {
  return [
    "baby-words",
    "world-capitals",
    "world-currencies",
    "world-languages",
  ];
};
export const getTheme = (name?: string) => {
  switch (name) {
    case "world-capitals":
      return worldCapital;
      break;
    case "world-currencies":
      return worldCurrencies;
      break;
    case "world-languages":
      return worldLanguages;
      break;
    case "baby-words":
      return babyWords;
      break;
    default:
      return babyWords;
      break;
  }
};
