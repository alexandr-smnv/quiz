import {combineReducers, createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import settingsReducer from "./reducers/settingsReducer";
import questionsReducer from "./reducers/questionsReducer";
import statisticsReducer from "./reducers/statisticsReducer";


const rootReducers = combineReducers({
  settings: settingsReducer,
  questionsReducer: questionsReducer,
  statistics: statisticsReducer
})

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('questions', JSON.stringify(state.questionsReducer));
    localStorage.setItem('statistic', JSON.stringify(state.statistics));
  } catch (e) {
    console.error(e);
  }
};

const loadQuestionFromLocalStorage = () => {
  try {
    const questionStr = localStorage.getItem('questions');

    return questionStr ? JSON.parse(questionStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const loadStatisticFromLocalStorage = () => {
  try {
    const statisticStr = localStorage.getItem('statistic');

    return statisticStr ? JSON.parse(statisticStr) : undefined;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const persistedStore = {
  questionsReducer: loadQuestionFromLocalStorage(),
  statistics: loadStatisticFromLocalStorage()
};


const store = createStore(rootReducers, persistedStore, devToolsEnhancer())
console.log(store.getState())


store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;