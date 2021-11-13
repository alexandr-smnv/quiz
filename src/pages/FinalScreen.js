import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {handleAmountChange, handleScoreChange} from "../redux/actions/settingActions";

const FinalScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { score } = useSelector(state => state.settingsReducer)

  const handleNewQuiz = () => {
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(10))
    navigate('/quiz')
  }

  return (
    <Box mt={10}>
      <Typography variant={"h3"} fontWeight={"bold"} mb={3}>Final score - {score}</Typography>
      <Button variant={"outlined"} onClick={handleNewQuiz}>New Quiz</Button>
    </Box>
  );
};

export default FinalScreen;