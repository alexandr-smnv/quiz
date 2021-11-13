import React, {useState} from 'react';
import SelectField from "../components/SelectField";
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import {useNavigate} from 'react-router-dom';
import {difficultyOptions, typeOptions} from "../data/data";
import {useDispatch} from "react-redux";
import {handleChangeSettings} from "../redux/actions/settingActions";
import axios from "axios";
import {handleFetchQuestions} from "../redux/actions/questionsAction";

const Settings = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const resCategory = useAxios({url: "api_category.php"})
  const [settings, setSettings] = useState({
    name: "",
    category: "",
    difficulty: "",
    type: "",
    amount: 10
  });

  const handleChange = (e) => {
    setSettings({...settings, [e.target.name]: e.target.value})
  }

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

  const fetchQuestions = () => {
    axios({url: apiUrl})
      .then(response => dispatch(handleFetchQuestions(response.data.results)))
      .then(navigate('/questions'))
  }

  if (resCategory.loading) {
    return (
      <Box mt={30}>
        <CircularProgress />
      </Box>
    )
  }

  if (resCategory.error) {
    return (
      <Typography variant={"h6"} mt={20} color={"red"}>
        Some Want Wrong!
      </Typography>
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(handleChangeSettings(settings))
    fetchQuestions()

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
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;