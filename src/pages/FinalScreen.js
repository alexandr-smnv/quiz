import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {Box, Button, Grid, Typography} from "@mui/material";
import {handleCleanStatistic} from "../redux/actions/statisticsAction";
import {handleCleanQuestions} from "../redux/actions/questionsAction";

const FinalScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {score} = useSelector(state => state.questionsReducer)

  // переход для создания нового quiz
  const handleNewQuiz = () => {
    dispatch(handleCleanQuestions())
    dispatch(handleCleanStatistic())
    localStorage.removeItem('indexQuestion')
    navigate('/quiz')
  }

  return (
    <Box mt={10}>
      <Typography variant={"h3"} fontWeight={"bold"} mb={3}>Final score - {score}</Typography>
      <Grid mt={4} justifyContent={"center"} container spacing={2}>
        <Grid item xs={4}>
          <Button variant={"contained"} color={"success"} onClick={handleNewQuiz}>New Quiz</Button>
        </Grid>
        <Grid item xs={4}>
          <Button component={Link} to={'/statistic'} variant={"contained"} color={"primary"}>Statistic</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinalScreen;