import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {handleScoreChange} from "../redux/actions/settingActions";
import {decode} from "html-entities";


const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {name, score} = useSelector(state => state.settingsReducer)
  const {questions} = useSelector(state => state.questionsReducer)
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (questions?.length) {
      // загрузка вопроса по индексу
      const question = questions[questionIndex]
      // загрузка неправильных ответов
      let answers = [...question.incorrect_answers]
      // добавление в массив ответов правильный ответ на рандомное место
      answers.splice(getRandomInt(3), 0, question.correct_answer)
      setOptions(answers)
    }
  }, [questions, questionIndex])


  const handleClickAnswer = (data) => {
    const question = questions[questionIndex];
    if (data === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    setSelected(data)
  };

  const handleSelect = (data) => {
    const question = questions[questionIndex];
    // если выбранный ответ правильный - выделить зеленым
    if (selected === data && selected === question.correct_answer) return "success";
    // если выбранный ответ неправильный - выделить красным
    else if (selected === data && selected !== question.correct_answer) return "error";
    // выделить правильный ответ - зеленым
    else if (data === question.correct_answer) return "success";
  };

  const handleNextQuestion = () => {
    if (selected) {
      setSelected(null)
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(questionIndex + 1);
      } else {
        navigate("/score");
      }
    }
  }

  return (
    <Box>
      <Typography variant={"h4"}>Hello {name}</Typography>
      <Typography mt={2} variant={"h4"}>Question №{questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(questions[questionIndex]?.question)}</Typography>

      {
        options.map((data, id) => (
          <Box key={id} mt={2}>
            <Button
              style={selected && {pointerEvents: 'none'}}
              color={selected ? handleSelect(data) : 'primary'}
              variant={"contained"}
              onClick={() => handleClickAnswer(data)}
            >
              {decode(data)}
            </Button>
          </Box>
        ))
      }

      <Grid mt={4} justifyContent={"center"} container spacing={2}>
        <Grid item xs={4}>
          <Button color={"error"} fullWidth variant="contained">Exit</Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => handleNextQuestion()} color={'success'} fullWidth variant="contained">Next</Button>
        </Grid>
      </Grid>

      <Box mt={5}>Score: {score} / {questions.length}</Box>
    </Box>
  );
};

export default Questions;