import {FETCH_QUESTIONS} from "../actionsTypes";


const initialState = {
  questions: []
}

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS: {
      return {
        ...state, questions: action.payload
      }
    }
    default:
      return state
  }
}

export default questionsReducer;