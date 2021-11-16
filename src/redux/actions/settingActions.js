import {
  CHANGE_AMOUNT,
  CHANGE_SETTINGS,
} from "../actionsTypes";


export const handleChangeSettings = (settings) => {
  return {
    type: CHANGE_SETTINGS,
    payload: settings
  }
}

export const handleAmountChange = (amount) => {
  return {
    type: CHANGE_AMOUNT,
    payload: amount
  }
}