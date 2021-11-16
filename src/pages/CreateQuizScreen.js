import React, {useState} from 'react';
import TextFieldComp from "../components/TextFieldComp";
import {Box, Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {handleFetchQuestions} from "../redux/actions/questionsAction";
import {useNavigate} from "react-router-dom";

const CreateQuizScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [incorrectAnswer1, setIncorrectAnswer1] = useState('');
  const [incorrectAnswer2, setIncorrectAnswer2] = useState('');
  const [incorrectAnswer3, setIncorrectAnswer3] = useState('');

  const [quizInfo, setQuizInfo] = useState([]);

  const handleAddQuestion = (e) => {
    setQuizInfo([...quizInfo, {
      question: question,
      correct_answer: correctAnswer,
      incorrect_answers: [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3]
    }])
    setQuestion('')
    setCorrectAnswer('')
    setIncorrectAnswer1('')
    setIncorrectAnswer2('')
    setIncorrectAnswer3('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(handleFetchQuestions(quizInfo))
    navigate('/questions')
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextFieldComp
        name="question"
        type="text"
        label="Enter your question"
        handleChange={(e) => setQuestion(e.target.value)}
      />
      <TextFieldComp
        name="correctAnswer"
        type="text"
        label="Enter correct answer"
        handleChange={(e) => setCorrectAnswer(e.target.value)}
      />

      <TextFieldComp
        name="incorrectAnswer"
        type="text"
        label="Enter incorrect answer"
        handleChange={(e) => setIncorrectAnswer1(e.target.value)}
      />
      <TextFieldComp
        name="incorrectAnswer"
        type="text"
        label="Enter incorrect answer"
        handleChange={(e) => setIncorrectAnswer2(e.target.value)}
      />
      <TextFieldComp
        name="incorrectAnswer"
        type="text"
        label="Enter incorrect answer"
        handleChange={(e) => setIncorrectAnswer3(e.target.value)}
      />

      <Box mt={3} width={"100%"}>
        <Button onClick={handleAddQuestion} fullWidth variant={"contained"}>
          Add question
        </Button>
      </Box>

      <Box mt={3} width={"100%"}>
        <Button fullWidth variant={"contained"} type={"submit"}>
          Create quiz
        </Button>
      </Box>
    </form>
  );
};

export default CreateQuizScreen;
