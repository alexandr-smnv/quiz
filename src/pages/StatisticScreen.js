import React from 'react';
import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {decode} from "html-entities";

const StatisticScreen = () => {
  const statistic = useSelector(state => state.statistics)
  const navigate = useNavigate()

  const handleScore = () => {
    navigate('/score')
  }

  return (
    <>
        <Box mb={2}>
          <Button onClick={handleScore} variant={"contained"} color={"primary"}>
            Back
          </Button>
        </Box>
      {
        statistic.map((data, index) => (
          <Box key={data.question} mb={2}>
            <Card sx={{minWidth: 275}}>
              <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                  Question № {index + 1}
                </Typography>
                <Typography variant="h6">
                  {decode(data.question)}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary">
                  Your answer:
                </Typography>
                <Typography variant="h6">
                  {decode(data.currentAnswer)}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary">
                  Correct answer:
                </Typography>
                <Typography variant="h6">
                  {decode(data.correctAnswer)}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary">
                  Result:
                </Typography>
                <Typography variant="h6">
                  {
                    data.currentAnswer === data.correctAnswer
                      ?
                      <Typography color={"green"}>SUCCESS</Typography>
                      :
                      <Typography color={"red"}>ERROR</Typography>
                  }
                </Typography>
              </CardContent>
            </Card>
          </Box>

        ))
      }
    </>

  );
};

export default StatisticScreen;
