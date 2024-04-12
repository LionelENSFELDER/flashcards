import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type ThemeSelectType = {
  callback: (maxCards: number) => void;
};
const MaxCardsSelect = ({ callback }: ThemeSelectType) => {
  const availableNumbers: number[] = [10, 20, 40, 80];
  const [maxCards, setMaxCards] = useState<number>(10);

  const handleChange = (event: SelectChangeEvent) => {
    setMaxCards(parseInt(event.target.value));
    callback(parseInt(event.target.value));
  };

  return (
    <FormControl size="medium" sx={{ minWidth: 120 }}>
      <InputLabel id="max-card-select-label">Cards</InputLabel>
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
  );
};

export default MaxCardsSelect;
