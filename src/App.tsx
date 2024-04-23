import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import colorsDefault from "./colors/colors-default";
import Deck from "./components/deck";
import NavigationTips from "./components/navigation-tips";
import ThemeSelect from "./components/theme-select";
import { getTheme } from "./theme/get-theme";
import MaxCardsSelect from "./components/max-cards-select";
import useAppStore from "./stores/app-store";
import "./index.css";

function App() {
  const { score, maxCards, currentTheme } = useAppStore();
  const cards = getTheme(currentTheme)
    .cards.sort(() => 0.5 - Math.random())
    .slice(0, maxCards);

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
          {getTheme(currentTheme).themeQuestion} - {score} / {cards.length}
        </Typography>
        <Deck cards={cards} mode={getTheme(currentTheme).mode} />
        <NavigationTips />
      </Container>
    </ThemeProvider>
  );
}

export default App;
