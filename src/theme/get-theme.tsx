import capitals from "../data/capitals.json";
import currencies from "../data/currencies.json";
import languages from "../data/laguages.json";
import baby from "../data/baby.json";
import { ThemeType } from "../types";
export const getThemeList = (): string[] => {
  return ["Baby", "Capitals", "Currencies", "Languages"];
};
export const getTheme = (name?: string): ThemeType => {
  switch (name) {
    case "Capitals":
      return capitals;
      break;
    case "Currencies":
      return currencies;
      break;
    case "Languages":
      return languages;
      break;
    case "Baby":
      return baby;
      break;
    default:
      return baby;
      break;
  }
};
