import {ADD_ANSWER, CLEAN_STATISTIC} from "../actionsTypes";


const initialState = []

const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER: {
      return [...state, action.payload]
    }
    case CLEAN_STATISTIC: {
      return []
    }
    default:
      return state
  }
}

export default statisticsReducer;