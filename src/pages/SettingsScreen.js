import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import axios from "axios";

import {Box, Button, CircularProgress, Typography} from "@mui/material";

import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";

import {handleChangeSettings} from "../redux/actions/settingActions";
import {handleFetchQuestions, handleScoreChange} from "../redux/actions/questionsAction";

import useAxios from "../hooks/useAxios";
import {difficultyOptions, typeOptions} from "../data/data";
import {handleCleanStatistic} from "../redux/actions/statisticsAction";


const SettingsScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const resCategory = useAxios({url: "api_category.php"})
  // данные для получения массива вопросов
  const [settings, setSettings] = useState({
    name: "",
    category: "",
    difficulty: "",
    type: "",
    amount: 10
  });

  // ==== формирование адресной строки для отправки
  let apiUrl = `/api.php?amount=${settings.amount}`

  if (settings.category) {
    apiUrl = apiUrl.concat(`&category=${settings.category}`)
  }
  if (settings.difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${settings.difficulty}`)
  }
  if (settings.type) {
    apiUrl = apiUrl.concat(`&type=${settings.type}`)
  }

  // ==== формирование адресной строки для отправки

  // запрос на сервер, запись полученных ответов в redux
  const fetchQuestions = () => {
    axios({url: apiUrl})
      .then(response => dispatch(handleFetchQuestions(response.data.results)))
      .then(navigate('/questions'))
  }

  // запись параметров из inputs
  const handleChange = (e) => {
    setSettings({...settings, [e.target.name]: e.target.value})
  }

  // submit формы (запись параметров в redux, отправка запроса на сервер)
  const handleSubmit = (event) => {
    event.preventDefault()
    // запись параметров в redux
    dispatch(handleChangeSettings(settings))
    fetchQuestions()
    // удаление предыдущего счетчика
    dispatch(handleScoreChange(0))
    // удаление предыдущие статистики
    dispatch(handleCleanStatistic())
    // удаление из localStorage индекса текущего вопроса
    localStorage.removeItem('indexQuestion')
  }

  const handleContinueQuiz = () => {
    navigate('/questions')
  }

  // отображение загрузки
  if (resCategory.loading) {
    return (
      <Box mt={30}>
        <CircularProgress />
      </Box>
    )
  }

  // отображение ошибки
  if (resCategory.error) {
    return (
      <Typography variant={"h6"} mt={20} color={"red"}>
        Some Want Wrong!
      </Typography>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextFieldComp
        name="name"
        type="text"
        label="Enter your name"
        handleChange={handleChange}
      />
      <SelectField
        name="category"
        options={resCategory.response.trivia_categories}
        label="Category"
        value={settings.category}
        handleChange={handleChange}
      />
      <SelectField
        name="difficulty"
        options={difficultyOptions}
        label="Difficulty"
        value={settings.difficulty}
        handleChange={handleChange}
      />
      <SelectField
        name="type"
        options={typeOptions}
        label="Type"
        value={settings.type}
        handleChange={handleChange}
      />
      <TextFieldComp
        name="amount"
        type="number"
        label="Amount of questions"
        handleChange={handleChange}
      />
      <Box mt={3} width={"100%"}>
        <Button fullWidth variant={"contained"} type={"submit"}>
          Get new quiz
        </Button>
      </Box>

      <Box mt={3} width={"100%"}>
        <Button fullWidth variant={"contained"} color={'success'} onClick={handleContinueQuiz}>
          Continue quiz
        </Button>
      </Box>
    </form>
  );
};

export default SettingsScreen;