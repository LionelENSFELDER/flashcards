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
    <Box sx={{ width: 1, mb: 3 }}>
      <FormControl size="medium">
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
    </Box>
  );
};

export default ThemeSelect;
