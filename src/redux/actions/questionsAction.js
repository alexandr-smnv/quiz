import {CHANGE_SCORE, CLEAN_QUESTIONS, FETCH_QUESTIONS} from "../actionsTypes";


export const handleFetchQuestions = (questions) => {
  return {
    type: FETCH_QUESTIONS,
    payload: questions
  }
}

export const handleScoreChange = (score) => {
  return {
    type: CHANGE_SCORE,
    payload: score
  }
}

export const handleCleanQuestions = () => {
  return {
    type: CLEAN_QUESTIONS
  }
}