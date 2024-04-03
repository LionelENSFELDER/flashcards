import { useState, useCallback, memo } from "react";
import { Box, Card, Chip } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { StateEnum, FlashCardType } from "../types";
const FlashCard = memo(
  ({ question, answer, state, callback }: FlashCardType) => {
    const [answerHidden, setAnswerHidden] = useState<boolean>(true);
    const [isLearned, setIsLearned] = useState<StateEnum>(state);
    const handleCardClick = useCallback(
      (cardIsLearned: StateEnum) => {
        if (cardIsLearned === StateEnum.Unviewed) {
          return;
        } else if (cardIsLearned === StateEnum.Yes) {
          callback(1);
          setIsLearned(StateEnum.Yes);
        } else {
          setIsLearned(StateEnum.No);
        }
      },
      [callback]
    );
    return (
      <Card
        sx={{
          width: 380,
          height: 400,
          border: 4,
          borderColor: "primary.main",
          borderRadius: "20px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ position: "relative" }}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            {isLearned === StateEnum.No && <Chip label="False" color="error" />}
            {isLearned === StateEnum.Yes && (
              <Chip label="True !" color="success" />
            )}
          </Typography>
          <Typography variant="h5" color="text.primary" gutterBottom>
            {question}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: answerHidden ? "transparent" : "inherit",
              textShadow: answerHidden ? "0 0 13px #000" : "none",
            }}
          >
            {answer}
          </Typography>
          <Box sx={{ display: "block" }}>
            <Button
              variant="outlined"
              sx={{
                mt: 4,
                color: "text.primary",
                bgcolor: "background.paper",
                border: 4,
                borderColor: "primary.main",
                borderRadius: "10px",
              }}
              size="large"
              startIcon={
                answerHidden ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
              onClick={() => setAnswerHidden(!answerHidden)}
            >
              {answerHidden ? "View answer" : "Hide answer"}
            </Button>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            position: "absolute",
            bottom: "10%",
          }}
        >
          <Button
            variant="outlined"
            disabled={isLearned !== StateEnum.Unviewed ? true : false}
            sx={{
              color: "text.primary",
              bgcolor: "background.paper",
              border: 4,
              borderColor: "primary.main",
              borderRadius: "10px",
            }}
            size="large"
            startIcon={<ThumbDownIcon />}
            onClick={() => handleCardClick(StateEnum.No)}
          >
            Nope
          </Button>
          <Button
            variant="outlined"
            disabled={isLearned !== StateEnum.Unviewed ? true : false}
            sx={{
              color: "text.primary",
              bgcolor: "secondary.main",
              border: 4,
              borderColor: "primary.main",
              borderRadius: "10px",
            }}
            size="large"
            startIcon={<ThumbUpIcon />}
            onClick={() => handleCardClick(StateEnum.Yes)}
          >
            Get it !
          </Button>
        </CardActions>
      </Card>
    );
  }
);

export default FlashCard;
