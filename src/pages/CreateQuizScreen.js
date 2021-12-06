import React, {useEffect, useRef, useState} from 'react';
import TextFieldComp from "../components/TextFieldComp";
import {
  Box,
  Button, useForkRef
} from "@mui/material";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const CreateQuizScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // Информация об отдельном вопросе
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [incorrectAnswer1, setIncorrectAnswer1] = useState('');
  const [incorrectAnswer2, setIncorrectAnswer2] = useState('');
  const [incorrectAnswer3, setIncorrectAnswer3] = useState('');
  // Информация о квизе
  const [titleQuiz, setTitleQuiz] = useState('');
  const [questions, setQuestions] = useState([]);
  // Массив квизов
  const [quizes, setQuizes] = useState([]);

  const [isDone, setIsDone] = useState(false);
  // isMount служить для того, чтобы запись не производилась при первом рендере
  const isMounted = useRef(false)

  // первый рендер
  useEffect(() => {
    // берем значение из localStorage
    const quizesStr = localStorage.getItem('Quizes')
    // если значение есть - парсим и записываем в quizes
    if (quizesStr) {
      setQuizes(JSON.parse(quizesStr))
    }
  }, []);

  // запись в localStorage данных о квизах
  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem('Quizes', JSON.stringify(quizes))
      setTitleQuiz('')
      navigate('/my-quizes')
    } else {
      isMounted.current = true
    }
  }, [isDone]);


  // добавление вопроса
  const handleAddQuestion = (e) => {
    if (question && correctAnswer && incorrectAnswer1 && incorrectAnswer2 && incorrectAnswer3) {
      setQuestions([...questions, {
        question: question,
        correct_answer: correctAnswer,
        incorrect_answers: [incorrectAnswer1, incorrectAnswer2, incorrectAnswer3]
      }])
      setQuestion('')
      setCorrectAnswer('')
      setIncorrectAnswer1('')
      setIncorrectAnswer2('')
      setIncorrectAnswer3('')
    } else {
      alert('Заполните все поля')
    }
  }

  // добавление
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (question || correctAnswer || incorrectAnswer1 || incorrectAnswer2 || incorrectAnswer3) {
      alert('Вы не добавили последний вопрос')
    } else {
      setQuizes([...quizes, {name: titleQuiz, questions: questions}])
      setIsDone(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextFieldComp
          name="title"
          type="text"
          label="Enter title your quiz"
          value={titleQuiz}
          handleChange={(e) => setTitleQuiz(e.target.value)}
        />
        <TextFieldComp
          name="question"
          type="text"
          label="Enter your question"
          value={question}
          handleChange={(e) => setQuestion(e.target.value)}
        />
        <TextFieldComp
          name="correctAnswer"
          type="text"
          label="Enter correct answer"
          value={correctAnswer}
          handleChange={(e) => setCorrectAnswer(e.target.value)}
        />
        <TextFieldComp
          name="incorrectAnswer"
          type="text"
          label="Enter incorrect answer"
          value={incorrectAnswer1}
          handleChange={(e) => setIncorrectAnswer1(e.target.value)}
        />
        <TextFieldComp
          name="incorrectAnswer"
          type="text"
          label="Enter incorrect answer"
          value={incorrectAnswer2}
          handleChange={(e) => setIncorrectAnswer2(e.target.value)}
        />
        <TextFieldComp
          name="incorrectAnswer"
          type="text"
          label="Enter incorrect answer"
          value={incorrectAnswer3}
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
    </>


  );
};

export default CreateQuizScreen;
