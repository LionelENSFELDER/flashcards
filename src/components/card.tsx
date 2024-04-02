import { useState } from "react";
// import Card from "@mui/material/Card";
import { Box, Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

type singleCard = {
  question: string;
  answer: string;
  // updateScore: () => void;
};

export default function BasicCard({
  question,
  answer,
}: // updateScore,
singleCard) {
  const [answerHidden, setAnswerHidden] = useState<boolean>(true);
  const [learned, setLearned] = useState<boolean | null>(null);
  const handleCardClick = (getIt: boolean) => {
    if (learned != null) {
      return;
    }
    if (getIt) {
      setLearned(true);
      // updateScore();
    } else {
      setLearned(false);
    }
  };
  return (
    <Card
      sx={{
        width: 380,
        height: 400,
        border: 4,
        borderColor: "primary.main",
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Typography variant="h6" color="text.primary" gutterBottom>
          {learned ? "You get it !" : "Keep learning !"}
        </Typography>
        <Typography variant="h5" color="text.primary" gutterBottom>
          {question}
        </Typography>
        <Typography variant="h4" component="div">
          {answerHidden ? "■■■■■■■■" : answer}
        </Typography>
        <Box sx={{ display: "block" }}>
          <Button
            variant="outlined"
            sx={{
              color: "text.primary",
              bgcolor: "background.paper",
              border: 4,
              borderColor: "primary.main",
              borderRadius: "10px",
            }}
            size="large"
            startIcon={<ThumbDownIcon />}
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
          disabled={learned !== null ? true : false}
          sx={{
            color: "text.primary",
            bgcolor: "background.paper",
            border: 4,
            borderColor: "primary.main",
            borderRadius: "10px",
          }}
          size="large"
          startIcon={<ThumbDownIcon />}
          onClick={() => handleCardClick(false)}
        >
          Nope
        </Button>
        <Button
          variant="outlined"
          disabled={learned !== null ? true : false}
          sx={{
            color: "text.primary",
            bgcolor: "secondary.main",
            border: 4,
            borderColor: "primary.main",
            borderRadius: "10px",
          }}
          size="large"
          startIcon={<ThumbUpIcon />}
          onClick={() => handleCardClick(true)}
        >
          Get it !
        </Button>
      </CardActions>
    </Card>
  );
}
