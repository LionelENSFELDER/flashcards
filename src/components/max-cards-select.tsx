import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import useAppStore from "../stores/app-store";
import Select from "@mui/material/Select";

const MaxCardsSelect = () => {
  const maxCardsAvailable: number[] = [10, 20, 40, 80];
  const maxCards = useAppStore((state) => state.maxCards);
  const updateMaxCards = useAppStore((state) => state.updateMaxCards);

  return (
    <FormControl size="medium" sx={{ minWidth: 120 }}>
      <InputLabel id="max-card-select-label">Cards</InputLabel>
      <Select
        variant="outlined"
        labelId="max-cards-select-label"
        id="max-cards-select"
        value={maxCards.toString()}
        label="Select max number of cards"
        onChange={(event) => updateMaxCards(parseInt(event.target.value))}
        sx={{
          color: "text.main",
          fontWeight: "bold",
          borderRadius: 4,
        }}
      >
        {maxCardsAvailable.map((element, index) => {
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
