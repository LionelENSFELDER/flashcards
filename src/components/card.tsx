import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type singleCard = {
  title: string;
  question: string;
  answer: string;
};

export default function BasicCard({ title, question, answer }: singleCard) {
  const [answerHidden, setAnswerHidden] = useState<boolean>(true);
  const handleCardClick = (answerHidden: boolean) => {
    setAnswerHidden(!answerHidden);
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
        <Typography variant="h5" color="text.primary" gutterBottom>
          {title} {question} ?
        </Typography>
        <Typography variant="h4" component="div">
          {answerHidden ? "■■■■■■■■" : answer}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: "absolute",
          bottom: "10%",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: "text.primary",
            bgcolor: "secondary.main",
            border: 4,
            borderColor: "primary.main",
            borderRadius: "10px",
          }}
          size="large"
          onClick={() => handleCardClick(answerHidden)}
        >
          {answerHidden ? "View answer" : "Hide answer"}
        </Button>
      </CardActions>
    </Card>
  );
}
