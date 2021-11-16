import {CHANGE_AMOUNT, CHANGE_SETTINGS} from "../actionsTypes";

const initialState = {
  name: "",
  question_category: "",
  question_difficulty: "",
  question_type: "",
  amount_of_question: "",
}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return {
        ...state,
        // отрефакторить
        name: action.payload.name,
        question_category: action.payload.category,
        question_difficulty: action.payload.difficulty,
        question_type: action.payload.type,
        amount_of_question: action.payload.amount
      }
    case CHANGE_AMOUNT:
      return {
        ...state,
        amount_of_question: action.payload
      }
    default:
      return state
  }
}

export default settingsReducer;