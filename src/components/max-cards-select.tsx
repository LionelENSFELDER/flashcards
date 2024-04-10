import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type ThemeSelectType = {
  callback: (maxCards: number) => void;
};
const MaxCardsSelect = ({ callback }: ThemeSelectType) => {
  const availableNumbers: number[] = [10, 20, 40, 80];
  const [maxCards, setMaxCards] = useState<number>(5);

  const handleChange = (event: SelectChangeEvent) => {
    setMaxCards(parseInt(event.target.value));
    callback(parseInt(event.target.value));
  };

  return (
    <Box sx={{ width: 1, mb: 3 }}>
      <FormControl size="medium">
        <InputLabel id="max-card-select-label">Maximum cards</InputLabel>
        <Select
          variant="outlined"
          labelId="max-cards-select-label"
          id="max-cards-select"
          value={maxCards.toString()}
          label="Select max number of cards"
          onChange={handleChange}
          sx={{
            color: "text.main",
            fontWeight: "bold",
            borderRadius: 4,
          }}
        >
          {availableNumbers.map((element, index) => {
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

export default MaxCardsSelect;
