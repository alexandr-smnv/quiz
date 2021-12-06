import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {handleScoreChange} from "../redux/actions/questionsAction";
import {decode} from "html-entities";
import {handleAddAnswer} from "../redux/actions/statisticsAction";

// функция рандомного числа
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

const QuestionsScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {name} = useSelector(state => state.settings)
  const {questions, score} = useSelector(state => state.questionsReducer)
  // индекс текущего вопроса
  const [questionIndex, setQuestionIndex] = useState(0);
  // варианты ответов
  const [options, setOptions] = useState([]);
  // заполняется когда принят ответ
  const [selected, setSelected] = useState(null);
  // данные об ответе (для статистики)
  const [answer, setAnswer] = useState({
    question: '',
    currentAnswer: '',
    correctAnswer: ''
  });


  useEffect(() => {
    if (questions?.length) {
      // индекс вопроса из localStorage
      const indexStr = localStorage.getItem('indexQuestion')
      // если индекс 0 и есть в localStorage данные об индексе - берем их
      // если нет то записываем в localStorage индекс текущего вопроса
      if (!questionIndex && indexStr) {
        setQuestionIndex(JSON.parse(indexStr))
      } else {
        localStorage.setItem('indexQuestion', JSON.stringify(questionIndex))
      }
      // загрузка вопроса по индексу
      const questionInfo = questions[questionIndex]
      // загрузка неправильных ответов
      let answers = [...questionInfo.incorrect_answers]
      // добавление в массив ответов правильный ответ на рандомное место
      answers.splice(getRandomInt(3), 0, questionInfo.correct_answer)
      setOptions(answers)
    }
  }, [questions, questionIndex])

  // нажатие по ответу
  const handleClickAnswer = (data) => {
    const questionInfo = questions[questionIndex];
    // обработка счетчика правильных ответов
    if (data === questionInfo.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }
    setAnswer({
      question: questionInfo.question,
      correctAnswer: questionInfo.correct_answer,
      currentAnswer: data
    })
    setSelected(data)
  };

  // функция для окрашивания правильного и неправильного ответов
  const handleSelect = (data) => {
    const question = questions[questionIndex];
    // если выбранный ответ правильный - выделить зеленым
    if (selected === data && selected === question.correct_answer) return "success";
    // если выбранный ответ неправильный - выделить красным
    else if (selected === data && selected !== question.correct_answer) return "error";
    // выделить правильный ответ - зеленым
    else if (data === question.correct_answer) return "success";
  };

  // переход на следующий вопрос
  const handleNextQuestion = () => {
    if (selected) {
      dispatch(handleAddAnswer(answer))
      setSelected(null)
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(questionIndex + 1);
      } else {
        navigate("/score");
      }
    } else {
      // добавить alert
      console.log('Выберите вариант ответа')
    }
  }

  const handleExit = () => {
    navigate('/quiz')
  }

  return (
    <Box>
      <Typography variant={"h4"}>Hello, {name ? name : "Dear friend"}!!!</Typography>
      <Typography mt={1} variant={"h4"}>Question № {questionIndex + 1}</Typography>
      <Typography mt={2} fontWeight={700}>{decode(questions[questionIndex]?.question)}</Typography>

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

      <Grid mt={2} justifyContent={"center"} container spacing={2}>
        <Grid item xs={4}>
          <Button color={"error"} onClick={handleExit} fullWidth variant="contained">Exit</Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleNextQuestion} color={'success'} fullWidth variant="contained">Next</Button>
        </Grid>
      </Grid>

      <Box mt={3}>Score: {score} / {questions.length}</Box>
    </Box>
  );
};

export default QuestionsScreen;