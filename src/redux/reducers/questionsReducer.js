import {CHANGE_SCORE, CLEAN_QUESTIONS, FETCH_QUESTIONS} from "../actionsTypes";


const initialState = {
  questions: [],
  score: 0
}

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS: {
      return {
        ...state, questions: action.payload
      }
    }
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload
      }
    case CLEAN_QUESTIONS:
      return initialState

    default:
      return state
  }
}

export default questionsReducer;