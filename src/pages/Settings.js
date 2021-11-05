import React from 'react';
import SelectField from "../components/SelectField";
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate()

  const {response, error, loading} = useAxios({url: "api_category.php"})

  if (loading) {
    return (
      <Box mt={30}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Typography variant={"h6"} mt={20} color={"red"}>
        Some Want Wrong!
      </Typography>
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/questions')
  }

  const difficultyOptions = [
    {id: 'easy', name: 'Easy'},
    {id: 'medium', name: 'Medium'},
    {id: 'hard', name: 'Hard'},
  ]

  const typeOptions = [
    {id: 'multiple', name: 'Multiple'},
    {id: 'boolean', name: 'True/False'}
  ]

  return (
    <form onSubmit={handleSubmit}>
      <SelectField options={response.trivia_categories} label="Category"/>
      <SelectField options={difficultyOptions} label="Difficulty"/>
      <SelectField options={typeOptions} label="Type"/>
      <TextFieldComp />
      <Box mt={3} width={"100%"}>
        <Button fullWidth variant={"contained"} type={"submit"}>
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;