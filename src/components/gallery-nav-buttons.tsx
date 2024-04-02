import { Button } from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type NavButtonProps = {
  iconSide: string;
  label: string;
};

const NavButton = ({ iconSide, label }: NavButtonProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        minWidth: 150,
        color: "text.secondary",
        bgcolor: "secondary.main",
        border: 4,
        borderColor: "primary.secondary",
        borderRadius: "10px",
        "&: hover": {
          bgcolor: "secondary.main",
        },
      }}
      size="large"
      startIcon={
        iconSide === "start" ? <NavigateBeforeIcon fontSize="large" /> : null
      }
      endIcon={
        iconSide === "end" ? <NavigateNextIcon fontSize="large" /> : null
      }
    >
      {label}
    </Button>
  );
};
const GalleryNavButtons = (direction: string) => {
  if (direction === "prev") {
    return <NavButton iconSide={"start"} label={"Previous"} />;
  } else if (direction === "next") {
    return <NavButton iconSide={"end"} label={"Next"} />;
  }
};

export default GalleryNavButtons;
