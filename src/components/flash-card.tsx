import { useState, useCallback, memo } from "react";
import { Box, Card, Chip, Badge } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import StyleIcon from "@mui/icons-material/Style";
import { StateEnum, FlashCardType, ThemeType } from "../types";

type CardButtonProps = {
  answerHidden?: boolean;
  disabled?: boolean;
  handleClick: (answerHidden: boolean) => void;
  startIcon: React.ReactNode;
  label: string;
  bgcolor?: string;
  mt?: number;
};
const CardButton = ({
  answerHidden,
  disabled,
  handleClick,
  startIcon,
  label,
  bgcolor,
  mt = 4,
}: CardButtonProps) => {
  return (
    <Button
      disabled={disabled ? disabled : false}
      variant="outlined"
      sx={{
        mt: mt,
        color: "text.primary",
        bgcolor: bgcolor ? bgcolor : "background.paper",
        border: 4,
        borderColor: "primary.main",
        borderRadius: "10px",
      }}
      size="large"
      startIcon={startIcon}
      onClick={() => handleClick(!answerHidden)}
    >
      {label}
    </Button>
  );
};

type QuestionFormaterProps = {
  mode: ThemeType["mode"];
  question: string;
};
const QuestionFormater = ({ mode, question }: QuestionFormaterProps) => {
  if (mode === "image") {
    return (
      <Box
        component={"img"}
        src={question}
        alt={question + " image"}
        sx={{ position: "relative", width: 1, height: "auto" }}
      />
    );
  }
  return (
    <Typography variant="h5" color="text.primary" gutterBottom>
      {question}
    </Typography>
  );
};
const FlashCard = memo(
  ({ mode, index, question, answer, state, callback }: FlashCardType) => {
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
          minHeight: 350,
          border: 4,
          borderColor: "primary.main",
          borderRadius: "20px",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ position: "relative" }}>
          <Badge
            badgeContent={index + 1}
            color="secondary"
            sx={{ position: "absolute", right: "5%" }}
          >
            <StyleIcon fontSize="large" />
          </Badge>
          <Typography
            variant="h6"
            color="text.primary"
            gutterBottom
            sx={{
              visibility:
                isLearned === StateEnum.Unviewed ? "hidden" : "visible",
            }}
          >
            <Chip
              label={isLearned === StateEnum.No ? "False" : "True !"}
              color={isLearned === StateEnum.No ? "error" : "success"}
            />
          </Typography>
          <QuestionFormater mode={mode} question={question} />
          <Typography
            variant="h4"
            component="div"
            sx={{
              color: answerHidden ? "transparent" : "inherit",
              textShadow: answerHidden ? "0 0 16px rgb(0, 0, 92)" : "none",
            }}
          >
            {answer}
          </Typography>
          <Box sx={{ display: "block", position: "relative" }}>
            <CardButton
              answerHidden={answerHidden}
              handleClick={() => setAnswerHidden(!answerHidden)}
              startIcon={
                answerHidden ? <VisibilityIcon /> : <VisibilityOffIcon />
              }
              label={answerHidden ? "View answer" : "Hide answer"}
            />
          </Box>
        </CardContent>
        <CardActions>
          <CardButton
            disabled={isLearned !== StateEnum.Unviewed ? true : false}
            handleClick={() => handleCardClick(StateEnum.No)}
            startIcon={<ThumbDownIcon />}
            label={"None"}
            mt={1}
          />

          <CardButton
            // sx={{bdcolor: "secondary.main"}}
            disabled={isLearned !== StateEnum.Unviewed ? true : false}
            handleClick={() => handleCardClick(StateEnum.Yes)}
            startIcon={<ThumbUpIcon />}
            label={"Get it !"}
            bgcolor="secondary.main"
            mt={1}
          />
        </CardActions>
      </Card>
    );
  }
);

export default FlashCard;
