import { useState } from "react";
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
import useAppStore from "../stores/app-store";

type CardButtonProps = {
  answerHidden?: boolean;
  disabled?: boolean;
  handleClick: (answerHidden: boolean) => void;
  startIcon: React.ReactNode;
  label: string;
  bgcolor?: string;
  mt?: number;
};
type QuestionFormaterProps = {
  mode: ThemeType["mode"];
  question: string;
  answer: string;
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
const QuestionFormater = ({
  mode,
  question,
  answer,
}: QuestionFormaterProps) => {
  if (mode === "image") {
    return (
      <Box
        component={"img"}
        src={question}
        alt={"image of " + answer}
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

const FlashCard = ({ mode, index, question, answer }: FlashCardType) => {
  const incScore = useAppStore((state) => state.incScore);
  const [answerHidden, setAnswerHidden] = useState<boolean>(true);
  const [isLearned, setIsLearned] = useState<StateEnum>(StateEnum.Unviewed);
  const setYes = () => {
    setIsLearned(StateEnum.Yes);
    incScore();
  };
  const setNo = () => {
    setIsLearned(StateEnum.No);
  };
  const isButtonDisable = (): boolean => {
    return isLearned !== StateEnum.Unviewed ? true : false;
  };

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
            visibility: isLearned === StateEnum.Unviewed ? "hidden" : "visible",
          }}
        >
          <Chip
            label={isLearned === StateEnum.No ? "False" : "True !"}
            color={isLearned === StateEnum.No ? "error" : "success"}
          />
        </Typography>
        <QuestionFormater mode={mode} question={question} answer={answer} />
        <Typography variant="h4" component="div">
          {answerHidden ? "******" : answer}
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
          disabled={isButtonDisable()}
          handleClick={setNo}
          startIcon={<ThumbDownIcon />}
          label={"None"}
          mt={1}
        />

        <CardButton
          disabled={isButtonDisable()}
          handleClick={setYes}
          startIcon={<ThumbUpIcon />}
          label={"Get it !"}
          bgcolor="secondary.main"
          mt={1}
        />
      </CardActions>
    </Card>
  );
};

export default FlashCard;
