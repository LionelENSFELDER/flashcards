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
    <Card sx={{ minWidth: 475 }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {title} {question} ?
        </Typography>
        <Typography variant="h4" component="div">
          {answerHidden ? "■■■■■■■■" : answer}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleCardClick(answerHidden)}>
          {answerHidden ? "View answer" : "Hide answer"}
        </Button>
      </CardActions>
    </Card>
  );
}
