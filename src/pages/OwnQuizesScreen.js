import React, {useEffect, useState} from 'react';
import {Box, Button, Card, CardContent, Typography} from "@mui/material";
import {handleFetchQuestions} from "../redux/actions/questionsAction";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const OwnQuizesScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    const quizesStr = localStorage.getItem('Quizes')
    if (quizesStr) {
      setQuizes(JSON.parse(quizesStr))
    }
    console.log(quizes)
  }, [])

  const handleStartQuiz = (index) => {
    dispatch(handleFetchQuestions(quizes[index].questions))
    navigate('/questions')
  }

  if (!quizes.length) {
    console.log('jbb')
    return (
      <Typography variant={'h6'} >
        No created own quiz!
      </Typography>
    )
  }

  return (
    <>
      {quizes.map((quiz, index) => (
        <Box mb={2} key={quiz.name}>
          <Card sx={{minWidth: 275}}>
            <CardContent>
              <Typography variant="h6">
                {quiz.name}
              </Typography>
              <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                Количество вопросов: {quiz.questions.length}
              </Typography>
              <Button onClick={() => handleStartQuiz(index)} variant='contained' color='primary'>
                Get start
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
};

export default OwnQuizesScreen;
