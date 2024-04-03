import { Box } from "@mui/material";
import backgroundImage from "../assets/img/background.jpg";
import { SimpleContainerType } from "../types";
const AppContainer = ({ children }: SimpleContainerType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        margin: 0,
        padding: 0,
        pt: 20,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat",
      }}
    >
      {children}
    </Box>
  );
};
export default AppContainer;
