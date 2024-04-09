import { useState } from "react";
import Box from "@mui/material/Box";
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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="theme-select-label">Theme</InputLabel>
        <Select
          labelId="theme-select-label"
          id="theme-select"
          value={theme}
          label="Theme"
          onChange={handleChange}
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
    </Box>
  );
};

export default ThemeSelect;
