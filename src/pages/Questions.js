import React, {useEffect, useState} from 'react';
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import useAxios from "../hooks/useAxios";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {handleScoreChange} from "../redux/actions";
import {decode} from "html-entities";


const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {question_category, question_difficulty, question_type, amount_of_question, score} = useSelector(state => state)

  let apiUrl = `/api.php?amount=${amount_of_question}`

  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`)
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`)
  }

  const {response, loading} = useAxios({url: apiUrl})
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex]
      let answers = [...question.incorrect_answers]
      answers.splice(getRandomInt(3), 0, question.correct_answer)
      setOptions(answers)
    }
  }, [response, questionIndex])

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/score");
    }
  };

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress/>
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant={"h4"}>Question {questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(response.results[questionIndex].question)}</Typography>

      {
        options.map((data, id) => (
          <Box key={id} mt={2}>
            <Button onClick={handleClickAnswer} variant={"contained"}>{decode(data)}</Button>
          </Box>
        ))
      }

      <Box mt={5}>Score: {score} / {response.results.length}</Box>
    </Box>
  );
};

export default Questions;