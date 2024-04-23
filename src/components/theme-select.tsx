import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useAppStore from "../stores/app-store";
import { getThemeList } from "../theme/get-theme-list";

const ThemeSelect = () => {
  const currentTheme = useAppStore((state) => state.currentTheme);
  const updateCurrentTheme = useAppStore((state) => state.updateCurrentTheme);

  return (
    <FormControl size="medium" sx={{ minWidth: 300, mr: 4 }}>
      <InputLabel id="theme-select-label">Theme</InputLabel>
      <Select
        variant="outlined"
        labelId="theme-select-label"
        id="theme-select"
        value={currentTheme}
        label="Select your theme"
        onChange={(event) => updateCurrentTheme(event.target.value)}
        sx={{
          color: "text.main",
          fontWeight: "bold",
          borderRadius: 4,
        }}
      >
        {getThemeList().map((element, index) => {
          return (
            <MenuItem key={index} value={element}>
              {element}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ThemeSelect;
