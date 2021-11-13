import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import settingsReducer from "./reducers/settingsReducer";
import questionsReducer from "./reducers/questionsReducer";


const rootReducers = combineReducers({
  settingsReducer: settingsReducer,
  questionsReducer: questionsReducer
})


const store = createStore(rootReducers, composeWithDevTools())

export default store;