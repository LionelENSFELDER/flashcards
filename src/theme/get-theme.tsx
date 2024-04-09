// const themesModules = import.meta.glob("./data/*.json");
import worldCapital from "../data/world-capitals.json";
import worldCurrencies from "../data/world-currencies.json";
import worldLanguages from "../data/world-laguages.json";

// const getThemesData = () => {
//   const data = [];
//   for (const path in themesModules) {
//     themesModules[path]().then((mod: any) => {
//       const obj: any = {};
//       obj.name = mod.default.theme;
//       obj.cards = mod.default.cards;
//       data.push(obj);
//     });
//   }
//   console.log(data);
//   setThemesData(data);
// };
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
