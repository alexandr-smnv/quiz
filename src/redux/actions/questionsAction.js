import {FETCH_QUESTIONS} from "../actionsTypes";


export const handleFetchQuestions = (questions) => {
  return {
    type: FETCH_QUESTIONS,
    payload: questions
  }
}