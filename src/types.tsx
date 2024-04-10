import { SvgIconComponent } from "@mui/icons-material";
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
  mode: "text" | "image";
  question: string;
  answer: string;
  state: StateEnum;
  index: number;
  callback: (point: number) => void;
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
