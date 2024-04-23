import Box from "@mui/material/Box";
import { NavigationTipType } from "../types";
import SwipeIcon from "@mui/icons-material/Swipe";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const Icon = ({ icon }: NavigationTipType) => {
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

const NavigationTips = () => {
  return (
    <Box sx={{ pt: 4, color: "text.primary" }}>
      Navigation :
      <Icon icon={WestIcon} /> ,
      <Icon icon={EastIcon} /> or
      <Icon icon={SwipeIcon} />
    </Box>
  );
};

export default NavigationTips;
