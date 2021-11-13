import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Grid, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import {handleAmountChange, handleScoreChange} from "../redux/actions/settingActions";
import {handleCleanStatistic} from "../redux/actions/statisticsAction";

const FinalScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {score} = useSelector(state => state.settings)

  const handleNewQuiz = () => {
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(10))
    dispatch(handleCleanStatistic())
    navigate('/quiz')
  }

  const handleStatistic = () => {
    navigate('/statistic')
  }

  return (
    <Box mt={10}>
      <Typography variant={"h3"} fontWeight={"bold"} mb={3}>Final score - {score}</Typography>
      <Grid mt={4} justifyContent={"center"} container spacing={2}>
        <Grid item xs={4}>
          <Button variant={"contained"} color={"success"} onClick={handleNewQuiz}>New Quiz</Button>
        </Grid>
        <Grid item xs={4}>
            <Button variant={"contained"} color={"primary"} onClick={handleStatistic}>Statistic</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinalScreen;