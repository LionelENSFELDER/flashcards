import worldCapital from "../data/world-capitals.json";
import worldCurrencies from "../data/world-currencies.json";
import worldLanguages from "../data/world-laguages.json";

export const getThemeList = (): string[] => {
  return ["world-capitals", "world-currencies", "world-languages"];
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
    default:
      return worldCapital;
      break;
  }
};
