import { SvgIconComponent } from "@mui/icons-material";
export type ModeType = "text" | "image";
export type ThemeNameType =
  | "Capitals"
  | "Currencies"
  | "Languages"
  | "Babywords"
  | "Actors"
  | "Continents"
  | "Religions"
  | "Baby"
  | "Javascript";

export type ThemeType = {
  mode: string;
  theme: string;
  themeQuestion: string;
  cards: DataCardType[];
};
export type SimpleContainerType = {
  children: JSX.Element[];
};
export enum StateEnum {
  Unviewed,
  No,
  Yes,
}
export type FlashCardType = {
  mode: string;
  question: string;
  answer: string;
  index: number;
};
export type DataCardType = {
  question: string;
  answer: string;
};
export type CardStackType = {
  cards: JSX.Element[];
};
export type NavigationTipType = {
  icon: SvgIconComponent;
};
