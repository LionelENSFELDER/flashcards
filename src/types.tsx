export type SimpleContainerType = {
  children: JSX.Element[];
};
export enum StateEnum {
  Unviewed,
  No,
  Yes,
}
export type FlashCardType = {
  question: string;
  answer: string;
  state: StateEnum;
  callback: (point: number) => void;
};
export type DataCardType = {
  question: string;
  answer: string;
};
export type CardStackType = {
  cards: FlashCardType[];
};
// export type cardsData = {
//   title: string;
//   mode: string;
//   cards: singleCard[];
// };
