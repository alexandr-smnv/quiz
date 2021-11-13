import {ADD_ANSWER, CLEAN_STATISTIC} from "../actionsTypes";


export const handleAddAnswer = (payload) => {
  return {
    type: ADD_ANSWER,
    payload
  }
}

export const handleCleanStatistic = () => {
  return {
    type: CLEAN_STATISTIC
  }
}