import { createTheme } from "@mui/material/styles";

const colorsDefault = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#FFF",
    },
    primary: {
      main: "#08235B",
    },
    secondary: {
      main: "#ECB5B8",
    },
    background: {
      default: "#133266",
      paper: "#ffffff",
    },
    text: {
      primary: "#08235B",
      secondary: "#6B7E9F",
      disabled: "#BEB8B9",
    },
    divider: "#000000",
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
});

export default colorsDefault;
