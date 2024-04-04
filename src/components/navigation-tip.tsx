import { Box } from "@mui/material";
import { NavigationTipType } from "../types";

const NavigationTip = ({ icon }: NavigationTipType) => {
  return (
    <Box
      component={icon}
      sx={{
        bgcolor: "#FBFAFB",
        borderRadius: 1,
        boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.75)",
        m: 1,
        mb: 0,
      }}
    />
  );
};

export default NavigationTip;
