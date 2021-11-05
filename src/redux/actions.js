import {CHANGE_AMOUNT, CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_SCORE, CHANGE_TYPE} from "./actionsTypes";


export const handleCategoryChange = (category) => {
  return {
    type: CHANGE_CATEGORY,
    payload: category
  }
}

export const handleDifficultyChange = (difficulty) => {
  return {
    type: CHANGE_DIFFICULTY,
    payload: difficulty
  }
}

export const handleTypeChange = (type) => {
  return {
    type: CHANGE_TYPE,
    payload: type
  }
}

export const handleAmountChange = (amount) => {
  return {
    type: CHANGE_AMOUNT,
    payload: amount
  }
}

export const handleScoreChange = (score) => {
  return {
    type: CHANGE_SCORE,
    payload: score
  }
}