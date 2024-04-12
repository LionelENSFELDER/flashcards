import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type ThemeSelectType = {
  themesList: string[];
  callback: (name: string) => void;
};
const ThemeSelect = ({ themesList, callback }: ThemeSelectType) => {
  const [theme, setTheme] = useState<string>(themesList[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value);
    callback(event.target.value);
  };

  return (
    <FormControl size="medium" sx={{ minWidth: 300, mr: 4 }}>
      <InputLabel id="theme-select-label">Theme</InputLabel>
      <Select
        variant="outlined"
        labelId="theme-select-label"
        id="theme-select"
        value={theme}
        label="Select your theme"
        onChange={handleChange}
        sx={{
          color: "text.main",
          fontWeight: "bold",
          borderRadius: 4,
        }}
      >
        {themesList.map((element, index) => {
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
